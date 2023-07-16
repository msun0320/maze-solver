import { useEffect, useState } from "react";
import "./App.css";
import { Grid } from "./components/Grid/Grid";
import dfs from "./algorithms/dfs";
import bfs from "./algorithms/bfs";

function App() {
  const [maze, setMaze] = useState(
    Array.from({ length: 10 }, () => Array(10).fill(0))
  );
  const [path, setPath] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    resetMaze();
  }, []);

  useEffect(() => {
    const delay = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const drawHistory = async () => {
      let newMaze;

      for (let i = 1; i < history.length - 1; i++) {
        newMaze = [...maze];
        newMaze[history[i][0]][history[i][1]] = "V";
        setMaze(newMaze);
        await delay(50);
      }
    };

    const drawPath = async () => {
      if (!path) return;
      let newMaze;

      for (let i = 1; i < path.length - 1; i++) {
        newMaze = [...maze];
        newMaze[path[i][0]][path[i][1]] = "P";
        setMaze(newMaze);
        await delay(50);
      }
    };

    drawHistory().then(() => {
      return drawPath();
    });
  }, [history]);

  const resetMaze = () => {
    const newMaze = Array.from({ length: 10 }, () => Array(10).fill(0));

    newMaze[0][0] = "S";
    newMaze[9][9] = "E";

    setMaze(newMaze);
  };

  const handleMazeChange = (newMaze) => {
    setMaze(newMaze);
  };

  const handleAlgorithm = (f) => {
    const [path, history] = f(maze);

    setPath(path);
    setHistory(history);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={resetMaze}>Clear Board</button>
          </li>
          <li>
            <button onClick={() => handleAlgorithm(bfs)}>BFS</button>
            <button onClick={() => handleAlgorithm(dfs)}>DFS</button>
          </li>
        </ul>
      </nav>
      <Grid maze={maze} onMazeChange={handleMazeChange} />
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
