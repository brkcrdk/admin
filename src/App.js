import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";
import device from "./device";
import NavBar from "./NavyBar/NavBar";
import Content from "./Content/Content";
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
    <Page className="App">
      <NavBar />
      <Router>
        <Route exact path="/" component={Content} />
      </Router>
    </Page>
  );
}

export default App;
