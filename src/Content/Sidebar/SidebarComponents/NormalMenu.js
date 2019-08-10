import React from "react";
import styled from "styled-components";
import { Menu, Icon } from "semantic-ui-react";
export default function NormalMenu(props) {
  const Text = styled.p`
    margin: 0 0 0 1.6em;
    padding: 0;
  `;
  const Container = styled.div`
    margin: 0;
    :first-child {
      margin: 1em 0 0 0;
    }
  `;
  return (
    <Container>
      <Menu.Item>
        <Icon name={props.icon} size="large" />
        <Text>{props.name}</Text>
      </Menu.Item>
    </Container>
  );
}
