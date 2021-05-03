import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import placeholderImageLogo from "./Images/G.png";
import placeholderImageFB from "./Images/fb.png";
import placeholderImageIS from "./Images/insta.png";
import placeholderImageLI from "./Images/linkedIn.png";
import placeholderImageTW from "./Images/twitter2.png";

function Footer(){
    return(
        <Row className="footer-con">
            <Row className="footer-header">
                <Col><a href="/"><Image src={placeholderImageLogo} className="logo-image"/></a></Col>
            </Row>
            <Row className="footer-navigation">
              <Col className="footer-navigation-col FooterHome"><h5><a href="/" className="anchor FooterHome">Home</a><span className="separation"></span></h5></Col>
                <Col className="footer-navigation-col FooterAU"><h5><a href="/about" className="anchor FooterAU">About Us</a><span className="separation"></span></h5></Col>
                <Col className="footer-navigation-col FooterHIW"><h5><a href="/how-it-works" className="anchor">How it works</a></h5></Col>
            </Row>
            <Row><div className="footer-line"></div></Row>
            <Row className="social-media">
                <Col><a href="http://instagram.com/gmatch_app"><Image src={placeholderImageIS} className="media-img" /></a></Col>
                <Col><a href="https://www.facebook.com/GMatch-App-101762755389183"><Image src={placeholderImageFB} className="media-img" /></a></Col>
                <Col><a><Image src={placeholderImageLI} className="media-img"/></a></Col>
                <Col><a href="http://twitter.com/gmatch_app"><Image src={placeholderImageTW} className="media-img" /></a></Col>
            </Row>
            <Row className="copyright">
                <Col>@2021 Web Services Team#</Col>
            </Row>
        </Row>
    )
}
export default Footer;
