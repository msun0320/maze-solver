# Maze Solver

A React-based maze solver that visualizes pathfinding algorithms including Breadth-First Search (BFS) and Depth-First Search (DFS).

## Features

- Interactive 10x10 grid where you can draw walls by clicking and dragging
- Visual pathfinding with two algorithms:
  - **BFS (Breadth-First Search)**: Finds the shortest path
  - **DFS (Depth-First Search)**: Explores paths depth-first
- Real-time visualization showing:
  - Visited cells (during algorithm execution)
  - Final path from start to end
- Clear board functionality to reset the maze

## How to Use

1. **Create walls**: Click and drag on the grid to add/remove walls (black cells)
2. **Start point**: Green cell marked with "S" at position (0,0)
3. **End point**: Red cell marked with "E" at position (9,9)
4. **Run algorithms**: Click BFS or DFS to visualize the pathfinding
5. **Clear board**: Reset the maze to start over

## Algorithm Visualization

- **Gray cells**: Visited during search
- **Blue cells**: Final path from start to end
- Both algorithms animate their progress with a 50ms delay between steps

## Technologies Used

- React 18
- CSS3 for styling
- Create React App for project setup
