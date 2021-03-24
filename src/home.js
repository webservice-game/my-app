import powerslap from'./video.mp4'
import './App.css';
import axios from 'axios';
import Footer from './Footer.js';
import photo from './video1.jpg'
import { Container, Row, Col, Image } from 'react-bootstrap';

// import { browserHistory } from 'react-router';
import { useHistory } from "react-router-dom";
// import { Row } from 'react-bootstrap';

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
        <div className="home" >
            <div style={{height:"624px",position:"relative"}}>
            <div style={{transform:'translatey(300px)'}}>
        <div className='Line1'> <h1>The Ultimate Destination</h1></div>
<div className= 'Line2'> <h1>For Gamers Match Making</h1></div>
               <div className='getStartedButton'>  <button  onClick={handleClick}>Get Started</button></div>
            </div>
            <div  className="image" style={{ backgroundImage: `url(${photo})`}}></div>
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
    
            <div>
<Container>
    <Row style={{paddingLeft:"100px"}}>
        <Col lg={{ size: 10, offset: 1 }} md={{ size: 12, offset: 1 }} style={{display: 'flex', justifyContent: 'center'}}>
            <Col  className="inside" md="3">
            <div className="Highlight">
                <div className="HighlightIconInner"> 
<div>
    <img src={photo} />
    {/* <p>benifit1</p> */}
</div>

                </div>
            </div>
            <h3>Benifit1</h3>
<div>
    <p>Eliminate thirst. Packed with electrolytes, vitamins and minerals at the perfect dosages for optimum hydration throughout your session.</p>
</div>
            </Col>
            <Col md="3" className="inside">
            <div className="Highlight">
                <div className="HighlightIconInner"> 
<div>
    <img src={photo} />
    {/* <p>benifit1</p> */}
</div>

                </div>
            </div>
            <h3>Benifit2</h3>
<div>
    <p>Eliminate thirst. Packed with electrolytes, vitamins and minerals at the perfect dosages for optimum hydration throughout your session.</p>
</div>
            </Col>
            <Col md="3" className="inside">
            <div className="Highlight">
                <div className="HighlightIconInner"> 
<div>
    <img src={photo} />
    {/* <p>benifit1</p> */}
</div>

                </div>
            </div>
            <h3>Benifit3</h3>
<div>
    <p>Eliminate thirst. Packed with electrolytes, vitamins and minerals at the perfect dosages for optimum hydration throughout your session.</p>
</div>
            </Col>
        </Col>
    </Row>
</Container>



            </div>
            <Footer />
        </div>        
    )
}
export default Home;
