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
        const options = {
            method: 'GET',
            url: 'https://call-of-duty-modern-warfare.p.rapidapi.com/leaderboard/1/battle',
            headers: {
              'x-rapidapi-key': 'ac093ee1f2msh711c9d5589d4e08p129456jsn3424f2f8ce58',
              'x-rapidapi-host': 'call-of-duty-modern-warfare.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
            console.log(response.data.entries);
            var  newData = JSON.stringify(response.data)
            // var myObject = JSON.parse(newData);
            
            // console.log(newData)
            history.push(
                {
                    pathname:"/start",
                    state:{detail:response.data}
            });
          }).catch(function (error) {
            console.error(error);
          });
      
      }
    return(
        <div className="home" style={{height: "990px", paddingBottom: "100px"}}>
            <div style={{transform:'translatey(300px)'}}>
<<<<<<< Updated upstream
                <h1>The Ultimate Destination</h1>
                <h1>For Gamers Match Making</h1>
                <button onClick={handleClick}>Get Started</button>
=======
        <div className='Line1'> <h1>The Ultimate Destination</h1></div>
<div className= 'Line2'> <h1>For Gamers Match Making</h1></div>
               <div className='getStartedButton'>  <button style={{"color":"#000"}} onClick={handleClick}>Get Started</button></div>
>>>>>>> Stashed changes
            </div>
            {<video autoPlay loop muted
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
            </video> }
        </div>        
    )
}
export default Home;