import { useState } from "react";

function useCounter(count = 0, firstname = "Your Name") {
  const [counter, setCounter] = useState(count);
  const [name, setName] = useState(firstname);
  const increment = () => {
    setCounter(prevCounter => prevCounter + count);
  };
  const decrement = () => {
    setCounter(prevCounter => prevCounter - count);
  };
  const setFirstName = theName => {
    setName(theName);
  };
  return [counter, name, increment, decrement, setFirstName];
}
export default useCounter;
