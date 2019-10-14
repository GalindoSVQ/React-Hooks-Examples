import React, { useState, useEffect, useRef } from "react";

function ClassTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      Counter - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>
        STOP TIMER
      </button>
    </div>
  );
}

export default ClassTimer;
