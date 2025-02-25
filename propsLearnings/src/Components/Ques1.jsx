//What are props in React?
import PropTypes from "prop-types";

const Ques1 = () => {
  return (
    <>
      <div>
        <h2>PROPS IN REACT JS</h2>
        <p>
          Props are the properties that are passed from parent to child to
          render the dynamic components
        </p>
        <p>
          <strong>
            Props are the objects used to pass data and information to a
            component{" "}
          </strong>
        </p>

        <p>
          Props can be passed to a components as many as we want. This is one of
          the coolest feature of react js
        </p>

        <Parent />
      </div>
    </>
  );
};

const Parent = () => {
  return (
    <>
      <h2>Hi ! I am a parent container</h2>
      <Child name="Rohan Rawat" userId="101" Degree="MCA" />
    </>
  );
};

const Child = (props) => {
  return (
    <>
      <h2>The user id is {props.userId},</h2>
      <h2>Hello, {props.name}</h2>
      <h2>The degree is {props.Degree}</h2>
    </>
  );
};

Child.propTypes = {
  name: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  Degree: PropTypes.string.isRequired,
};

export default Ques1;
