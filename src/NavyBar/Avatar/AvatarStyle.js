import styled from "styled-components";
import device from "../../device";
import { Image } from "semantic-ui-react";
export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 3em;
  @media ${device.tablet} {
    width: 7em;
    margin-right: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media ${device.laptop} {
    margin-top: 1em;
  }
  @media ${device.laptopL} {
    margin-right: 5em;
  }
  @media ${device.desktopL} {
    margin-right: 10em;
  }
`;

export const SImage = styled(Image)`
  &&& {
    @media ${device.mobileS} {
      padding: 0;
      margin: 0;
      width: 100%;
      height: 100%;
    }
    @media ${device.tablet} {
      padding: 0;
      margin: 0;
      width: 50%;
      height: 50%;
    }
    @media ${device.desktopL} {
      padding: 0;
      margin: 0;
      width: 70%;
      height: 70%;
    }
  }
`;

export const StyledSpan = styled.span`
  &&& {
    @media ${device.mobileS} {
      display: none;
    }
    @media ${device.tablet} {
      display: block;
      font-size: 1.1em;
    }
    @media ${device.laptop} {
      font-size: 1.2em;
    }
    @media ${device.desktopL} {
      font-size: 2em;
    }
  }
`;
