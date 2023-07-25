import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pickColor } from "../stateSlice";

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "black",
  "white",
  "brown",
];

const ColorSelector = () => {
  //⤵️ useDispatch returns a function where we can pass the pickColor function.
  //this is how we call back to Redux and ask the reducer method to be called.
  const dispatch = useDispatch();
  //⤵️ pulls the color out of Redux
  const { selectedColor } = useSelector((state) => state.stateValues);

  //⤵️ This should look familiar! It is just an event handler that will be called with
  // an onChange in this case but can be used inside an onClick as well.
  //Instead of writing vanilla JS inside this change handler, we are dispatching
  //to Redux to call the pickColor function and giving it the color value as an action
  const handleColorChange = (event) => {
    dispatch(pickColor(event.target.value));
  };
  //🔃 This is all like a circle or a loop. We ask for the state from redux, then we
  //take the information in our onChange and send it back to the reducer method and
  // ask for the new state back from Redux.

  return (
    //⤵️ this tells what color was selected and needs to be stored in state.
    <select onChange={handleColorChange} value={selectedColor}>
      {colors.map((color) => (
        <option key={color} value={color}>
          {color}
        </option>
      ))}
    </select>
  );
};

export default ColorSelector;
