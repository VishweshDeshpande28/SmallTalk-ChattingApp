import React from "react";
import styled from "styled-components";

export function RenderChat({ chat }) {
  return (
    <Wrapper>
      {chat.map((i) => {
        return (
          <Row key={i.id}>
            <User self={i.self}>{i.user}</User> : <Text>{i.text}</Text>
          </Row>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const User = styled.div`
  font-weight: bold;
  color: ${(props) => (props.self ? "#7b3c3c" : "#515e75")};
`;

const Text = styled.div`
  margin-left: 10px;
  flex: 1;
`;
