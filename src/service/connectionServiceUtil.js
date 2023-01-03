import { v4 as uuidv4 } from "uuid";

export const initializePeerMethods = (peer, setValue, onReceiveData, self, other) => {

  peer.on("open", (id) => {
    console.log("My peer ID is: ", id);

    setValue({
      my_id: id,
      initialized: true,
    });

    const state = self.props.location.search;
    const urlParams = new URLSearchParams(state);
    const chatId = urlParams.get("id");
    console.log("Remote user ", chatId);
    if (chatId != null) {
      connect(chatId, peer, setValue, onReceiveData);
    } else {
      self.props.history.push(`/chat?id=${id}`);
    }
  });

  peer.on("connection", (connection) => {
    console.log("someone connected");
    console.log(connection);
    setValue({ conn: connection }, () => {
      self.state.conn.on("open", () => {
        setValue({ connected: true, peer_id: connection.peer });
      });
      self.state.conn.on("data", onReceiveData);
    });
  });
  peer.on("error", () => {
    self.props.history.push(`/`);
  });
};

export const connect = (peer_id, peer, setValue, onReceiveData) => {
  const connection = peer.connect(peer_id);
  console.log("Connection is ", connection);
  setValue(
    {
      conn: connection,
      currentText: "",
      peer_id: peer_id,
    },
    () => {
      connection.on("open", () => {
        setValue({
          connected: true,
        });
      });
      connection.on("data", onReceiveData);
    }
  );
};

export const sendMessage = (currentText, my_id, conn, chat, setValue) => {
  if (currentText) {
    const data = {
      text: currentText,
      id: uuidv4(),
      user: my_id,
      self: true,
    };
    conn.send(data);
    setValue({
      chat: [...chat, data],
      currentText: "",
    });
  }
};
