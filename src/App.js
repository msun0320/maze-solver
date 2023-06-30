import { useEffect, useState } from "react";
import "./App.css";
import { Grid } from "./components/Grid/Grid";

function App() {
  const [maze, setMaze] = useState(
    Array.from({ length: 10 }, () => Array(10).fill(0))
  );

  useEffect(() => {
    const newMaze = [...maze];

    newMaze[0][0] = "s";
    newMaze[9][9] = "e";

    setMaze(newMaze);
  }, []);

  const updateMaze = (newMaze) => setMaze(newMaze);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button>Clear Board</button>
          </li>
        </ul>
      </nav>
      <Grid maze={maze} updateMaze={updateMaze} />
    </div>
  );
}

export default App;
