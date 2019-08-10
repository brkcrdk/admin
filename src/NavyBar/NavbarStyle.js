import styled from "styled-components";
import device from "../device";
import colours from "../colour";
export const NavBarContainer = styled.nav`
  display: grid;
  grid-template-columns: 2fr 7fr 3fr;
  align-items: center;
  background-color: ${colours.background};
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  margin: 0;
  padding: 0;
  box-shadow: 1px 2px 9px 0.1px rgba(145, 138, 145, 0.2);
  @media ${device.tabletplus} {
    grid-template-areas:
      "brand brand brand brand brand brand"
      "NavMiddle NavMiddle NavMiddle NavRight NavRight NavRight";
  }
`;

export const NavBrand = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: auto;
  justify-self: start;

  @media ${device.tabletplus} {
    margin-top: 0;
    grid-area: brand;
    width: 100%;
    border-bottom: 1px solid rgba(145, 138, 145, 0.2);
  }
`;

export const NavRight = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-self: end;
  @media ${device.tabletplus} {
    margin: 0;
    grid-area: NavRight;
  }
`;

export const NavMiddle = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr auto;
  justify-self: self-start;
  @media ${device.tabletplus} {
    margin: 0;
    grid-area: NavMiddle;
  }
`;

export const NavItem = styled.li`
  padding: 0.5em;
`;
