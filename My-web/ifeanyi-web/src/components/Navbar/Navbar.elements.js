import styled from "styled-components";
import { FaFontAwesome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  font-size: 1.2rem;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  cursor: pointer;
  color: #fff;
  font-size: 2rem;
  text-decoration: none;
`;

export const NavIcon = styled(FaFontAwesome)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  padding: 0.5rem 1rem;
  height: 100%;


  @media screen and (max-width: 960px) {
text-align: center;
padding: 2rem;
width: 100%;
display: table;

&:hover {
color: #4b59f7;
border-bottom: 2px solid #4b59f7;
transition: all 0.3s ease;
  }
}`;


export const NavItemBtn = styled.li`
@media screen and (max-width: 960px) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
}`;

export const NavBtnLink = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
justify-content: center;
color: #fff;
padding: 8px 16px;
height: 100%;
width: 100%;
border: none;
outline: none;
`
