import { useEffect, useState } from "react";
import "./Grid.css";

export const Grid = (props) => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const updateWall = (e) => {
    const [rowIndex, columnIndex] = [
      e.target.getAttribute("data-row-index"),
      e.target.getAttribute("data-column-index"),
    ];

    const newMaze = [...props.maze];

    if (newMaze[rowIndex][columnIndex] === 0) {
      newMaze[rowIndex][columnIndex] = 1;
    } else if (newMaze[rowIndex][columnIndex] === 1) {
      newMaze[rowIndex][columnIndex] = 0;
    }

    props.updateMaze(newMaze);
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
          {row.map((value, columnIndex) => (
            <div
              className={`cell ${
                value === 1
                  ? "wall"
                  : value === "s"
                  ? "start"
                  : value === "e"
                  ? "end"
                  : ""
              }`}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseOver={handleMouseOver}
              key={columnIndex}
              data-row-index={rowIndex}
              data-column-index={columnIndex}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

//  [[s, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, e],];
