import React, { useContext } from "react";

import GoalItem from "../../components/Goals/GoalItem";
import { GoalsContext } from "../store/goals-context";
import classes from "./Goals.module.css";

const Goals: React.FC = () => {
  const goalsCtx = useContext(GoalsContext);

  return (
    <ul className={classes.goals}>
      {goalsCtx.items.length > 0 ? (
        goalsCtx.items.map((item) => (
          <GoalItem
            key={item.id}
            text={item.text}
            onRemoveGoal={goalsCtx.removeGoal.bind(null, item.id)}
          />
        ))
      ) : (
        <p style={{ textAlign: "center" }}>No goals found</p>
      )}
    </ul>
  );
};

export default Goals;
