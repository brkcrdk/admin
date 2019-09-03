import React from "react";
import { Container, Text, SIcon } from "./NormalStyle";
import { Menu } from "semantic-ui-react";
export default function NormalMenu(props) {
  return (
    <Container>
      <Menu.Item>
        <SIcon name={props.icon} size="large" />
        <Text>{props.name}</Text>
      </Menu.Item>
    </Container>
  );
}
