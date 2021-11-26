import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { kportLogo } from "../images/svgs/kport-logo"
import { ContactButton, ContactWrapper } from "./contactButton"

const NavBar = styled.nav`
  padding: 15px 25px 25px 0;
  @media (max-width: 400px) {
    padding: 15px 10px 25px 0;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--nav);
`

const NavItem = styled.li<{ hideable?: boolean }>`
  margin-left: 25px;
  @media (max-width: 850px) {
    margin-left: 20px;
  }
  @media (max-width: 765px) {
    ${props => props.hideable && "display: none;"}
  }
  @media (max-width: 400px) {
    margin-left: 5px;
  }
`

const NavLink = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;

  font-size: 17px;
  @media (max-width: 850px) {
    font-size: 15px;
  }
  @media (max-width: 790px) {
    font-size: 14px;
  }

  color: ${props => props.theme.text};
  text-decoration: none;
  cursor: pointer;

  svg {
    position: relative;
    top: 5px;
    margin-left: 25px;
  }
`

const HomeLink = styled(Link)`
  svg {
    position: relative;
    top: 5px;
    margin-left: 25px;
    @media (max-width: 400px) {
      margin-left: 15px;
    }
  }
`

const NavList = styled.ul`
  display: flex;
  align-items: baseline;

  ${ContactWrapper} {
    font-size: 17px;
    line-height: 1 !important;
    @media (max-width: 600px) {
      font-size: 14px;
    }
    @media (max-width: 400px) {
      font-size: 14px;
      padding: 8px;
    }
  }

  ${NavLink} {
    padding-bottom: 7px;
    :hover {
      border-bottom: 2px solid var(--text);
    }
  }
`

export const navOptions = [
  { name: "Concept", link: "/#concept" },
  { name: "Sustainability", link: "/#sustainability" },
  { name: "User Experience", link: "/#experience" },
  { name: "Smart City", link: "/#smartcity" },
]

const navIDs = [
  { name: "Concept", id: "concept" },
  { name: "Sustainability", id: "sustainability" },
  { name: "User Experience", id: "experience" },
  { name: "Smart City", id: "smartcity" },
]

export const Nav = () => {
  const handleClick = (e: MouseEvent, option: { name: string; id: string }) => {
    // e.preventDefault()

    const prefersReducedMotion = matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    const options: boolean | ScrollIntoViewOptions = prefersReducedMotion
      ? true
      : { behavior: "smooth" }
    document.getElementById(option.id).scrollIntoView(options)
  }
  return (
    <NavBar aria-label="Primary navigation">
      <HomeLink to="/" aria-label="Home">
        {kportLogo}
      </HomeLink>
      <NavList>
        {navIDs.map(option => (
          <NavItem hideable key={option.name}>
            <NavLink onClick={e => handleClick(e, option)}>
              {option.name}
            </NavLink>
          </NavItem>
        ))}

        <NavItem>
          <ContactButton />
        </NavItem>
      </NavList>
    </NavBar>
  )
}
