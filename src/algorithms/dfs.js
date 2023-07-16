const dfs = (maze) => {
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
  const helper = (startRow, startCol) => {
    // Check if the current position is the end point
    if (maze[startRow][startCol] === "E") {
      // Return the path when the end point is reached
      return [path, history];
    }

    // Mark the current position as visited
    visited[startRow][startCol] = true;

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
      history.push([newX, newY]);
      // Recursively explore the new position
      const [res, visitRes] = helper(newX, newY);
      // If the end point is reached in the recursive call, return the path
      if (res) return [res, visitRes];
      // Remove the movement from the path as it didn't lead to a solution
      path.pop();
    }

    // No path to the end point found from the current position
    return [null, history];
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

  // Initialize an empty path
  const path = [[startRow, startCol]];

  // Create a visited maze to keep track of visited cells
  const visited = Array.from({ length: 10 }, () => Array(10).fill(false));

  // Create a history to keep track of visited cells for UI rendering
  const history = [[startRow, startCol]];

  // Solve the maze using DFS
  return helper(startRow, startCol);
};

export default dfs;
