import React, { Component } from "react";
import Peer from "peerjs";
import { Typography } from "antd";
import { Container } from "react-bootstrap";
import { RenderChat } from "../Components/RenderChat";
import { ChatInput } from "../Components/ChatInput";
import { Spinner } from "../Components/Spin";
import WaitingToConnect from "../Components/WaitingToConnect";
import Navbar1 from "../Navbar/Navbar";
import "../App.css";
import {
  initializePeerMethods,
  sendMessage,
} from "../service/connectionServiceUtil";

const { Title } = Typography;

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
        <Navbar1 />
        <Title level={3}>SmallTalk</Title>
        {connected ? (
          <>
            <Container>
              <RenderChat chat={chat} />
            </Container>
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
