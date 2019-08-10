import React from "react";
import { List, Icon } from "semantic-ui-react";
export default function ListItem(props) {
  return (
    <List.Item as="a">
      <Icon name={props.icon} />
      <List.Header>{props.name}</List.Header>
    </List.Item>
  );
}
