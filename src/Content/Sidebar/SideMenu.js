import React from "react";
import { Accordion } from "semantic-ui-react";
import AccordionMenu from "./SidebarComponents/AcordionMenu";
import NormalMenu from "./SidebarComponents/NormalMenu";
import ProductList from "./ProductList";
import OrderList from "./OrderList";
import UserList from "./UserList";
import AcordionMenu from "./SidebarComponents/AcordionMenu";
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
        <AcordionMenu
          name="Users"
          content={<UserList />}
          index="1"
          icon="users"
        />
        <AcordionMenu
          name="Orders"
          content={<OrderList />}
          index="2"
          icon="clipboard list"
        />
      </Accordion>
    </>
  );
}
