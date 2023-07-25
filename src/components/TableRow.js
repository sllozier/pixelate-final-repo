import { v4 as uuidv4 } from "uuid";
import React from "react";
import TableCell from "./TableCell";

//⤵️ the props passed in from Table.
const TableRow = ({ row, rowIdx }) => {
  return (
    <tr>
      {/* we are mapping over our row now to get each individual empty string

    */}
      {row.map((color, colIdx) => (
        //⤵️ again we need to pass in a key for React to allow us to map over the array
        //in JSX. We still want to pass the rowIdx so we know what row we are on
        //We also pass the column index and color into our TableCell. This will allow
        //us to change the specific cell  intended.
        <TableCell
          key={uuidv4()}
          rowIdx={rowIdx}
          colIdx={colIdx}
          color={color}
        />
      ))}
    </tr>
  );
};

export default TableRow;
