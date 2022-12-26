import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Navbar.css";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import Settings from "./Settings";
import About from "./About";

function Navbar1(props) {
  const [modalShow, setModalShow] = React.useState(false)
  const [modalShow1, setModalShow1] = React.useState(false)
  return (
    <>
        <About
    show={modalShow1}
    onHide={() => setModalShow1(false)}
    />
        <Settings
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Menu>
      <div
          className="menu-item"
          variant="light"
          style={{
            marginRight: "50px",
            marginTop: "10px",
            margin: "20px",
            cursor: "pointer",
          }} onClick={() => setModalShow1(true)}
        >
          About
        </div>
        <div
          style={{
            borderTop: "1px solid #fff ",
            marginLeft: 20,
            marginRight: 20,
          }} 
        ></div>
        <div
          className="menu-item"
          variant="light"
          style={{
            marginRight: "50px",
            marginTop: "10px",
            margin: "20px",
            cursor: "pointer",
          }} onClick={() => setModalShow(true)}
        >
          Settings
        </div>
        <div
          style={{
            borderTop: "1px solid #fff ",
            marginLeft: 20,
            marginRight: 20,
          }} 
        ></div>
        <a className="menu-item">
          <Button
            variant="outline-danger"
            style={{
              marginRight: "50px",
              marginTop: "10px",
              margin: "20px",
              cursor: "pointer",
            }}
            onClick={() => props.history.push("/")}
          >
            Logout
          </Button>
        </a>
      </Menu>
    </>
  );
}

export default withRouter(Navbar1);
