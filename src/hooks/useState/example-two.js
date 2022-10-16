import React, { useState } from "react";

const BasicHookUseState2 = () => {
  const [name, setName] = useState("Jhon");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <input value={name} onChange={handleNameChange} />
      <br/>
      My name is: {name}
    </>
  );
};

export default BasicHookUseState2;
