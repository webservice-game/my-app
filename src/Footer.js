import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Footer(){
    return(
        <Container fluid 
        style={{
                    position: "relative",
                    marginTop: "-100px",
                    clear: "both",
                    backgroundColor: "#353a3d",
                    color: "white"
                }}>
            <Row style={{textAlign: "left"}}>
                <Col lg={2}></Col>
                <Col lg={4}>
                    <h1 style={{color: "#959b9e"}}>GAME MATCHMAKING</h1>
                    <h5><strong>Where your new gaming buddy can be found</strong></h5>
                </Col>
                <Col lg={1} style={{textAlign: "center"}}>
                    <h3 style={{color: "#959b9e"}}><strong>MENU</strong></h3>
                    <h4><a href="/" style={{color: "white"}}>Home</a></h4>
                    <h4><a href="/About" style={{color: "white"}}>About</a></h4>
                </Col>
                <Col lg={3}>
                    <h3 style={{color: "#959b9e"}}><strong>CONTACT EMAIL</strong></h3>
                    <h4>Christy Neal - cneal21@students.kennesaw.edu</h4>
                    <h4>Gopi Macha - gmacha@students.kennesaw.edu</h4>
                    <h4>Leul Endashaw - lendasha@students.kennesaw.edu</h4>
                    <h4>Phuong Nguyen - pnguye71@students.kennesaw.edu</h4>
                </Col>
                <Col lg={2}></Col>
            </Row>
            <Row>
                <Col lg={2}></Col>
                <Col lg={8}><h6>@Game Matchmaking 2021. All rights reserved.</h6></Col>
                <Col lg={2}></Col>
            </Row>
        </Container>
    )
}
export default Footer;