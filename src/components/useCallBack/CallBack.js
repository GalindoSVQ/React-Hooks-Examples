import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function CallBack() {
  console.log("CallBack Render");

  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(1000);

  const IncrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const IncrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={IncrementAge}> INCREMENTE AGE </Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={IncrementSalary}>INCREMENT SALARY</Button>
    </div>
  );
}

export default CallBack;
