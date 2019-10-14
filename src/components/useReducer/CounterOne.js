import React, { useReducer, createContext } from "react";
import CounterTwo from "./CounterTwo";
export const ValueContext = createContext();

const initialState = {
  text: "hola",
  count: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterOne() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ValueContext.Provider
      value={{ valueState: state, countDispath: dispatch }}
    >
      {/* Contador {state.count} */}
      <CounterTwo />
    </ValueContext.Provider>
  );
}

export default CounterOne;
