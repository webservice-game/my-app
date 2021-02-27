import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoTitle from './LogoTitle.js';
import Footer from './Footer.js';
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
                <Col className="section-content"><p>Playing games allows an escape from reality into another reality. The competition to win by itself gives gaming an addictive flavor to it. Mainly our system aims to solve the hustle gamers have to go through to find the perfect gaming partner. In order to comprehend and completely immerse once self into this multi playing competitive environment perfectly selected complimentary skill set between team mates or partners is needed. Once that is achieved the likelihood of winning sky rockets than prior odds. Our mission is mainly to provide that for gamers so that they have the perfect team and partnerships and win every match they go in to.</p></Col>
            </Row>
            <Row className="body-row">
                <Col className="section-title"><h2>OUR STORY</h2></Col>
            </Row>
            <Row className="body-row">
                <Col className="section-content"><p>The GMatch team is comprised of four unique individuals with a common goal: creating a platform to help players find their team. With GMatch, you can match with gamers with similar interests and skill level. GMatch is the premier site to match gamers all over the world and is the perfect haven for locating your ideal team.
                                                    Upon seeing first-hand how difficult it can be to find teammates for online games, we began developing this app to help gamers globally and to fill a sector of the gaming world that's missing. 
                                                    Use GMatch to find players who are in search of teammates with similar skill sets, tendencies, and attitudes. Our team wants to help you find your team.</p></Col>
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
                    <h5>Team Membe</h5>
                    <p>Phuong is currently a graduate student at Kennesaw State University. His bachelor degree is in 
                        Civil Engineering. He is always facinated about how computer technology works and developped. 
                        That is why he has chosen Software Engineering for his advance degree. Completing this web app 
                        in a timely manner will help him gain more experiences in web application development and increase 
                        chances for job seeking in the future.</p>
                </Col>
            </Row>
            <Footer />
        </Container>
        
    )
}
export default About;