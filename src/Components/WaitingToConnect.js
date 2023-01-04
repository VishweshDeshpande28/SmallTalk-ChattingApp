import { withRouter } from "react-router-dom";
import React, {useState} from "react";
import "../App.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Player } from "@lottiefiles/react-lottie-player";

function WaitingToConnect() {

  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col style={{marginTop:"100px"}}>
            <h3> Hello! {}</h3>
              <h3>Send this URL to a friend to start chatting.</h3>
              <span className="link-url">
                <a>{window.location.href}</a>
              </span>
          </Col>
          <Col>
              <Player
                autoplay
                loop
                src="https://assets1.lottiefiles.com/packages/lf20_zwwwgco2.json"
                style={{ height: "350px", width: "350px", marginTop: "100px"}}
              ></Player>
              </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(WaitingToConnect);
