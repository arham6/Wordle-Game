import obj from "./data/db.json"
import {useState, useEffect} from 'react'
import Wordle from "./components/Wordle"

function App() {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    const randomSolution=obj.solutions[Math.floor(Math.random()*obj.solutions.length)];
    setSolution(randomSolution.word)
    console.log(randomSolution)
  }, [setSolution])

  return (
      <div className="App">
        <h1>Wordle Game</h1>
        {solution && <Wordle solution={solution} />}
      </div>    
  );
}

export default App;
