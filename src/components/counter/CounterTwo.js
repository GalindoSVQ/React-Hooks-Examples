import React, { useState, useEffect } from "react";
import useCounter from "../hooks/useCounter";

function CounterTwo() {
  const [count, name, increment, decrement, setFirstName] = useCounter(10);

  return (
    <div>
      <p>FIRST NAME IS: {name}</p>
      <p>VALUE IS: {count}</p>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <input type="text" onChange={e => setFirstName(e.target.value)} />
    </div>
  );
}

export default CounterTwo;
