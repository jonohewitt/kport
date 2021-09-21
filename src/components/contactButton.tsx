import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export const ContactWrapper = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  border-radius: 8px;
  border: 2px solid;
  padding: 10px 12px;
  margin-top: 10px;
  display: inline-block;
  color: ${props => props.theme.text};

  transition: 0.2s;

  :hover {
    color: ${props => props.theme.background};
    background: ${props => props.theme.text};
    border: 2px solid ${props => props.theme.text};
  }
`

export const ContactButton = () => (
  <ContactWrapper to="/contact">Contact Us</ContactWrapper>
)
