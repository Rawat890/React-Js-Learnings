import { useState } from "react";

const Ques2 = () => {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled((previousState) => !previousState);
  };

  return (
    <>
      <div className="main">
        <h2>Toggler Example</h2>
        <p>Current State : {isToggled ? "ON" : "OFF"}</p>
        <button onClick={handleToggle}>TOGGLE HERE</button>
      </div>
      {isToggled && (
        <div>Toggle - {isToggled ? "Turned ON" : "Turned OFF"}</div>
      )}
    </>
  );
};

export default Ques2;
