import "./App.css";
import DeliveryQueue from "./components/DeliveryQueue";
import Planner from "./components/Planner";

function App() {
  return (
    <div className="App">
      <h3> Transportation Queue</h3>
      <DeliveryQueue />
      <Planner />
    </div>
  );
}

export default App;
