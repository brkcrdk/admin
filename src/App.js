import React from "react";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";
import device from "./device";
import NavBar from "./NavyBar/NavBar";
import Content from "./Content/Content";
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  const Page = styled.div`
    box-sizing: border-box;
    margin: auto;
    padding: 0;
    @media ${device.desktop} {
      max-width: 1400px;
    }
  `;

  return (
    <Router>
      <Page className="App">
        <NavBar />
        <Switch>
          <Content />
        </Switch>
      </Page>
    </Router>
  );
}

export default App;
