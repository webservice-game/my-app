import powerslap from'./video.mp4'
import './App.css';
import axios from 'axios';
import Footer from './Footer.js';

// import { browserHistory } from 'react-router';
import { useHistory } from "react-router-dom";
import { Row } from 'react-bootstrap';

function Home(){
    const history = useHistory();
    function handleClick() {
        history.push(
            {
                pathname:"/start",
                // state:{detail:response.data}
        });
        // const options = {
        //     method: 'GET',
        //     url: 'https://api.pubg.com/shards/pc-na/leaderboards/division.bro.official.console-03/squad',
        //     headers: {
             
        //       'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5ZWQzNmVlMC01NDJkLTAxMzktZjdhNC01NzUxZjM2N2FmMzQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNjEzNjYyODU4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Ii0xYjJjN2NhMy01NjZlLTQ1ODYtOTk4OC1iZjBhZmM5ZTJmODMifQ.PxgiPhW--aQAKlhRaiGwriuiSir2gILZVB5tuXZtLXQ',
        //       'Accept': 'application/vnd.api+json'
        //     }
        //   };
          
         
         
        
            // var myObject = JSON.parse(newData);
            
            // console.log(newData)
          
        //   }).catch(function (error) {
        //     console.error(error);
        //   });
      
      }
    return(
        <div className="home" style={{height: "990px", paddingBottom: "100px"}}>
            <div style={{transform:'translatey(300px)'}}>
        <div className='Line1'> <h1>The Ultimate Destination</h1></div>
<div className= 'Line2'> <h1>For Gamers Match Making</h1></div>
               <div className='getStartedButton'>  <button onClick={handleClick}>Get Started</button></div>
            </div>
            {/* <video autoPlay loop muted
            style={{
                position:"absolute",
                height:"100%",
                width:"100%",
                left:"50%",
                top:"50%",
                objectFit:"cover",
                transform:"translate(-50%, -50%)",
                zIndex:"-1"
            }}
            >
                <source src ={powerslap} type="video/mp4" />
            </video> */}
        </div>        
    )
}
export default Home;
