import React,{Component, useState, useEffect} from "react"
import Profile from './profile.js'
import LogoTitle from './LogoTitle.js'
import Footer from './Footer.js'
import './getstarted.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Container, Row, Col, Image } from 'react-bootstrap';

import { Button } from 'primereact/button';
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css"
import "primereact/resources/primereact.css";
// import "primeflex/primeflex.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import { useHistory } from "react-router-dom";

  
function Started() { 
  const [call,setCall]=useState([])
  const [clicked,setClicked]=useState(false)
  const [count,setCount]=useState(1)
  const [friend,setFriend]=useState([])
  const history = useHistory();
 const [friendnotclicked,setno]=useState(true)
  let data=[]
  let or=[]
  
  // let count=1;
  // state= {
  //   callofduty:[],
  //   started:false

  // }
    // constructor(props) {
    //     super(props);

        // const [products, setProducts] = useState([]);
      
        // this.getFoootball = this.getFoootball.bind(this)
      // }
      useEffect(async()=>{
        callOfDuty();
      },[])
      function callOfDuty()  {
        setClicked(true)
        let counts = 1
        setCount(count + 1)
        var axios = require("axios").default;
        const options = {
          method: 'GET',
          url: `https://call-of-duty-modern-warfare.p.rapidapi.com/leaderboard/${count}/battle`,
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
                        name:'AddFriend',
                        addDisable:false,
                        removeDisable:false,
                        color: '#75868b',
                        timeplayed:ele.values.timePlayed,
                        wins:ele.values.wins,
                        kills: ele.values.kills,
                        killstreak: ele.values.killstreak,
                        assists: ele.values.assists,
                        headshots: ele.values.headshots,
                        misses: ele.values.misses
                    })
                   
                })
                // let numbersCopy = data.slice();
                // console.log(numbersCopy)
                // setCall([...call, data])
                setCall(old => [...old, ...data]);
                // setCall(data);
                console.log(call)
                // console.log(data)
                // self.setState({
                //   callofduty: data 
                // })
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
      
      // console.log(this.state.callofduty)
      }
       function dateTemplate(rowData, column) {
        return <div>
            <a  onClick={(event) => rowColumnClick(rowData)} >{rowData.playerName}</a>
        </div>;
    }
    function addButton(rowData){
      // console.log(rowData)
      return <div>
        {friendnotclicked && <button disabled={rowData.addDisable} style={{backgroundColor: rowData.color}} onClick={(event) => buttonClick(rowData)} >{rowData.name}</button>}
    
        {!friendnotclicked && <button onClick={(event) => removeClick(rowData)}>Remove Friend</button>}
     
      
      </div>
    }
   function buttonClick(rowdata){
      
  call.map((item, index)=>{
       if(rowdata.playerName==item.playerName){
       item.addDisable=true;
       item.color='#530102';
       item.name='Added'
      }
     })
     console.log(call)
    //  setCall(old => [...old, ...data]);
// console.log(rowdata)
let array=[rowdata]
setFriend(old => [...old, ...array]);
console.log(friend)

   }
   function removeClick(rowdata){
     console.log(rowdata)
     friend.map((item,index)=>{
       if(item.playerName==rowdata.playerName){
        friend.splice(index,1)
        setFriend(friend)
        // console.log(friend)
      
       }
     })
     setCall([])
     setCall(old => [...old, ...friend]);
     console.log(call)
    //  setCall([]);
  
   }
  function rowColumnClick(rowData){
    console.log(rowData)

    history.push(
      {
          pathname:"/Profile",
          state:{detail:rowData}
  });
    // this.props.history.push('/Profile');
    //     console.log(rowData);
    //     this.setState({
    //       started:true
    //     })
   }
  
   function showmoredata(){

    callOfDuty();
   }
   function friendsList(){
     setno(false)
    setCall([]);
    setCall(friend)
    console.log(call)
   }

   const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
    const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;
    const cols = [
      { field: 'playerName', header: 'Name' },
      { field: 'rank', header: 'Rank' },
      { field: 'level', header: 'Level' },
      { field: 'timeplayed', header: 'Time-Played' },
      { field: 'wins', header: 'Wins' }
  ];

  const exportColumns = cols.map(col => ({ title: col.header, dataKey: col.field }));
    const exportPdf = () => {
      import('jspdf').then(jsPDF => {
          import('jspdf-autotable').then(() => {
              const doc = new jsPDF.default(0, 0);
              doc.autoTable(exportColumns, call);
              doc.save('players.pdf');
          })
      })
  }
  const header = (
    

        <Button type="button" title="export toPDF" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning p-mr-2" data-pr-tooltip="PDF" />
      

);
    return (
      <div>
           {/* <div className="p-d-flex export-buttons">
           <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning p-mr-2 pdf" data-pr-tooltip="PDF" />
           </div> */}
         {/* <Tooltip target=".export-buttons>button" position="bottom" /> */}
     <Container fluid className="get-started-con">
        <LogoTitle />
      
          <div className="game-name-div">
            { friend[0]!=null && <button  value="Change value" onClick={friendsList} className="game-name-button">Friends List</button> }
          </div>
   
        <Row className="get-started-row">
    
          <Col className="game-data-board">
          <div className="card">
            {/* {!this.state.started &&  */}
            <DataTable value={call} header={!friendnotclicked?header:''}>
            
            <Column field="playerName" header="Name" body={dateTemplate} filter filterPlaceholder="Search by name" className="column-name styho"></Column>
                <Column field="rank" header="Rank"  filter filterPlaceholder="Search by rank" className="column-rank styho"></Column>
                
                <Column field="level" header="Level" filter filterPlaceholder="Search by level" className="column-level styho"></Column>
                <Column field="timeplayed" header="Time-Played" filter filterPlaceholder="Search by time" className="column-timeplay styho"></Column>
                <Column field="wins" header="Wins" filter filterPlaceholder="Search by wins" className="column-wins styho"></Column>
                <Column field="name" header="Actions" body={addButton} className="column-actions"></Column>
                
                {/* <Column field="quantity" header="Quantity"></Column> */}
            </DataTable>
            {friendnotclicked && <div style={{marginTop:"10px"}}><button  className="show-more-button" onClick={showmoredata}>Show More</button></div>}
              
            {/* <Paginator first={1} rows={4} ></Paginator> */}
            {/* } */}
                
                  
          </div>
          </Col>
        </Row>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> 
        <Footer />
     </Container>
        {/* <Route exact path="/Profile">
              <Profile/>
            </Route> */}
       

   
        
    
            </div>
      
      
    ) 
  
} 
  
export default Started;