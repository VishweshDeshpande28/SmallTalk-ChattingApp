import { Spin } from "antd";
import styled from "styled-components";
import React from 'react'

export function Spinner() {
  return (
    <Wrapper>
      <Spin />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
