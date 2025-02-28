//Pass a number as a prop from a parent to a child component and display it.

// Pass a string as a prop from a parent to a child component and display it.

// Pass a boolean as a prop from a parent to a child component and display it.
import PropTypes from "prop-types";
const Child1 = (props) => {
  return (
    <>
      <h2>{props.numberProp}</h2>
    </>
  );
};
const Child2 = (props) => {
  return (
    <>
      <h2>{props.stringProp}</h2>
    </>
  );
};
const Child3 = (props) => {
  return (
    <>
      <h2>{props.boolProp ? "True" : "False"}</h2>
      {/* Displaying the boolean prop */}
    </>
  );
};

const Child4 = (props) => {
  return (
    <>
      <h1>{props.numberProp}</h1>
      <h1>{props.boolProp}</h1>
      <h1>{props.stringProp}</h1>
    </>
  );
};

const Ques7 = () => {
  const num = 123;
  const str = "Hello World";
  const boolValue = true;
  return (
    <>
      <Child1 numberProp={123} />
      <Child2 stringProp={"Hello"} />
      <Child3 boolProp={true} />
      <Child4 numberProp={num} stringProp={str} boolProp={boolValue} />
    </>
  );
};

Child1.propTypes = {
  numberProp: PropTypes.number.isRequired,
};
Child2.propTypes = {
  stringProp: PropTypes.string.isRequired,
};
Child3.propTypes = {
  boolProp: PropTypes.bool.isRequired,
};
Child4.propTypes = {
  boolProp: {
    num: PropTypes.bool.isRequired,
  },
  numberProp: PropTypes.number.isRequired,
  stringProp: PropTypes.string.isRequired,
};
export default Ques7;
