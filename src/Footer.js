import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import placeholderImageFB from "./Images/fb.png";
import placeholderImageIS from "./Images/insta.png";
import placeholderImageLI from "./Images/linkedIn.png";
import placeholderImageTW from "./Images/twitter2.png";

function Footer(){
    return(
        <Container fluid className="footer-con">
            <Row className="footer-header">
                <Col><h3 className="footer-title">What ever the name is</h3></Col>
            </Row>
            <Row className="footer-navigation">
                <Col className="footer-navigation-col"><h5><a href="/about" className="anchor">About Us</a><span className="separation"></span></h5></Col>
                <Col className="footer-navigation-col"><h5><a href="/how-it-works" className="anchor">How it works</a></h5></Col>
            </Row>
            <Row><div className="footer-line"></div></Row>
            <Row className="social-media">
                <Col><a><Image src={placeholderImageIS} className="media-img" /></a></Col>
                <Col><a><Image src={placeholderImageFB} className="media-img" /></a></Col>
                <Col><a><Image src={placeholderImageLI} className="media-img"/></a></Col>
                <Col><a><Image src={placeholderImageTW} className="media-img" /></a></Col>
            </Row>
            <Row className="copyright">
                <Col>@2021 Web Services Team#2</Col>
            </Row>
        </Container>
    )
}
export default Footer;