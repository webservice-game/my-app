import React,{Component, useState, useEffect} from "react"
import { Container, Row, Col, Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { BackButton } from './BackButton'
import LogoTitle from "./LogoTitle";
import Footer from './Footer.js'
import './profile.css'

function Profile() { 
    const location = useLocation();
    const [playerData, setplayerData] = useState(location.state.detail)
console.log(playerData)
    return(
        <Container fluid class="con">
            <LogoTitle />
            <Row>
            <h3 style={{fontWeight: "bold", marginBottom: "25px"}}>PLAYER STATS</h3>
            </Row>
            <Row className="table-row">
                <Col className="table-col">
                    <Table bordered>
                        <tbody>
                            <tr>
                            <td>Player Name : </td>
                            <td>{playerData.playerName}</td>
                            </tr>
                            <tr>
                            <td>Level : </td>
                            <td>{playerData.level}</td>
                            </tr>
                            <tr>
                            <td>Rank : </td>
                            <td>{playerData.rank}</td>
                            </tr>
                            <tr>
                            <td>Time-Played : </td>
                            <td>{playerData.timeplayed}</td>
                            </tr>
                            <tr>
                            <td>Wins : </td>
                            <td>{playerData.wins}</td>
                            </tr>
                            <tr>
                            <td>Kills : </td>
                            <td>{playerData.kills}</td>
                            </tr>
                            <tr>
                            <td>Kills Streak : </td>
                            <td>{playerData.killstreak}</td>
                            </tr>
                            <tr>
                            <td>Assists : </td>
                            <td>{playerData.assists}</td>
                            </tr>
                            <tr>
                            <td>Head Shots : </td>
                            <td>{playerData.headshots}</td>
                            </tr>
                            <tr>
                            <td>Missed : </td>
                            <td>{playerData.misses}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <BackButton />
                </Col>
            </Row>
            <Footer />
        </Container>
    )

}
  
export default Profile;