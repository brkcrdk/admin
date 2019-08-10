import React, { useCallback } from "react";
import { SButton, SIcon } from "./SidebarStyle";
//REDUX FOR SIDEBAR TOGGLE
import { useDispatch } from "react-redux";

export default function SidebarBtn() {
  //SIDEBAR TOGGLE STATE CHANGE
  const dispatch = useDispatch();
  const handleToggle = useCallback(() => dispatch({ type: "toggle-sidebar" }), [
    dispatch
  ]);
  return (
    <SButton icon>
      <SIcon name="bars" size="large" onClick={handleToggle} />
    </SButton>
  );
}
