import React from "react";
import { useDispatch } from "react-redux";
import { colorize } from "../stateSlice";

//⤵️ the props passed in from Table.
const TableCell = ({ rowIdx, colIdx, color }) => {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    //⤵️ We send the rowIdx and colIdx back so we know the coordinates of the proper
    //cell to colorize
    dispatch(colorize({ row: rowIdx, column: colIdx }));
  };
  //⤵️ The color className allows us to change the css using the className.
  return <td onClick={handleClick} className={color}></td>;
};
export default TableCell;
