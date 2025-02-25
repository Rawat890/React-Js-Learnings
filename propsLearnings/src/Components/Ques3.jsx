// Write a child component that receives and displays a name prop.
import PropTypes from "prop-types";

const Ques3 = () => {
  return (
    <>
      <h2>I am Parent</h2>
      <Child name="React js" currentVersion="19.0.0.0" />
    </>
  );
};

const Child = (props) => {
  return (
    <>
      <h2>{props.name}</h2>
      <h2>{props.currentVersion}</h2>
    </>
  );
};

Child.propTypes = {
  name: PropTypes.string.isRequired,
  currentVersion: PropTypes.string.isRequired,
};

export default Ques3;
