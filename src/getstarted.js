import React,{Component, useState, useEffect} from "react"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

  
class Started extends Component { 
  state= {
    callofduty:[]

  }
    constructor(props) {
        super(props);

        // const [products, setProducts] = useState([]);
      
        // this.getFoootball = this.getFoootball.bind(this)
      }
      callOfDuty = () => {
        let data=[]
        var axios = require("axios").default;
        const options = {
          method: 'GET',
          url: 'https://call-of-duty-modern-warfare.p.rapidapi.com/leaderboard/1/battle',
          headers: {
            'x-rapidapi-key': '2999e842eamshcede1a6258d4821p15ac5cjsnb3ab053a26fc',
            'x-rapidapi-host': 'call-of-duty-modern-warfare.p.rapidapi.com'
          }
        };
        var self = this;
        axios.request(options).then(function (response) {
          console.log(response.data.entries);
          response.data.entries.map(ele=>{
              data.push({
                        rank:ele.rank,
                        playerName:ele.username,
                        level:ele.values.level,
                        name:'name',
                        timeplayed:ele.values.timePlayed,
                        wins:ele.values.wins
    
                    })
                })
                // console.log(data)
                self.setState({
                  callofduty: data 
                })
                // console.log(this.state.callofduty)
        }).catch(function (error) {
          console.error(error);
        });
       
        
        // axios.request(options).then(function (response) {
        //     console.log(response.data.api.players);
        //     response.data.api.players.map(ele=>{
        //   data.push({
        //             age:ele.age,
        //             playerName:ele.player_name,
        //             position:ele.position

        //         })
        //     })
        //     console.log( data)
        // }).catch(function (error) {
        //     console.error(error);
        // });
      
      console.log(this.state.callofduty)
      }
       dateTemplate=(rowData, column)=> {
        return <div>
            <a  onClick={()=>this.rowColumnClick(rowData)}>{rowData.playerName}</a>
        </div>;
    }

   rowColumnClick(rowData){
        console.log(rowData);
    }
  render() { 
    return (
      <div>
        <div>
        <button  value="Change value" onClick={() => this.callOfDuty()}>Foot Ball </button>
        </div>
        <div className="card">
                <DataTable value={this.state.callofduty} >
                <Column field="playerName" header="Name" body={this.dateTemplate}></Column>
                    <Column field="rank" header="Rank"  ></Column>
                   
                    <Column field="level" header="level"></Column>
                    <Column field="timeplayed" header="timePlayed"></Column>
                    <Column field="wins" header="wins"></Column>
                    {/* <Column field="quantity" header="Quantity"></Column> */}
                </DataTable>
            </div>
      </div>
      
    ) 
  } 
} 
  
export default Started;