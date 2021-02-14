import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import placeholderImagePN from "./Images/PhuongNguyen.jpg";

function About(){
    return(
        <Container fluid>
            <Row>
                <Col lg={6} 
                    style={{
                                backgroundColor: "#ff9e16",
                                paddingTop: "20px",
                                paddingBottom: "114px",
                                color: "white"
                            }}>
                    <h1>BACKGROUND</h1>
                    <h2>Online gaming is an enormous industry that grows each year. 
                        As the audience for online multiplayer games has gotten bigger, 
                        the technology to meaningfully match these players has lagged behind. 
                        Often times players, especially in competitive settings, are matched 
                        using game metrics and statistics in order to have players of a similar 
                        skill caliber play together. As this has become commonplace, players find 
                        themselves matched with people who appear only as a username. With a lack 
                        of personal connection, some players engage in negative communication which 
                        results in a lower quality gaming experience for all.</h2>
                </Col>
                <Col lg={6} 
                    style={{
                                backgroundColor: "#78c4e4",
                                paddingTop: "20px",
                                paddingBottom: "50px",
                                color: "white"
                            }}>
                    <h1>OUR MISSIONS</h1>
                    <h2>This web application aims to resolve existing matchmaking issues by matching 
                        players on criteria beyond simply skill. It collects more 
                        information about a player, including parameters related to play-style, preferences 
                        and attitude. Thus, it will reintroduce a human component to online teammates and 
                        help to brighten a gamer’s horizon with improved gaming experiences. Taking data 
                        from in-game sources and crossing it with player and user generated behavior profiles, 
                        your prospect system should match players with teammates that suit both their skill 
                        and behavior. In addition, it enables users to find players from other 
                        games, add them as friends, and form groups; all with like-minded players that they find in matchmaking.</h2>
                </Col>
            </Row>
            <Row 
                style={{
                            backgroundColor: "#4e5a63",
                            paddingTop: "20px",
                            paddingBottom: "50px",
                            color: "white"
                        }}>
                <Col lg={2}></Col>
                <Col lg={8}>
                    <h1>OUR TEAMS</h1>
                    <h2>This web application is developed by team #2. The team is comprised of graduate students majoring in 
                        Software Engineering at Kennesaw State University, Georgia.</h2>
                </Col>
                <Col lg={2}></Col>
            </Row>
            <Row>
                <Col><h1>TEAM MEMBERS</h1></Col>
            </Row>
            <Row>
                <Col lg={2}></Col>
                <Col lg={4}><div><Image /></div></Col>
                <Col lg={4}><h2>Christy Neal</h2></Col>
                <Col lg={2}></Col>
            </Row>
            <Row>
                <Col lg={2}></Col>
                <Col lg={4}><div><Image /></div></Col>
                <Col lg={4}><h2>Gopi Macha</h2></Col>
                <Col lg={2}></Col>
            </Row>
            <Row>
                <Col lg={2}></Col>
                <Col lg={4}><div><Image /></div></Col>
                <Col lg={4}><h2>Leul Endashaw</h2></Col>
                <Col lg={2}></Col>
            </Row>
            <Row style={{display: "flex", marginBottom: "100px"}}>
                <Col lg={2}></Col>
                <Col lg={4} style={{borderTop: "10px solid black"}}><div><Image src={placeholderImagePN} width="200" height="200" roundedCircle /></div></Col>
                <Col lg={4} style={{borderTop: "10px solid black", paddingTop: "50px"}}>
                    <h2><strong>Phuong Nguyen</strong></h2>
                    <h3><strong>Skills:</strong> Java, React, JavaScript, HTML/CSS</h3>
                </Col>
                <Col lg={2}></Col>
            </Row>
        </Container>
    )
}
export default About;