import React from "react";
import { useSudoku } from "../context/SudokuContext";

function SudokuCell({
  row,
  col,
  value,
  isFixed,
  isInvalid,
  isSelected,
  isHinted,
  rowGroupSize,
  colGroupSize,
  size,
}) {
  const { dispatch, state } = useSudoku();

  const classes = ["cell"];
  if (isFixed) classes.push("fixed");
  if (isInvalid) classes.push("invalid");
  if (isSelected) classes.push("selected");
  if (isHinted) classes.push("hint");
  if ((col + 1) % colGroupSize === 0 && col !== size - 1) classes.push("thick-right");
  if ((row + 1) % rowGroupSize === 0 && row !== size - 1) classes.push("thick-bottom");

  return (
    <input
      value={value ?? ""}
      readOnly={isFixed || state.isComplete}
      className={classes.join(" ")}
      onFocus={() => dispatch({ type: "SELECT_CELL", payload: { row, col } })}
      onClick={() => dispatch({ type: "SELECT_CELL", payload: { row, col } })}
      onChange={(event) =>
        dispatch({
          type: "SET_CELL_VALUE",
          payload: { row, col, rawValue: event.target.value },
        })
      }
      inputMode="numeric"
      maxLength={1}
      aria-label={`Cell ${row + 1}-${col + 1}`}
    />
  );
}

export default SudokuCell;
