import React from "react";
import SideMenu from "./Sidebar/SideMenu";
//REDUX
import { useSelector } from "react-redux";

import Routes from "./Routes";

//SEMANTİC UI
import { Container } from "./ContentStyle";
import {
  Sidebar,
  Segment,
  Menu,
  SidebarPushable,
  SidebarPusher
} from "semantic-ui-react";

export default function Content() {
  //GET STATE
  const toggle = useSelector(state => state.sidebarToggle);

  return (
    <Container>
      <SidebarPushable as={Segment} style={{ border: "none" }}>
        <Sidebar
          as={Menu}
          style={{ backgroundColor: "#f7faff" }}
          vertical
          secondary
          animation="push"
          direction="left"
          visible={toggle}
        >
          <SideMenu />
        </Sidebar>
        <SidebarPusher>
          <Segment basic>
            <Routes />
          </Segment>
        </SidebarPusher>
      </SidebarPushable>
    </Container>
  );
}
