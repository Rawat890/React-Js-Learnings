// Use useState to store and display a user's name.

import { useState } from "react";

const Ques3 = () => {
  const user = {
    Name: "Yash",
    age: 24,
    address: {
      houseNo: 2,
      mainAddress: "Model Town",
    },
  };

  const [userData, setUserData]=useState({});

  const getData=()=>{
    setUserData({...user, user.Name})
  }
  return <></>;
};

export default Ques3;
