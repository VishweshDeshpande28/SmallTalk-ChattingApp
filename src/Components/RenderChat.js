import React, { useState } from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import "../App.css";
import { Container } from "@material-ui/core";

export function RenderChat({ chat }) {
  const [text, setText] = useState("");

  return (
    <>
      <Container>
        <Container1>
          {chat.map((messages) => {
            const handleSpeak = () => {
              const message = new SpeechSynthesisUtterance(messages.text);
              window.speechSynthesis.speak(message);
            };

            return (
              <Row>
                <Col style={{ padding: "10px" }} key={messages.id}>
                  <Text
                    onClick={handleSpeak}
                    self={messages.self && messages.id}
                  >
                    {messages.text}
                  </Text>
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
  width: 50%;
  overflow-wrap: break-word;
  cursor: pointer;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Container1 = styled.div`
  padding-bottom: 80px;
  padding-top: 80px;
`;
