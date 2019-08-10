import React from "react";
import styled from "styled-components";
import { List } from "semantic-ui-react";
import ListItem from "./SidebarComponents/ListItem";
export default function OrderList() {
  const Container = styled.div`
    margin-left: 1.6em;
  `;
  return (
    <Container>
      <List>
        <ListItem icon="gem" name="Order List" />
        <ListItem icon="gem" name="Order Details" />
      </List>
    </Container>
  );
}
