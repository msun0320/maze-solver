const bfs = (maze, setMaze) => {
  // Define the possible movements: up, right, down, left
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // Helper function to check if a position is valid
  const isValid = (x, y) => {
    if (x < 0 || x >= maze.length || y < 0 || y >= maze[0].length) {
      return false;
    }

    return maze[x][y] !== 1 && maze[x][y] !== "S" && !visited[x][y];
  };

  // Find the start point
  let startRow, startCol;
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[0].length; j++) {
      if (maze[i][j] === "S") {
        startRow = i;
        startCol = j;
        break;
      }
    }
  }

  // Initialize an empty queue
  const queue = [];
  // Create a visited maze to keep track of visited cells
  const visited = Array.from({ length: 10 }, () => Array(10).fill(false));
  // Create a prev maze to keep track of previous steps
  const prev = Array.from({ length: 10 }, () => Array(10).fill(null));
  // Make a copy of the maze to be updated and rendered
  const newMaze = [...maze];

  queue.push([startRow, startCol]);
  visited[startRow][startCol] = true;

  while (queue.length > 0) {
    const curPos = queue.shift();

    // Try each possible movement
    for (let direction = 0; direction < 4; direction++) {
      const newX = curPos[0] + dx[direction];
      const newY = curPos[1] + dy[direction];

      // Check if the new position is valid and not visited
      if (!isValid(newX, newY)) {
        continue;
      }

      // Check if the next position is the end point
      if (maze[newX][newY] === "E") {
        // Reconstruct the path from end to start
        const path = [];
        let backtrack = curPos;
        while (backtrack !== null) {
          path.unshift(backtrack);
          backtrack = prev[backtrack[0]][backtrack[1]];
        }
        // Return the path when the end point is reached
        return path;
      }

      // Mark the next position as visited
      visited[newX][newY] = true;
      // Render updated maze
      newMaze[newX][newY] = "V";
      setMaze(newMaze);
      prev[newX][newY] = curPos;
      queue.push([newX, newY]);
    }
  }

  // No path to the end point found from the current position
  return null;
};

export default bfs;
