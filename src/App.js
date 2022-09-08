import './App.css';
import Palette from "./Palette";
import seedColors from "./seedColors";
import {generatePalette} from "./colorHelpers";

function App() {
  return (
    <div className="App">
        {seedColors.map(e =>{
          return(
                <>
                  <Palette palette={generatePalette(seedColors[1])} />
                    <br/>
                </>
            )
        })}
      {/*<Palette palette={generatePalette(seedColors[4])}/>*/}
    </div>
  );
}

export default App;
