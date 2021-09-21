import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { kportLogo } from "../images/svgs/kport-logo"
import { ContactButton } from "./contactButton"

const NavBar = styled.nav`
  margin: 30px 30px 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NavList = styled.ul`
  display: flex;
  align-items: baseline;
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

export const navOptions = [
  { name: "Concept", link: "/concept" },
  { name: "Sustainability", link: "/sustainability" },
  { name: "User Experience", link: "/userexperience" },
  { name: "Smart City", link: "/smartcity" },
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
