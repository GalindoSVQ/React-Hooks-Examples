import React, { useContext } from "react";
import { ValueContext } from "./CounterOne";

function CounterTwo() {
  const context = useContext(ValueContext);
  return (
    <div>
      Contador {context.valueState.count}
      <button onClick={() => context.countDispath({ type: "increment" })}>
        INCREMENT
      </button>
      <button onClick={() => context.countDispath({ type: "decrement" })}>
        DECREMENT
      </button>
      <button onClick={() => context.countDispath({ type: "reset" })}>
        RESET
      </button>
    </div>
  );
}

export default CounterTwo;
