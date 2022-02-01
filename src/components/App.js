import React from "react";
import Container from "./Container";

function App() {
  const url="https://1.bp.blogspot.com/-BSZRDHp6OEY/X58AXxAP9fI/AAAAAAAACz0/urgSbVYc-JET0rEGwK_DzvFVQTIReyoHwCLcBGAsYHQ/s562/The%2BStory%2BOf%2BRalf%2BAnd%2BClark.webp"
  return (
    <div className="App">
      <Container header="King Of Fighters" direction="horizontal">
        <div>Team Ikari!</div>

      </Container>
      <Container header="Ralf and Clark" textPosition="center">
        <img src={url}/>
        <img src={url}/>
        <img src={url}/>
      </Container>
    </div>
  );
}

export default App;
