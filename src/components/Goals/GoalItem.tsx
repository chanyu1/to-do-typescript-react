import React from "react";

import classes from "./GoalItem.module.css";

const GoalItem: React.FC<{
  text: string;
  onRemoveGoal: () => void;
  // onRemoveGoal: (event: React.MouseEvent) => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveGoal}>
      {props.text}
    </li>
  );
};

export default GoalItem;
