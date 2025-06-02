import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import "./App.css";

function App() {
  // state variable to hold the current time set to now as the initial state
  const [currentTime, setCurrentTime] = useState(new Date());
  // useEffect runs once the components mount
  useEffect(() => {
    // Create an interval that updates the currentTime every second.
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // 1000 is one second
    return () => clearInterval(timer); // Cleanup, clear the interval when component unmounts
  }, []); // Do this only once

  // Format date and time with the date fns package
  const foramttedTime = format(currentTime, "PPPP p");

  // render the clock UI
  return (
    <div className="clock-container">
      <h1 className="clock-title">Color Clock</h1>
      <p className="clock-time">{foramttedTime}</p>
    </div>
  );
}

export default App;
