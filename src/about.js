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
                <Col className="section-content"><p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p></Col>
            </Row>
            <Row className="body-row">
                <Col className="section-title"><h2>OUR STORY</h2></Col>
            </Row>
            <Row className="body-row">
                <Col className="section-content"><p>...Our Story Content...</p></Col>
            </Row>
            <Row className="body-row">
                <Col className="section-title"><h2>MEET THE TEAM MEMBERS</h2></Col>
            </Row>
            <Row className="body-row body-row-member">
                <Col><div><Image src={placeholderImageCN} className="member-img" /></div></Col>
                <Col className="member-info">
                    <h3><strong>Christy Neal</strong></h3>
                    <h5>Team Leader</h5>
                    <p></p>
                </Col>
            </Row>
            <Row className="body-row body-row-member">
                <Col><div><Image src={placeholderImageGM} className="member-img" /></div></Col>
                <Col className="member-info">
                    <h3><strong>Gopi Macha</strong></h3>
                    <h5>Team Member</h5>
                    <p></p>
                </Col>
            </Row>
            <Row className="body-row body-row-member">
                <Col><div><Image src={placeholderImageLE} className="member-img" /></div></Col>
                <Col className="member-info">
                    <h3><strong>Leul Endashaw</strong></h3>
                    <h5>Team Member</h5>
                    <p></p>
                </Col>
            </Row>
            <Row className="body-row body-row-member">
                <Col ><div><Image src={placeholderImagePN} className="member-img" /></div></Col>
                <Col className="member-info">
                    <h3><strong>Phuong Nguyen</strong></h3>
                    <h5>Team Member</h5>
                    <p>Phuong is currently a graduate student at Kennesaw State University. His bachelor degree is in 
                        Civil Engineering. He is always facinated about how computer technology works and developped. 
                        That is why he have chosen Software Engineering for his advance degree. Completing this web app 
                        in a timely manner will help him gain more experiences in web application development and increase 
                        chances for job seeking in the future.</p>
                </Col>
            </Row>
        </Container>
    )
}
export default About;