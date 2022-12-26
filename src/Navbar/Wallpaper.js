import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Container } from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';


function Wallpaper(props) {

    return (
        <>
      <Container>
      <Modal
        {...props}
        key={Wallpaper}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        <h2>Chat Settings</h2>
        </Modal.Header>
        <Modal.Body>
        <Row>
            <Col style={{  backgroundColor: "White",width: "300px",border: "5px solid black",padding: "50px",margin: "20px", cursor:"pointer"}}>
            White
            </Col>
            <Col style={{  backgroundColor: "Pink",width: "300px",border: "5px solid black",padding: "50px",margin: "20px",cursor:"pointer"}}>
            Pink
            </Col>
            <Col style={{  backgroundColor: "Yellow",width: "300px",border: "5px solid black",padding: "50px",margin: "20px",cursor:"pointer"}}>
            Yellow
            </Col>
        </Row>
        <Row>
            <Col style={{  backgroundColor: "Grey",width: "300px",border: "5px solid black",padding: "50px",margin: "20px",cursor:"pointer"}}>
            Grey
            </Col>
            <Col style={{  backgroundColor: "Purple",width: "300px",border: "5px solid black",padding: "50px",margin: "20px",cursor:"pointer"}}>
            Purple
            </Col>
            <Col style={{ backgroundColor: "Green",width: "300px",border: "5px solid black",padding: "50px",margin: "20px",cursor:"pointer"}}>
            Green
            </Col>
        </Row>
        </Modal.Body>
      </Modal>
      </Container>
      </>
    )
  }
  
  export default Wallpaper