import React from "react";
import Input from "antd/lib/input/Input";
import Button from "react-bootstrap/Button";
import Uploadfile from "./Uploadfile";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export function ChatInput({
  onChangeText,
  sendMessage,
  currentText,
}) {
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <div className="sendMsg">
      <Input
        style={{
          width: "78%",
          maxWidth: "100%",
          fontSize: "20px",
          fontWeight: "550",
          marginLeft: "50px",
          marginBottom: "-3px",
          border: "1px solid black",
          borderRadius: "30px",
          padding: "10px",
        }}
        placeholder="type a message or say something..."
        type="text"
        value={currentText || transcript}
        onChange={onChangeText}
        onKeyDown={(e) =>
          e.key === "Enter" && sendMessage() && e.preventDefault()
        }
      />
      <Button
        variant="outline-success"
        style={{ width: "100px", marginLeft: "25px", marginBottom: "-6px" }}
        onClick={(e) => sendMessage() && e.preventDefault()}
        type="submit"
      >
        Send
      </Button>

      <Uploadfile />

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
