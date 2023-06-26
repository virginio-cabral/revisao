import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

function App() {
  return (
    <>
      <div className="container">
        <Header></Header>
        <Body></Body>
      </div>
    </>
  );
}

export default App;
