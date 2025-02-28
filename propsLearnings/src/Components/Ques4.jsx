//Can props be passed to a component as an object? If yes, how?

import PropTypes from "prop-types";
const Child = (props) => {
  return (
    <>
      <h2>{props.user.name}</h2>
      <h2>{props.user.userId}</h2>
      <h2>{props.user.Degree}</h2>
      <h2>{props.user.address.house}</h2>
      <h2>{props.user.address.mainAddress}</h2>
      <h2>{props.user.address.pinCode}</h2>
      <h2>{props.user.address.state}</h2>
    </>
  );
};

const Ques4 = () => {
  //object created
  const userData = {
    name: "Yash Sharma",
    userId: 123,
    Degree: "MCA",
    address: {
      house: 122,
      mainAddress: "Street no 10, Model Town",
      state: "Punjab",
      country: "India",
      pinCode: 146001,
    },
  };

  return (
    <>
      <h2>Object is passed to child</h2>
      <Child user={userData} />
    </>
  );
};

Child.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    Degree: PropTypes.string.isRequired,
    address: PropTypes.shape({
      house: PropTypes.number.isRequired,
      mainAddress: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      pinCode: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
export default Ques4;
