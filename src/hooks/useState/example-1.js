import React, { useState } from "react";

const BasicHookUseState = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <>
      <button onClick={handleToggleLoading}>Click to loading !</button>
      {isLoading && <p>Loading...</p>}
    </>
  );
};

export default BasicHookUseState;
