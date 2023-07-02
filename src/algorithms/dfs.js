const findPathByDFS = (maze, setMaze) => {
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

  // Helper function to perform dfs
  const dfs = (startRow, startCol, path) => {
    // Check if the current position is the end point
    if (maze[startRow][startCol] === "E") {
      // Return the path when the end point is reached
      return path;
    }

    // Mark the current position as visited
    visited[startRow][startCol] = true;

    // Render updated maze
    newMaze[startRow][startCol] = "V";
    setMaze(newMaze);

    // Try each possible movement
    for (let direction = 0; direction < 4; direction++) {
      const newX = startRow + dx[direction];
      const newY = startCol + dy[direction];

      // Check if the new position is valid and not visited
      if (!isValid(newX, newY)) {
        continue;
      }

      // Add the movement to the path
      path.push([newX, newY]);
      // Recursively explore the new position
      const res = dfs(newX, newY, path);
      // If the end point is reached in the recursive call, return the path
      if (res) return res;
      // Remove the movement from the path as it didn't lead to a solution
      path.pop();
    }

    // No path to the end point found from the current position
    return null;
  };

  // Initialize an empty path
  const path = [];

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

  // Create a visited maze to keep track of visited cells
  const visited = Array.from({ length: 10 }, () => Array(10).fill(0));

  // Make a copy of the maze to be updated and rendered
  const newMaze = [...maze];

  // Solve the maze using DFS
  return dfs(startRow, startCol, path);
};

export default findPathByDFS;
