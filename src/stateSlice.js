import { createSlice } from "@reduxjs/toolkit";

const NUM_COLUMNS = 20;

//createSlice function requires and object with 3 properties:
export const stateSlice = createSlice({
  //𝟭⤵️ represents the name of the slice and needs to be unique.
  name: "state",
  //𝟮⤵️ whatever the initial state of our data might be: object, string, array etc.
  initialState: {
    //we made grid hold 20 columns of empty strings
    grid: [],
    selectedColor: "red",
  },
  //𝟯⤵️ an object with methods that change the our state
  reducers: {
    //⤵️ addRow is not changing state but just adding so no need for "action"
    addRow(state) {
      const newRow = Array(NUM_COLUMNS).fill("");
      state.grid.push(newRow);
    },
    //⤵️ pickColor is changing the state of selectedColor. "action" happens to "payload"
    //we make the selectedColor state now the same as the action.payload
    pickColor(state, action) {
      state.selectedColor = action.payload;
    },
    //⤵️ colorize is changing the state of grid. grid consists of rows and columns so both,
    //must be passed into this function as payload so they will both be changed to the selectedColor
    //state value.
    colorize(state, { payload }) {
      state.grid[payload.row][payload.column] = state.selectedColor;
    },
  },
});

//The reducer methods need to be exported so they can be used in our React components
export const { addRow, pickColor, colorize } = stateSlice.actions;

//we export default as the primary export
export default stateSlice.reducer;
