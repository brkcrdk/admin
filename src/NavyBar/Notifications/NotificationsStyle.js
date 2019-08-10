import styled from "styled-components";
import device from "../../device";

import { Label, Button } from "semantic-ui-react";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  @media ${device.mobileS} {
    margin-right: -2em;
  }
  @media ${device.tablet} {
    width: 7em;
    margin-right: 0.5em;
  }
  @media ${device.desktopL} {
    width: 12em;
  }
`;

export const SLabel = styled(Label)`
  &&& {
    position: relative;
    font-size: 0.3px;
    top: -5.5em;
    right: -1.7em;
    display: ${props => (props.toggle < 1 ? "none" : "")};
  }
`;

export const SButton = styled(Button)`
  &&& {
    background-color: transparent;
    @media ${device.mobileS} {
      margin-top: 1em;
      padding: 0.2em;
      font-size: 0.8em;
    }
    @media ${device.tablet} {
      margin-top: 1.2em;
      padding: 0.3em;
      font-size: 1em;
    }
    @media ${device.laptop} {
      margin-top: 1.2em;
      padding: 0.3em;
      font-size: 1.3em;
    }
    @media ${device.desktopL} {
      margin-top: 1em;
      font-size: 2em;
    }
  }
`;
