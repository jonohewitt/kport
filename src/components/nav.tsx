import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const NavBar = styled.nav`
  margin: 45px 30px 45px 0;
  display: flex;
  justify-content: space-between;
`
const NavList = styled.ul`
  display: flex;
`
const NavItem = styled.li``

const NavLink = styled(Link)`
  font-size: 18px;
  margin-left: 30px;
  color: ${props => props.theme.text};
  text-decoration: none;
`

export const navOptions = [
  { name: "Concept", link: "/concept" },
  { name: "Sustainability", link: "/sustainability" },
  { name: "User Experience", link: "/userexperience" },
  { name: "Smart City", link: "/smartcity" },
  { name: "Contact", link: "/contact" },
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
      </NavList>

      <NavLink to="/">K:Port</NavLink>
    </NavBar>
  )
}
