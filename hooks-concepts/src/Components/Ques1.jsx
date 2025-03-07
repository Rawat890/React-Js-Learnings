import { useState } from "react";
import "../../css/Ques1.css";

//Create a counter app using useState to increment and decrement a number.Display the current value of the counter on the screen. Add a reset button to set the counter back to 0.

const Ques1 = () => {
  //Create a state that will store the initial state of the component
  const [counter, setCounter] = useState(0);

  //function to increment counter
  const incrementCounter = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };
  //function to decrement counter
  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const [state, setState] = useState({ Name: "Rohan", age: 24 });
  function updateName() {
    setState({ ...state, Name: "Roshan" });
  }
  function updateAge() {
    setState({ ...state, age: state.age + 1 });
  }
  function updateBoth() {
    setState({ ...state, Name: "Roshan", age: state.age + 1 });
  }

  const resetCounter = () => {
    setCounter(0);
  };
  return (
    <div className="container">
      <h2>{state.Name}</h2>
      <h2>{state.age}</h2>
      <h2>{counter}</h2>

      <div className="btn">
        <button onClick={updateName}>updateName</button>
        <button onClick={updateAge}>updateAge</button>
        <button onClick={updateBoth}>updateBoth</button>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
};

export default Ques1;
