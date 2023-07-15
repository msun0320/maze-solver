import { useState } from "react";
import "./Grid.css";

export const Grid = (props) => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const updateWall = (e) => {
    const [rowIndex, colIndex] = [
      e.target.getAttribute("data-row-index"),
      e.target.getAttribute("data-column-index"),
    ];

    const newMaze = [...props.maze];

    if (newMaze[rowIndex][colIndex] === 0) {
      newMaze[rowIndex][colIndex] = 1;
    } else if (newMaze[rowIndex][colIndex] === 1) {
      newMaze[rowIndex][colIndex] = 0;
    }

    props.setMaze(newMaze);
  };

  const handleMouseDown = (e) => {
    updateWall(e);
    setIsMouseDown(true);
  };

  const handleMouseUp = () => setIsMouseDown(false);

  const handleMouseOver = (e) => {
    if (isMouseDown) {
      updateWall(e);
    }
  };

  return (
    <div className="grid">
      {props.maze.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((value, colIndex) => (
            <div
              className={`cell ${
                value === 1
                  ? "wall"
                  : value === "S"
                  ? "start"
                  : value === "E"
                  ? "end"
                  : value === "V"
                  ? "visited"
                  : ""
              }`}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseOver={handleMouseOver}
              key={colIndex}
              data-row-index={rowIndex}
              data-column-index={colIndex}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};
