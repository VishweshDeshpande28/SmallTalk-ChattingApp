import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import { Container } from "@material-ui/core";
import "../App.css";

export function RenderChat({ chat }) {
  return (
    <>
    <Title level={3}>SmallTalk</Title>
        {chat.map((v) => {
          return (
            <Container>
            <Row>
              <Col style={{ padding: "10px" }} key={v.id}>
                <Text self={v.self}>{v.text}</Text>
              </Col>
            </Row>
            </Container>
          );
        })}
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
  cursor: pointer;
`;

const Title = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: x-large;
  font-weight: bold;
`;
