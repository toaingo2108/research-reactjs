import React, { useRef } from "react";

const BasicHookUseRef2 = () => {
  const refInput = useRef();

  const handleFocusInput = () => {
    refInput.current.focus();
  };

  return (
    <div>
      <input type="text" ref={refInput} />
      <button onClick={handleFocusInput}>Focus input</button>
    </div>
  );
};

export default BasicHookUseRef2;
