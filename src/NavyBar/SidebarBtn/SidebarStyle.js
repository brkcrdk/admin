import styled from "styled-components";
import device from "../../device";

import { Icon, Button } from "semantic-ui-react";

export const SIcon = styled(Icon)`
  &&& {
    margin-top: 0.4em;
    padding: 0;
  }
`;

export const SButton = styled(Button)`
  &&& {
    background-color: transparent;
    :hover {
      color: dodgerblue;
    }
    @media ${device.mobileS} {
      margin: 0 0 0 -2em;
      padding: 0;
    }
    @media ${device.tablet} {
      padding: 0;
      margin-top: 0.9em;
      margin-left: -3.5em;
    }
    @media ${device.laptop} {
      padding: 0;
      margin-top: 0.6em;
      margin-left: -0.5em;
      font-size: 1.3em;
    }
    @media ${device.laptopL} {
      padding: 0;
      margin-left: 1em;
      font-size: 1.3em;
    }
    @media ${device.desktopL} {
      padding: 0;
      margin-top: 0.7em;
      margin-left: 1.5em;
      font-size: 2em;
    }
  }
`;
