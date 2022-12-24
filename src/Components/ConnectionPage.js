import React from "react";

export function ConnectionPage({ handleTextChange, connect }) {
  return (
    <>
      <hr />
      <div>
        <input type="text" onChange={handleTextChange} />
        <label>Peer ID</label>
      </div>
      <button onClick={connect}>connect</button>
    </>
  );
}
