import styled from "styled-components";
import device from "../../device";
import { Grid } from "semantic-ui-react";
export const SHeader = styled.p`
  @media ${device.mobileS} {
    font-size: 1.3em;
    margin-left: 1em;
  }
  @media ${device.tablet} {
    font-size: 2em;
    margin-left: 1em;
  }
  @media ${device.laptop} {
    font-size: 2em;
    margin-left: 1.3em;
    margin-top: 1em;
  }
  @media ${device.laptopL} {
    font-size: 2.5em;
    margin-left: 1.5em;
  }
  @media ${device.desktopL} {
    font-size: 4em;
    margin-left: 1.7em;
  }
`;

export const SGrid = styled(Grid)`
  &&& {
    margin: 2em 0;
    @media ${device.desktopL} {
      margin-left: 6.7em;
    }
  }
`;
