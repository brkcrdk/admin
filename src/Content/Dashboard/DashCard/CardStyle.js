import styled from "styled-components";
import device from "../../../device";
import colour from "../../../colour";
import { Card, CardDescription, Icon } from "semantic-ui-react";

export const SCard = styled(Card)`
  &&& {
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: ${colour.background};
    @media ${device.mobileS} {
      width: 20em;
      margin-bottom: 1em;
    }
    @media ${device.mobileS} {
      width: 19em;
    }
    @media ${device.mobileM} {
      width: 23em;
    }
    @media ${device.mobileL} {
      width: 26em;
    }
    @media ${device.tablet} {
      width: 24em;
      /* Tablet and wider screens will be side by side so i need a little margin for them */
      margin: 0.5em;
    }
    @media ${device.laptop} {
      width: 34em;
    }
    @media ${device.laptopL} {
      width: 48em;
    }
    @media ${device.desktopL} {
      width: 42em;
    }
  }
`;

export const SDescription = styled(CardDescription)`
  &&& {
    font-size: 2em;
    font-weight: lighter;
    padding-top: 1em;
  }
`;

export const SIcon = styled(Icon)`
  &&& {
    font-size: 3em;
    position: absolute;
    top: 1em;
    right: 1em;
  }
`;
