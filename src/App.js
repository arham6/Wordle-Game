import obj from "./data/db.json"
import {useState, useEffect, useContext} from 'react'
import Wordle from "./components/Wordle"
import ThemeProvider from "./context/ThemeProvider"
import { ThemeContext } from "./context/ThemeProvider"
function App() {
  const [solution, setSolution] = useState(null)
  const themeObj=useContext(ThemeContext);
  useEffect(() => {
    const randomSolution=obj.solutions[Math.floor(Math.random()*obj.solutions.length)];
    setSolution(randomSolution.word)
    console.log(randomSolution)
  }, [setSolution])

  return (
    <ThemeProvider>
      <div className="App">
        <h1>Wordle Game</h1>
        {solution && <Wordle solution={solution} />}
      </div>
    </ThemeProvider>
    
  );
}

export default App;
