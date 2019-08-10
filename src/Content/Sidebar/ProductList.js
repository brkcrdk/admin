import React from "react";
import styled from "styled-components";
import { List } from "semantic-ui-react";
import ListItem from "./SidebarComponents/ListItem";
export default function ProductList() {
  const Container = styled.div`
    margin-left: 1.6em;
  `;
  return (
    <Container>
      <List>
        <ListItem icon="gem" name="Products" />
        <ListItem icon="gem" name="Add product" />
        <ListItem icon="gem" name="Update Product" />
        <ListItem icon="gem" name="Delete Product" />
      </List>
    </Container>
  );
}
