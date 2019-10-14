import React, { useState, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState(null);

  useEffect(() => {
    console.log("updating document title");
    document.setTitle = `Click ${counter}`;
  });

  return (
    <div>
      <input
        type="text"
        onChange={e => {
          setName(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        SUM {counter} TIMES
      </button>
    </div>
  );
}

export default Counter;
