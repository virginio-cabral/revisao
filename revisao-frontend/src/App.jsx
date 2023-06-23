import { useState } from "react";
import "./App.css";
import Article from "./components/Article/Article";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="container">
        <Header></Header>
        <Article></Article>
      </div>
    </>
  );
}

export default App;
