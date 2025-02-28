//Pass an array as a prop from a parent to a child component and display its elements.
import PropTypes from "prop-types";
import { useState } from "react";
const Child = (props) => {
  const [index, setIndex] = useState(0);

  const getData = () => {
    if (index < props.data.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <>
      {props.data.map((element, index) => (
        <h2 key={index}>{element}</h2>
      ))}
      <h3>{props.data[index]}</h3>
      <button onClick={getData}>Click Here</button>
    </>
  );
};

const Ques8 = () => {
  const array = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Child data={array} />
    </>
  );
};

Child.propTypes = {
  data: PropTypes.array.isRequired,
};
export default Ques8;
