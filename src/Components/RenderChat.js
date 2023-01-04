import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import { Container } from "@mui/material";
import "../App.css";

export function RenderChat({ chat }) {
  return (
    <>
      <Container>
        {chat.map((v) => {
          return (
            <Row>
              <Col style={{ padding: "10px" }} key={v.id}>
                <Text self={v.self}>{v.text}</Text>
                {/* <img style={{}} src={{File}} alt={""}/> */}
              </Col>
            </Row>
          );
        })}
      </Container>
    </>
  );
}

const Text = styled.div`
  margin-left: 10px;
  flex: 1;
  border: 2px solid black;
  border-radius: 20px;
  padding: 10px;
  font-weight: bold;
  color: ${(props) => (props.self ? "white" : "black")};
  background-color: ${(props) => (props.self ? "blue" : "white")};
  float: ${(props) => (props.self ? "right" : "left")};
  text-align: ${(props) => (props.self ? "right" : "left")};
  max-width: 100%;
  width: 40%;
  overflow-wrap: break-word;
`;
