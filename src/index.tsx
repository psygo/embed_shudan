import React from "react";
import ReactDOM from "react-dom/client";
import { Goban } from "@sabaki/shudan";
// import { h } from "preact";
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

const CustomComponent = () => (
  // @ts-ignore
  <Goban
    vertexSize={24}
    signMap={[
      [0, 0, 1, 0, -1, -1, 1, 0, 0],
      [1, 0, 1, -1, -1, 1, 1, 1, 0],
      [0, 0, 1, -1, 0, 1, -1, -1, 0],
      [1, 1, 1, -1, -1, -1, 1, -1, 0],
      [1, -1, 1, 1, -1, 1, 1, 1, 0],
      [-1, -1, -1, -1, -1, 1, 0, 0, 0],
      [0, -1, -1, 0, -1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, -1, -1, -1, 1],
      [0, 0, 0, 0, 0, 0, 0, -1, 0],
    ]}
  />
);

const App: React.FC = () => {
  return (
    <div>
      <CustomComponent />
    </div>
  );
};

const container = document.getElementById("root");
// Create a root.
// @ts-ignore
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<App />);
