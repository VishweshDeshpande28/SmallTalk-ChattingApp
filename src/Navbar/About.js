import Modal from 'react-bootstrap/Modal';
import React from 'react'
import { Container } from 'react-bootstrap';
import styled from "styled-components";


function About(props) {
  return (
    <Container>
    <Modal
      {...props}
      key={About}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
      <h3>About this App</h3>
      </Modal.Header>
      <Modal.Body>
      <Div>
      Speech-To-Text:
      <br/>
      Speech recognition is when a user is able to speak into their computer’s microphone, the speech gets processed into something the readble for the computers on the other end. The servers on the other end then return the interpreted speech into text! Now before I go any further I do want to bring up the fact that this API is not available on all browsers. Check <a href='https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API' rel="noreferrer" target="_blank"><u>here</u></a> if you browser is compatible. Though you can utilize the Web Speech API on it’s own, the react-speech-recognition package is going to make life a lot easier for us for how easy the syntax is.
      </Div>
      </Modal.Body>
    </Modal>
    </Container>
  )
}

export default About;

const Div = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  padding: 20px;
  font-weight: bold;
  color: black;
  overflow-wrap: break-word;
`;