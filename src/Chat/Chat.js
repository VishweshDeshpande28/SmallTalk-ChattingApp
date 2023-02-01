import React, { Component } from "react";
import Peer from "peerjs";
import { RenderChat }  from "../components/RenderChat";
import ChatInput from "../components/ChatInput";
import { Spinner } from "../components/Spin";
import WaitingToConnect from "../components/WaitingToConnect";
import "../App.css";
import {
  initializePeerMethods,
  sendMessage,
} from "../service/connectionServiceUtil";

export class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peer: new Peer(),
      my_id: "",
      peer_id: "",
      initialized: false,
      connected: false,
      chat: [],
      currentText: "",
    };
  }

  componentDidMount() {
    initializePeerMethods(
      this.state.peer,
      this.setValue,
      this.onReceiveData,
      this
    );
  }

  setValue = (data, callback) => {
    this.setState(data, callback);
  };

  onChangeText = (e) => {
    this.setState({ currentText: e.target.value });
  };

  onReceiveData = (data) => {
    this.setState({
      chat: [
        ...this.state.chat,
        {
          text: data.text,
          id: data.id,
          user: data.user,
        },
      ],
    });
  };

  handleTextChange = (event) => {
    this.setState({
      peer_id: event.target.value,
    });
  };

  render() {
    const { my_id, initialized, connected, currentText, conn, chat } =
      this.state;
    if (!initialized) {
      return <Spinner />;
    }
    return (
      <>
        {connected ? (
          <>
              <RenderChat chat={chat} />
            <ChatInput
              onChangeText={this.onChangeText}
              sendMessage={() =>
                sendMessage(currentText, my_id, conn, chat, this.setValue)
              }
              currentText={currentText}
            />
          </>
        ) : (
          <WaitingToConnect />
        )}
      </>
    );
  }
}
