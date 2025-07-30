import React from "react";

const Button = ({ hanldeClick, children }) => {
  return <button onClick={hanldeClick}>{children}</button>;
};

export default React.memo(Button);
