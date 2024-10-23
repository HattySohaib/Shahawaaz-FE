// src/components/Loading.js
import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "100",
        height: "100vh",
        width: "100vw",
      }}
    >
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;
