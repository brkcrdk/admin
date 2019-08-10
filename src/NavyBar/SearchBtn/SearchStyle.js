import styled from "styled-components";
import device from "../../device";

import { Button, Search } from "semantic-ui-react";

export const InputContainer = styled.div`
  width: 100%;
  height: 8.8em;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  @media ${device.mobileS} {
    height: 10.5em;
  }
  @media ${device.tablet} {
    height: 7.3em;
  }
  @media ${device.laptop} {
    height: 8em;
  }
`;

export const CloseButton = styled(Button)`
  &&& {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.2em;
    z-index: 2;
  }
`;

export const SearchButton = styled(Search)`
  &&& {
    @media ${device.mobileS} {
      display: none;
    }
    @media ${device.laptop} {
      display: block;
      width: 17em;
      margin-left: 0.5em;
    }
    @media ${device.laptopL} {
      display: block;
      width: 22em;
      margin-left: 1em;
    }
    @media ${device.desktopL} {
      width: 30em;
      font-size: 2em;
      margin-left: 2em;
      margin-top: 0;
    }
  }
`;

export const SButton = styled(Button)`
  &&& {
    background-color: transparent;
    font-size: 1.4em;
    padding: 0;
    @media ${device.mobileS} {
      margin-top: -0.4em;
      margin-left: -1em;
    }
    @media ${device.tablet} {
      padding: 0;
      margin-top: 0.1em;
      margin-left: -1.5em;
    }
    @media ${device.laptop} {
      display: none;
    }
  }
`;
