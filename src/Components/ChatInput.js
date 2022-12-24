import React from "react";
import { Input } from "@material-ui/core";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export function ChatInput({ onChangeText, sendMessage, currentText }) {
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <div className="sendMsg">
      <Input
        required
        style={{
          width: "78%",
          fontSize: "20px",
          fontWeight: "550",
          marginLeft: "50px",
          marginBottom: "-3px",
        }}
        placeholder="Message..."
        type="text"
        value={currentText || transcript}
        onChange={onChangeText}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <Button
        variant="outline-success"
        style={{ width: "150px", marginLeft: "25px", marginBottom: "-6px" }}
        type="submit"
      >
        Send
      </Button>{" "}
      <img
        src="https://static.vecteezy.com/system/resources/previews/002/798/703/non_2x/microphone-icon-flat-design-illustration-free-vector.jpg"
        className="record"
        alt="1"
        onClick={
          SpeechRecognition.startListening || SpeechRecognition.stopListening
        }
      ></img>
      <p>{listening ? "on" : "off"}</p>
    </div>
  );
}
const InputStyled = styled(Input)`
  width: 90%;
  &:focus {
    box-shadow: none;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;
