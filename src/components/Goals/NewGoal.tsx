import React, { useRef, useContext } from "react";

import { GoalsContext } from "../store/goals-context";
import Button from "../UI/Button";
import classes from "./NewGoal.module.css";

const NewGoal: React.FC = () => {
  const goalTextInputRef = useRef<HTMLInputElement>(null);
  const goalsCtx = useContext(GoalsContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = goalTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    
    goalsCtx.addGoal(enteredText);
    goalTextInputRef.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes["form-control"]}>
        <label htmlFor="text">Do Today</label>
        <input type="text" id="text" ref={goalTextInputRef} />
        <Button type="submit">Add Goal</Button>
      </div>
    </form>
  );
};

export default NewGoal;
