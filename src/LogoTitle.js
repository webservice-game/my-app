import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import placeholderImageLogo from "./Images/G.png";

function LogoTitle(){
    return(
        <Row>
            <Col><Image src={placeholderImageLogo} className="logo-title" /></Col>
        </Row>
    )
}

export default LogoTitle;