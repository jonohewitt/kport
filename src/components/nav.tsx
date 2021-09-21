import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { kportLogo } from "../images/svgs/kport-logo"
import { ContactButton } from "./contactButton"

const NavBar = styled.nav`
  padding: 30px 30px 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavItem = styled.li`
  margin-left: 25px;
`

const NavLink = styled(Link)`
  font-size: 18px;
  color: ${props => props.theme.text};
  text-decoration: none;

  svg {
    position: relative;
    top: 5px;
  }
`

const NavList = styled.ul`
  display: flex;
  align-items: baseline;

  ${NavLink} {
    padding-bottom: 7px;
    :hover {
      border-bottom: 2px solid var(--text);
    }
  }
`

export const navOptions = [
  { name: "Concept", link: "#concept" },
  { name: "Sustainability", link: "#sustainability" },
  { name: "User Experience", link: "#experience" },
  { name: "Smart City", link: "#smartcity" },
]

export const Nav = () => {
  return (
    <NavBar>
      <NavList>
        {navOptions.map(option => (
          <NavItem key={option.name}>
            <NavLink to={option.link}>{option.name}</NavLink>
          </NavItem>
        ))}
        <NavItem>
          <ContactButton />
        </NavItem>
      </NavList>

      <NavLink to="/">{kportLogo}</NavLink>
    </NavBar>
  )
}
