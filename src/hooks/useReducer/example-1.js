import React, { useReducer, useState } from "react";

// Init state
const initState = 0;

// Actions
const UP_ACTION = "up";
const DOWN_ACTION = "down";

// Reducer
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};

const BasicHookUseReducer1 = () => {
  // // useState
  // const [count, setCount] = useState(0);
  // return (
  //   <div>
  //     <h1>{count}</h1>
  //     <button onClick={() => setCount(count - 1)}>Down</button>
  //     <button onClick={() => setCount(count + 1)}>Up</button>
  //   </div>
  // );

  // useReducer
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </div>
  );
};

export default BasicHookUseReducer1;
