import React from "react";
import NormalMenu from "./SidebarComponents/NormalMenu";
//LINKS FOR ROUTES
import { Link } from "react-router-dom";
export default function SideMenu() {
  return (
    <>
      <Link to="/">
        <NormalMenu icon="home" name="Home" />
      </Link>
      <Link to="/products">
        <NormalMenu icon="gem" name="Products" />
      </Link>
      <Link to="/users">
        <NormalMenu icon="users" name="Users" />
      </Link>
      <Link to="/orders">
        <NormalMenu icon="clipboard check" name="Orders" />
      </Link>
    </>
  );
}
