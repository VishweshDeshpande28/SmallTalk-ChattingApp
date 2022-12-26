import Modal from 'react-bootstrap/Modal';
import React from 'react'
import { Container } from 'react-bootstrap';
import Chats from './Chats';


function Settings(props) {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <>
      <Chats
    show={modalShow}
    onHide={() => setModalShow(false)}
    />

    <Container>
    <Modal
      {...props}
      key={Settings}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      <h2>User Settings</h2>
      </Modal.Header>
      <Modal.Body>
      <div
        className="menu-item"
        variant="light"
        style={{ marginRight: "50px", marginTop: "10px", margin:'20px', cursor: 'pointer' }}
      >
        Account
      </div>
      <div style={{ borderTop: "1px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
      <div
        variant="light"
        className="menu-item"
        style={{ marginRight: "50px", marginTop: "10px", margin:'20px', cursor: 'pointer' }}
      >
        Privacy
      </div>
      <div style={{ borderTop: "1px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
      <div
        className="menu-item"
        variant="light"
        style={{ marginRight: "50px", marginTop: "10px", margin:'20px', cursor: 'pointer' }} onClick={() => setModalShow(true)}
      >
        Chats
      </div>
      <div style={{ borderTop: "1px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
      <div
        className="menu-item"
        variant="light"
        style={{ marginRight: "50px", marginTop: "10px", margin:'20px', cursor: 'pointer' }}
      >
        Notifications
      </div>
      <div style={{ borderTop: "1px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
      <div
        className="menu-item"
        variant="light"
        style={{ marginRight: "50px", marginTop: "10px", margin:'20px', cursor: 'pointer' }}
      >
        Storage and data
      </div>
      <div style={{ borderTop: "1px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
      <div
        className="menu-item"
        variant="light"
        style={{ marginRight: "50px", marginTop: "10px", margin:'20px', cursor: 'pointer' }}
      >
        Help
      </div>
      </Modal.Body>
    </Modal>
    </Container>
    </>
  )
}

export default Settings