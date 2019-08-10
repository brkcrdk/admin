import React, { useCallback } from "react";
import { Accordion, Menu, Icon } from "semantic-ui-react";
//REDUX
import { useDispatch, useSelector } from "react-redux";

export default function AcordionMenu(props) {
  //GET STATE
  const activeIndex = useSelector(state => state.accordionActiveIndex);
  //CHANGE STATE
  const dispatch = useDispatch();
  const handleActiveIndex = useCallback(
    (e, titleProps) => {
      const { index } = titleProps;
      //Active index means menu is open and if active index is equal to clicked menus index
      //i need to close that menu which new index should be -1
      //index=-1 ==> all menus closed
      const newIndex = activeIndex === index ? -1 : index;
      dispatch({ type: "toggle-activeIndex", payload: newIndex });
    },
    [dispatch, activeIndex]
  );
  return (
    <Menu.Item>
      <Icon name={props.icon} size="large" />
      <Accordion.Title
        active={activeIndex === props.index}
        content={props.name}
        index={props.index}
        onClick={handleActiveIndex}
      />
      <Accordion.Content
        active={activeIndex === props.index}
        content={props.content}
      />
    </Menu.Item>
  );
}
