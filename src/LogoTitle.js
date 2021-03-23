import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import placeholderImageLogo from "./Images/G.png";

function LogoTitle(){
    return(
        <Row>
            <Col><a href="/"><Image src={placeholderImageLogo} className="logo-title" /></a></Col>
        </Row>
    )
}

export default LogoTitle;