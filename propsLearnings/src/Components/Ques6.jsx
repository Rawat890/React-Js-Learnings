//How do you pass multiple props to a component?

import PropTypes from "prop-types";

const Child = (props) => {
  return (
    <>
      <h1>Array is {props.data}</h1>
      <h1>object name is {props.user.name}</h1>
      <h1>object type is {props.user.type}</h1>
      <h1>object passed as {props.user.passedAs}</h1>
    </>
  );
};

const Ques6 = () => {
  const array = [1, 2, 3, 4, "a", "b"];
  const object = {
    name: "obj1",
    type: "object",
    passedAs: "props",
  };

  return (
    <>
      <h2>
        I am Parent Container and passing array and object as props to child
      </h2>
      <Child data={array} user={object} />
    </>
  );
};

Child.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    passedAs: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.array.isRequired,
};
export default Ques6; //parent
