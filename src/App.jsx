import React from "react";
import "./App.scss";
import "./scss/index.scss";
import Container from "./components/Container/Container";

function App() {
  return (
    <div className="wrapper">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={require("./resources/video.mp4")} type="video/mp4" />
          <source src="./img/video.webm" type="video/webm" />
          Your browser is not supported!
        </video>
      </div>

      <div className="app">
        <Container />
      </div>
    </div>
  );
}

export default App;
