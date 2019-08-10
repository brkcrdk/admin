import React from "react";
import { Accordion } from "semantic-ui-react";
import AccordionMenu from "./SidebarComponents/AcordionMenu";
import NormalMenu from "./SidebarComponents/NormalMenu";
import ProductList from "./ProductList";
export default function SideMenu() {
  return (
    <>
      <Accordion>
        <NormalMenu icon="home" name="Home" />
        <AccordionMenu
          icon="clipboard list"
          name="Catalogue"
          content={<ProductList />}
          index="0"
        />
        <NormalMenu icon="users" name="Users" />
        <NormalMenu icon="clipboard check" name="Orders" />
      </Accordion>
    </>
  );
}
