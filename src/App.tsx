import NewGoal from "./components/Goals/NewGoal";
import Goals from "./components/Goals/Goals";
import GoalsContextProvider from "./components/store/goals-context";
import "./App.css";

const App = () => {
  return (
    <GoalsContextProvider>
      <NewGoal />
      <Goals />
    </GoalsContextProvider>
  );
};

export default App;
