import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { kportLogo } from "../images/svgs/kport-logo"
import { ContactButton, ContactWrapper } from "./contactButton"

const NavBar = styled.nav`
  padding: 15px 25px 25px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--nav);
`

const NavItem = styled.li<{ hideable?: boolean }>`
  margin-left: 25px;
  @media (max-width: 850px) {
    ${props => props.hideable && "display: none;"}
  }
`

const NavLink = styled(Link)`
  font-size: 17px;
  color: ${props => props.theme.text};
  text-decoration: none;

  svg {
    position: relative;
    top: 5px;
    margin-left: 25px;
  }
`

const NavList = styled.ul`
  display: flex;
  align-items: baseline;

  ${ContactWrapper} {
    font-size: 17px;
  }

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
    <NavBar aria-label="Primary navigation">
      <NavLink to="/" aria-label="Home">
        {kportLogo}
      </NavLink>
      <NavList>
        {navOptions.map(option => (
          <NavItem hideable key={option.name}>
            <NavLink to={option.link}>{option.name}</NavLink>
          </NavItem>
        ))}

        <NavItem>
          <ContactButton />
        </NavItem>
      </NavList>
    </NavBar>
  )
}
