import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoTitle from './LogoTitle.js';
import { Container, Row, Col, Image } from 'react-bootstrap';
import placeholderImageCN from "./Images/CN.jpg";
import placeholderImageGM from "./Images/GM.jpg";
import placeholderImageLE from "./Images/LE.png";
import placeholderImagePN from "./Images/PN.jpg";

function About(){
    return(
        <Container fluid class="con">
            <LogoTitle />
            <Row>
                <Col className="page-title"><h1>About Us</h1></Col>
            </Row>
            <Row className="body-row">
                <Col className="section-title"><h2>MISSION</h2></Col>
            </Row>
            <Row className="body-row">
                <Col className="section-content"><p>...Mission Content...</p></Col>
            </Row>
            <Row className="body-row">
                <Col className="section-title"><h2>Our Story</h2></Col>
            </Row>
            <Row className="body-row">
                <Col className="section-content"><p>...Our Story Content...</p></Col>
            </Row>
            <Row className="body-row">
                <Col className="section-title"><h2>MEET THE TEAM MEMBERS</h2></Col>
            </Row>
            <Row className="body-row">
                <Col lg={2}></Col>
                <Col lg={3}><div><Image src={placeholderImageCN} width="300" height="300" roundedCircle /></div></Col>
                <Col lg={5} className="member-info">
                    <h3><strong>Christy Neal</strong></h3>
                    <h3>Team Leader</h3>
                    <p></p>
                </Col>
                <Col lg={2} sm={1}></Col>
            </Row>
            <Row className="body-row">
                <Col lg={2}></Col>
                <Col lg={3}><div><Image src={placeholderImageGM} width="300" height="300" roundedCircle /></div></Col>
                <Col lg={5} className="member-info">
                    <h2><strong>Gopi Macha</strong></h2>
                    <h3>Team Member</h3>
                    <p></p>
                </Col>
                <Col lg={2} sm={1}></Col>
            </Row>
            <Row className="body-row">
                <Col lg={2}></Col>
                <Col lg={3}><div><Image src={placeholderImageLE} width="300" height="300" roundedCircle /></div></Col>
                <Col lg={5} className="member-info">
                    <h2><strong>Leul Endashaw</strong></h2>
                    <h3>Team Member</h3>
                    <p></p>
                </Col>
                <Col lg={2} sm={1}></Col>
            </Row>
            <Row className="body-row">
                <Col lg={2} xs={3}></Col>
                <Col lg={3} xs={6}><div><Image src={placeholderImagePN} width="300" height="300" roundedCircle /></div></Col>
                <Col lg={5} xs={6} className="member-info">
                    <h2><strong>Phuong Nguyen</strong></h2>
                    <h3>Team Member</h3>
                    <p>Phuong is currently a graduate student at Kennesaw State University. His bachelor degree is in 
                        Civil Engineering. He is always facinated about how computer technology works and developped. 
                        That is why he have chosen Software Engineering for his advance degree. Completing this web app 
                        in a timely manner will help him gain more experiences in web application development and increase 
                        chances for job seeking in the future.</p>
                </Col>
                <Col lg={2} xs={3}></Col>
            </Row>
        </Container>
    )
}
export default About;