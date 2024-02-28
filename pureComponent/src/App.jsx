import "./App.css";
import RegularComponent from "../src/Components/RegularComponent";
import PureComponent from "../src/Components/PureComponent";

function App() {
  return (
    <div className="container">
      <RegularComponent />
      <PureComponent />
    </div>
  );
}

export default App;
