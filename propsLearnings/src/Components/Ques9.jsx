import PropTypes from "prop-types";
import { useState } from "react";

const Child = ({ data }) => {
  const [userData, setUserData] = useState({});

  const getData = () => {
    // Update state with the entire `data` object when button is clicked
    setUserData(data);
  };

  return (
    <>
      {/* Display the user's name and age if `userData` is populated */}
      {userData.name && <h3>Name: {userData.name}</h3>}
      {userData.age && <p>Age: {userData.age}</p>}

      <button onClick={getData}>Click Here</button>
    </>
  );
};

const Ques9 = () => {
  const person = {
    name: "Virat",
    age: 35,
  };

  return (
    <>
      <Child data={person} />
    </>
  );
};

Child.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
};

export default Ques9;
