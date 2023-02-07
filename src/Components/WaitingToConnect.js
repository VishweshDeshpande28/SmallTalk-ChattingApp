import { withRouter } from "react-router-dom";
import React from "react";
import "../App.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Player } from "@lottiefiles/react-lottie-player";
import styled from "styled-components";

function WaitingToConnect() {

  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col style={{marginTop:"100px"}}>
          <Title level={3}>Hello !</Title>
          <Title level={3}>Send this URL to a friend to start chatting.</Title>
              <span className="link-url">
                <Anchor onClick={() => { 
              navigator.clipboard.writeText(window.location.href) && alert("Your link has been copied to clipboard!")}}>{window.location.href}</Anchor>
              
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


const Title = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  font-size: x-large;
  font-weight: bold;
`;

const Anchor = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 30px;
  text-align: center;
  display: flex;
  border: 2px solid;
  border-radius: 40px;
  cursor: pointer;
`;