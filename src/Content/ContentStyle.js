import styled from "styled-components";
import device from "../device";

export const Container = styled.div`
  border: none;
  /* Sidelist height */
  height: 99vh;

  @media ${device.mobileS} {
    padding-top: 10em;
  }
  @media ${device.tablet} {
    padding-top: 7em;
  }
  @media ${device.laptop} {
    padding-top: 7.5em;
  }
  @media ${device.laptopL} {
    padding-top: 8em;
  }
  @media ${device.desktopL} {
    padding-top: 13em;
  }
`;
