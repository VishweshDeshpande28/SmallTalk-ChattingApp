import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Container } from 'react-bootstrap';
import Wallpaper from './Wallpaper';
import { Switch } from '@material-ui/core';

function Chats(props) {

    const [modalShow1, setModalShow1] = React.useState(false);
    return (
        <>
    <Wallpaper
    show={modalShow1}
    onHide={() => setModalShow1(false)}
    />

      <Container>
      <Modal
        {...props}
        key={Chats}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        <h2>Chat Settings</h2>
        </Modal.Header>
        <Modal.Body>
        <div
          className="menu-item"
          variant="Dark"
          style={{ marginRight: "50px", marginTop: "10px", margin:'20px', cursor: 'pointer' }}
        >
        Choose Theme :
        Light
        <Switch/>
          Dark
        </div>
        <div style={{ borderTop: "1px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
        <div
          variant="Dark"
          className="menu-item"
          style={{ marginRight: "50px", marginTop: "10px", margin:'20px', cursor: 'pointer' }} onClick={() => setModalShow1(true)}
        >
         Wallpaper
        </div>
        <div style={{ borderTop: "1px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
        <div
          className="menu-item"
          variant="Dark"
          style={{ marginRight: "50px", marginTop: "10px", margin:'20px', cursor: 'pointer' }}
        >
          Enter is Send
          <Switch/>
        </div>
        <div style={{ borderTop: "1px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
        <div
          className="menu-item"
          variant="Dark"
          style={{ marginRight: "50px", marginTop: "10px", margin:'20px', cursor: 'pointer' }}
        >
          Media Visibility
        </div>
        <div style={{ borderTop: "1px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
        <div
          className="menu-item"
          variant="Dark"
          style={{ marginRight: "50px", marginTop: "10px", margin:'20px', cursor: 'pointer' }}
        >
          Font Size
        </div>
        <div style={{ borderTop: "1px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
        <div
          className="menu-item"
          variant="light"
          style={{ marginRight: "50px", marginTop: "10px", margin:'20px', cursor: 'pointer' }}
        >
          Keep Chats Archived
          <Switch/>
        </div>
        </Modal.Body>
      </Modal>
      </Container>
      </>
    )
  }
  
  export default Chats