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
        <Row className="d-flex">
          <Col className="text-center" style={{ marginTop: "50px" }}>
            <form>
              <FormGroup>
                <Label htmlFor="label">Name</Label>
                <Input id="label" placeholder="Enter your name" />

                <Label htmlFor="input">Birthday</Label>
                <Input id="input" placeholder="Enter your birthdate"/>
              </FormGroup>
              <button
                type="submit"
                className="btn btn-primary btn-block mb-4"
                style={{ marginTop: "30px" }}
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
              style={{
                height: "350px",
                width: "350px",
                maxWidth: "100%",
                marginTop: "100px",
              }}
            ></Player>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(Home);

export const FormGroup = styled.div`
    display: block;
	width: 300px;
  width: 100%;
`;

export const Label = styled.label`
    display: flex;
    margin-top: 20px;
`;


export const Input = styled.input`
	padding: 0.5em;
	color: black;
	background: white;
	border: 1px solid black;
  max-width: 200%;
  width: 100%;
	margin-bottom: 0.5em;
`;
