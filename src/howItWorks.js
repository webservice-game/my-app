import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import LogoTitle from './LogoTitle';
import Footer from './Footer.js';

function HowItWorks(){
    
    return(
        <Container fluid>
            <LogoTitle />
            <Row style={{marginTop:'10px'}}>
                <Col className="page-title"><h1>How It Works</h1></Col>
            </Row>
            <Row className="body-row">
                <Col className="section-title"><p style={{fontSize:'18px'}}>This system is intended to clarify, simplify and modify the gaming experience that we know of today. It will make winning simple by just choosing the best team mates you can find online and make coming up with the best unbeatable team from all over the world just a click away. 
To begin this winning journey all you need to do steps are as follow, to begin, click “Get Started”. From there, you may search in the data for name, rank, level, time played, and wins which will allow you to compose the best team based on their scores and ranking. You can then add to or remove from your friends list. If you would like to display more users, click the “Show More” button which will give you access to more players. Once you are done adding friends, you may export the list you’ve created to PDF for safe keeping offline. May the best gaming experience come for you from here on wards. 
Thank you</p></Col>
            </Row>
            <Row>
                 {/* <Col className="HIWDescription">
                <h3>This is How It Works page</h3>
                </Col> */}
            </Row>
            <Footer />
        </Container>
        
    )
}
export default HowItWorks;