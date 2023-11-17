import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((prevState) => !prevState);
  }

  return (
    <button onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
