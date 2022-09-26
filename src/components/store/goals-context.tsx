import React, { useState } from "react";

import Goal from "../../models/goal";

type GoalsContextObj = {
  items: Goal[];
  addGoal: (text: string) => void;
  removeGoal: (id: string) => void;
};

export const GoalsContext = React.createContext<GoalsContextObj>({
  items: [],
  addGoal: () => {},
  removeGoal: () => {},
});

const GoalsContextProvider: React.FC = (props) => {
  const [goals, setGoals] = useState<Goal[]>([]);

  const addGoalHandler = (goalText: string) => {
    const newGoal = new Goal(goalText);
    setGoals((prevGoals) => {
      return prevGoals.concat(newGoal);
    });
  };

  const removeGoalHandler = (goalId: string) => {
    setGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  const contextValue: GoalsContextObj = {
    items: goals,
    addGoal: addGoalHandler,
    removeGoal: removeGoalHandler,
  };

  return (
    <GoalsContext.Provider value={contextValue}>
      {props.children}
    </GoalsContext.Provider>
  );
};

export default GoalsContextProvider;
