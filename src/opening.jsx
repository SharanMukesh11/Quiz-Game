import { Col, Row } from "react-bootstrap";
import Pleft from "./assets/left.png"
import Pright from "./assets/right.png"
import './opening.css';
import audio from "./assets/audio.mp3"

export default function Opening(){
    return(
        <>

        <Row lg={12} className="fulldiv">
            <audio  autoPlay >
                <source src={audio}/>
            </audio>
            <Col lg={6} className="leftdiv p-0">
            <img src={Pleft} alt="" className="leftimg"/>
            </Col>
            <Col lg={6} className="rightdiv p-0">
            <img src={Pright} alt="" className="rightimg"/>            </Col>
        </Row>
             
        </>
    )
}