import './App.css';
import Palette from "./Palette";
import seedColors from "./seedColors";

function App() {
  return (
    <div className="App">
        <Palette {...seedColors[4]}/>
        <h1 className="" style={{background:"red"}}>asdas as as as as dsa</h1>
    </div>
  );
}

export default App;
