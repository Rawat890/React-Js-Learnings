import PropTypes from "prop-types";
import React from "react";

class Parent extends React.Component {
  render() {
    return (
      <>
        <h2>Hi I am Parent class</h2>
        <Child name="Rohit" Profession="Cricket" />
      </>
    );
  }
}

class Child extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello, {this.props.name}</h2>
        <h2>Profession: {this.props.Profession}</h2>
      </div>
    );
  }
}

Child.propTypes = {
  name: PropTypes.string.isRequired,
  Profession: PropTypes.string.isRequired,
};

export default Parent;
