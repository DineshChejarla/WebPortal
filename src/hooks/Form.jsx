import React, { useEffect, useRef } from "react";

const Form = () => {
  const data = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    data.current.focus();
  }, []);

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input ref={data} type="text" placeholder="Enter your name" />
          <br />
          <input type="submit" />
        </form>
      </center>
    </div>
  );
};

export default Form;
