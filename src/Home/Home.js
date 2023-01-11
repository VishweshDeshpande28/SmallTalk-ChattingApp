import { withRouter } from "react-router-dom";
import React from "react";
import { Container } from "react-bootstrap";
import { Player } from "@lottiefiles/react-lottie-player";
import "../App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";


function Home(props) {
  
  return (
    <>
      <Container>
      <Title style={{borderBottom:"3px solid black"}} level={3}>SmallTalk</Title>
        <Row className="d-flex">
          <Col className="text-center" style={{ marginTop: "50px" }}>
              <form>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                  style={{marginTop: "30px"}}
                  
                  onClick={() => props.history.push("/chat")}
                >
                  Create a Room
                </button>
              </form>
          </Col>
          <Col>
            <Player
              autoplay
              loop
              src="https://assets6.lottiefiles.com/packages/lf20_c3gt0z38.json"
              style={{ height: "350px", width: "350px", maxWidth:"100%", marginTop:"100px"}}
            ></Player>
            </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(Home);

const Title = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: x-large;
`;
