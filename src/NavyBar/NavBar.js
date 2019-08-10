import React from "react";

import Brand from "./Brand/Brand";
import SidebarBtn from "./SidebarBtn/SidebarBtn";
import SearchBtn from "./SearchBtn/SearchBtn";
import Notifications from "./Notifications/Notifications";
import Avatar from "./Avatar/Avatar";

import {
  NavBarContainer,
  NavBrand,
  NavRight,
  NavMiddle,
  NavItem
} from "./NavbarStyle";
export default function NavBar() {
  return (
    <header>
      <NavBarContainer>
        <NavBrand>
          <NavItem>
            <Brand />
          </NavItem>
        </NavBrand>
        <NavMiddle>
          <NavItem>
            <SidebarBtn />
          </NavItem>
          <NavItem>
            <SearchBtn />
          </NavItem>
        </NavMiddle>
        <NavRight>
          <NavItem>
            <Notifications />
          </NavItem>
          <NavItem>
            <Avatar />
          </NavItem>
        </NavRight>
      </NavBarContainer>
    </header>
  );
}
