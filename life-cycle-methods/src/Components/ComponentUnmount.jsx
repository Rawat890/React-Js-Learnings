import React, { Component } from "react";

class ComponentUnmount extends React.Component {
  componentWillUnmount() {
    console.log("Component Will Unmount Called");
  }
  render() {
    return (
      <>
        <h3>Component Unmounted</h3>
      </>
    );
  }
}

export default ComponentUnmount;
