//Can props be passed to a component as an object? If yes, how?
import PropTypes from "prop-types";

const Ques5 = () => {
  const person = {
    name: "Rohit Kumar",
    age: 25,
    profession: "BusinessMan",
    Degree: "MBA",
    address: {
      house_no: "2/5",
      mainAddress: "Model Town",
      state: "Punjab",
    },
  };

  return (
    <>
      <h1>I am Parent Container</h1>
      <Child personData={person} />
    </>
  );
};

const Child = (props) => {
  return (
    <>
      <h3>I am Child Component and returning the values</h3>
      <div>
        <h2>{props.personData.name}</h2>
        <h2>{props.personData.age}</h2>
        <h2>{props.personData.Degree}</h2>
        <h2>{props.personData.profession}</h2>
        <h2>
          {props.personData.address.house_no},{" "}
          {props.personData.address.mainAddress},{" "}
          {props.personData.address.state}
        </h2>
      </div>
    </>
  );
};

Child.propTypes = {
  personData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    Degree: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    address: PropTypes.shape({
      house_no: PropTypes.number.isRequired,
      mainAddress: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Ques5;
