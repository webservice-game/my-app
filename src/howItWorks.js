import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import LogoTitle from './LogoTitle';
import Footer from './Footer.js';

function HowItWorks(){
    return(
        <Container fluid>
            <LogoTitle />
            <Row>
                <Col className="page-title"><h1>How It Works</h1></Col>
            </Row>
            <Row className="body-row">
                <Col className="section-title"></Col>
            </Row>
            <Row className="body-row">
                <Col className="section-content mission-text"><p>Playing games allows an escape from reality into another reality. The competition to win by itself gives gaming an addictive flavor to it. Mainly our system aims to solve the hustle gamers have to go through to find the perfect gaming partner. In order to comprehend and completely immerse once self into this multi playing competitive environment perfectly selected complimentary skill set between team mates or partners is needed. Once that is achieved the likelihood of winning sky rockets than prior odds. Our mission is mainly to provide that for gamers so that they have the perfect team and partnerships and win every match they go in to.</p></Col>
            </Row>
            <Footer />
        </Container>
        
    )
}
export default HowItWorks;
