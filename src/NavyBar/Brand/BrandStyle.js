import styled from "styled-components";
import device from "../../device";
import colours from "../../colour";
import { Icon, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
export const Container = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  transition: 0.5s;
  :hover {
    color: ${colours.mainBlue};
  }
  @media ${device.mobileS} {
    padding: 1em;
    margin: 0;
    margin-left: -2.7em;
  }
  @media ${device.mobileM} {
    padding: 1em;
    margin-left: -3em;
  }
  @media ${device.mobileL} {
    padding: 1em;
    margin-left: -4em;
  }
  @media ${device.tablet} {
    margin-left: -3em;
    padding: 1em;
  }
  @media ${device.laptopL} {
    margin-left: 1.4em;
    padding: 1em;
  }
  @media ${device.desktopL} {
    padding: 2em;
    margin-left: 2em;
  }
`;

export const SHeader = styled(Header)`
  &&& {
    margin: 0;
    padding: 0 0.3em;
  }
  @media ${device.laptopL} {
    font-size: 2em;
  }
  @media ${device.desktopL} {
    font-size: 4em;
  }
`;

export const SIcon = styled(Icon)`
  &&& {
    @media ${device.laptop} {
      font-size: 2.3em;
    }
    @media ${device.laptopL} {
      font-size: 3em;
    }
    @media ${device.desktopL} {
      font-size: 6em;
    }
  }
`;
