import React from "react";

import classes from "./Button.module.css";

const Button: React.FC<{ type: any }> = (props) => {
  return (
    <button className={classes.button} type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
