import React, { useState, useCallback } from "react";
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";

const MyParent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(100000);

  const updateAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const updateSalary = useCallback(() => {
    setSalary(salary + 5000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button hanldeClick={updateAge}>updateAge</Button>
      <Count text="salary" count={salary} />
      <Button hanldeClick={updateSalary}>updateSalary</Button>
    </div>
  );
};

export default MyParent;
