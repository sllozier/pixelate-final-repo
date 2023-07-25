import { v4 as uuidv4 } from "uuid"; //⬅️ it is important to have unique and consistent
// identifiers as the key for each element, array indices can change so uuid is a preferred
//option.
import React from "react";
import { useSelector } from "react-redux"; //⬅️ hook allows us to pull Redux state vals
//into this component
import TableRow from "./TableRow"; //⬅️ we import the row component so we can use state
//to fill data into each row.

const Table = () => {
  //⤵️ we pass a callback funtion into useSelector that represents the entire
  //Redux state and specify the stateValues reducer so we only pull that specific
  //data off of state. Here we are setting to a destructured "grid". We aren't
  //concerned with the `selectedColor` property right now because we are just
  //setting up the grid structure in our table.
  const { grid } = useSelector((state) => state.stateValues);

  console.log(grid);
  return (
    <table>
      <tbody>
        {/* grid is an array remember? grid:[["", "","","",...]] This means
        we can map over that array to get each empty string and assign them to rows
        using the rowIdx (that way we know where we are clicking)
        */}
        {grid.map((row, rowIdx) => (
          //⤵️ here we are passing props over to `TableRow` we take in the grid
          //state from Redux and then pass specific data to `TableRow` via props.
          // `key` - this is necessary when mapping over items in JSX
          // `row` - this is the single element from our loop (.map() method)
          // `rowIdx` - this is the index of the row and will tell us what row we clicked on.
          <TableRow key={uuidv4()} rowIdx={rowIdx} row={row} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
