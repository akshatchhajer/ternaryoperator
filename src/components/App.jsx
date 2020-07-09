import React from "react";
import Form from "./Form";

var userIsRegistered = true;

const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {currentTime > 15 && <h1>Why are you still working?</h1>}
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
