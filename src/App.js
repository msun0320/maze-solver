import { useEffect, useState } from "react";
import "./App.css";
import { Grid } from "./components/Grid/Grid";
import findPathByDFS from "./algorithms/dfs";

function App() {
  const [maze, setMaze] = useState(
    Array.from({ length: 10 }, () => Array(10).fill(0))
  );

  useEffect(() => {
    resetMaze();
  }, []);

  const resetMaze = () => {
    const newMaze = Array.from({ length: 10 }, () => Array(10).fill(0));

    newMaze[0][0] = "S";
    newMaze[9][9] = "E";

    setMaze(newMaze);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={resetMaze}>Clear Board</button>
          </li>
          <li>
            <button onClick={() => findPathByDFS(maze, setMaze)}>DFS</button>
          </li>
        </ul>
      </nav>
      <Grid maze={maze} setMaze={setMaze} />
    </div>
  );
}

export default App;

// const maze = [
//   ["S", 0, 0, 1, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 0, 0, 1, 1, 1, 0],
//   [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
//   [0, 1, 0, 1, 1, 1, 0, 0, 1, 0],
//   [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
//   [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
//   [0, 1, 1, 1, 1, 0, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, "E"],
// ];
