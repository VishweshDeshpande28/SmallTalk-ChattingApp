import React from "react";
import {
  MDBCard,
  MDBCardFooter,
} from "mdb-react-ui-kit";
import Uploadfile from "./Uploadfile";
import "../App.css";
import styled from "styled-components";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export default function ChatInput({ onChangeText, sendMessage, currentText }) {

  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <MDBCard
      id="chat2"
      style={{
        position: "fixed",
        display: "block",
        width: "100%",
        border: "1px solid rgba(0,0,0,.125)",
        bottom: 0,
      }}
    >
      <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center p-3">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
          alt="avatar 3"
          style={{ width: "45px", height: "100%" }}
        />
        <input
          type="text"
          className="form-control form-control-lg"
          id="exampleFormControlInput1"
          placeholder="Type message"
          value={currentText || transcript}
        onChange={onChangeText}
        onKeyDown={(e) =>
          e.key === "Enter" && sendMessage() && e.preventDefault()
        }
        >
        </input>
          <Uploadfile />
          <Img
        src="https://static.vecteezy.com/system/resources/previews/002/798/703/non_2x/microphone-icon-flat-design-illustration-free-vector.jpg"
        className="record"
        alt="1"
        onClick={
          SpeechRecognition.startListening || SpeechRecognition.stopListening
        }
      ></Img>
      <Para>{listening ? "on" : "off"}</Para>
      </MDBCardFooter>
    </MDBCard>
  );
}

const Img = styled.img`
  position: fixed;
  border: 2px solid black;
  right: 110px;
  bottom: 20px;
  z-index: 1;

  @media (max-width: 768px) {
    right: 40px;
    bottom: 30px;
  }
`;

const Para = styled.p`
  position: fixed;
  right: 70px;
    bottom: 10px;
  z-index: 1;

  @media (max-width: 768px) {
    right: 15px;
    bottom: 20px;
  }
`;

