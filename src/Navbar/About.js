import Modal from 'react-bootstrap/Modal';
import React from 'react'
import { Container } from 'react-bootstrap';


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
      <Modal.Header closeButton>
      <h2>About the App</h2>
      </Modal.Header>
      <Modal.Body>
      <div>
      Speech recognition is when a user is able to speak into their computer’s microphone, the speech gets processed into something the readble for the computers on the other end. The servers on the other end then return the interpreted speech into text! Now before I go any further I do want to bring up the fact that this API is not available on all browsers. Check <a href='https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API' target="_blank"><u>here</u></a> if you browser is compatible. Though you can utilize the Web Speech API on it’s own, the react-speech-recognition package is going to make life a lot easier for us for how easy the syntax is.
      </div>
      </Modal.Body>
    </Modal>
    </Container>
  )
}

export default About