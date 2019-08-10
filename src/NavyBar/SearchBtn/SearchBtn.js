import React, { useCallback } from "react";
//REDUX
import { useSelector, useDispatch } from "react-redux";
//STYLING
import {
  SButton,
  SearchButton,
  InputContainer,
  CloseButton
} from "./SearchStyle";
import { Icon, TransitionGroup, Input } from "semantic-ui-react";

export default function SearchBtn() {
  //GET STATE
  const toggle = useSelector(state => state.navbarToggle);
  const dispatch = useDispatch();
  //TOGGLE FUNCTION
  const handleClick = useCallback(
    () => dispatch({ type: "toggle-searchbar" }),
    [dispatch]
  );

  return (
    <>
      <SearchButton
        input={{ fluid: true }}
        size="big"
        placeholder="Search here.."
      />
      <SButton icon compact onClick={handleClick}>
        <Icon name="search" />
      </SButton>
      <TransitionGroup animation="slide down" duration="300">
        {toggle && (
          <InputContainer>
            <CloseButton icon onClick={handleClick}>
              <Icon name="close" />
            </CloseButton>
            <Input
              style={{ width: "100%", height: "100%" }}
              icon="search"
              placeholder="Search here..."
              size="big"
            />
          </InputContainer>
        )}
      </TransitionGroup>
    </>
  );
}
