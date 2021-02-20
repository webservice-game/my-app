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
                <Col className="section-title"><h2>***CONTENT***</h2></Col>
            </Row>
            <Row>
                <Col>
                <h3>This is How It Works page</h3>
                </Col>
            </Row>
            <Footer />
        </Container>
        
    )
}
export default HowItWorks;