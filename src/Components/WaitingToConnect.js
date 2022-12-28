import { withRouter } from "react-router-dom";
import React from "react";
import "../App.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Player } from "@lottiefiles/react-lottie-player";
import "../Home/Home";

function WaitingToConnect(props) {
  return (
    <>

      <Container>
        <Row className="align-items-center">
          <Col className="col-12 col-md-6">
            <div className="text-center w-100">
            <p> Hello, {} </p>
              <h3>Send this URL to a friend to start chatting.</h3>
              <span className="link-url">
                <a>{window.location.href}</a>
              </span>
            </div>
          </Col>

          <Col className="col-12 col-md-6">
            <div className="text-center w-100">
              <Player
                autoplay
                loop
                src="https://assets1.lottiefiles.com/packages/lf20_zwwwgco2.json"
                style={{ height: "600px", width: "600px" }}
              ></Player>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(WaitingToConnect);
