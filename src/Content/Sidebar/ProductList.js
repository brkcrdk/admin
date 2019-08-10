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
        <ListItem icon="add" name="Add product" />
        <ListItem icon="edit" name="Update Product" />
        <ListItem icon="trash alternate" name="Delete Product" />
      </List>
    </Container>
  );
}
