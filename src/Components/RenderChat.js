import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import "../App.css";
import { Container } from "@material-ui/core";

export function RenderChat({ chat }) {
  return (
    <>
    <Container>
    <Container1>
        {chat.map((v) => {
          return (
            <Row>
              <Col style={{ padding: "10px" }} key={v.id}>
                <Text self={v.self && v.id}>{v.text}</Text>
              </Col>
            </Row>
          );
        })}
        </Container1>
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
  background-color: ${(props) => (props.self ? "#1976d2" : "white")};
  float: ${(props) => (props.self ? "right" : "left")};
  text-align: ${(props) => (props.self ? "right" : "left")};
  max-width: 100%;
  width: 40%;
  overflow-wrap: break-word;
  cursor: pointer;
  text-align: left;
`;

const Container1 = styled.div`
    padding-bottom: 80px;
    padding-top: 80px;
`;

