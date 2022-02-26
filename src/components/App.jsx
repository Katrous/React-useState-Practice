import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  let now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );

  //Challenge:
  //1. Given that you can get the current time using:
  //Show the latest time in the <h1> when the Get Time button
  //is pressed.
}

export default App;
