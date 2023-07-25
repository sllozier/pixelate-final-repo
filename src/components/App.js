import React from "react";
import { useDispatch } from "react-redux";
import { addRow } from "../stateSlice";
import Table from "./Table";
import ColorSelector from "./ColorSelector";

const App = () => {
  const dispatch = useDispatch();

  const handleAddRowClick = () => {
    //⤵️ no parameters sent to reducer method because there is no action
    dispatch(addRow());
  };

  return (
    <div id="pixelate">
      <h1>Pixelate</h1>
      <div>
        <button onClick={handleAddRowClick} id="add-row">
          Add a row
        </button>
        <ColorSelector />
      </div>
      <Table />
    </div>
  );
};
export default App;
