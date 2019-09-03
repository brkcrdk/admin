import styled from "styled-components";
import device from "../../../device";
import colours from "../../../colour";
import { Icon } from "semantic-ui-react";
export const Text = styled.p`
  margin: 0 0 0 1.6em;
  padding: 0;
  transition: 0.3s;
  :hover {
    color: ${colours.mainBlue};
  }
  @media ${device.mobileS} {
    font-size: 1.2em;
    font-weight: bold;
  }
  @media ${device.laptop} {
    font-size: 1.3em;
    font-weight: bold;
  }
  @media ${device.desktopL} {
    font-size: 2.5em;
    font-weight: bold;
  }
`;

export const SIcon = styled(Icon)`
  &&& {
    @media ${device.mobileS} {
      font-size: 1.2em;
      padding-top: 0.3em;
    }
    @media ${device.mobileM} {
      font-size: 1.2em;
      padding-top: 0.4em;
    }
  }
`;

export const Container = styled.div`
  margin: 0;
  :first-child {
    margin: 1em 0 0 0;
  }
`;
