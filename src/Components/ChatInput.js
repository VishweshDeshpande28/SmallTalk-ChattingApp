import React from "react";
import { Input } from "@material-ui/core";
import Button from "react-bootstrap/Button";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";


export function ChatInput({ onChangeText, sendMessage, currentText }) {
  const { transcript, listening, browserSupportsSpeechRecognition } =
  useSpeechRecognition();
  
  const [newTranscript, setNewTranscript] = React.useState("");
  
  const changeTranscript = event => {
    setNewTranscript(event.target.value)
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <div className="sendMsg">
      <Input

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
        onChange={onChangeText || changeTranscript}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <Button
        variant="outline-success"
        style={{ width: "150px", marginLeft: "25px", marginBottom: "-6px" }} 
        onClick={() => sendMessage()}
        type="submit"
      >
        
      </Button>

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
