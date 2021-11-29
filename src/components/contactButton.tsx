import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export const ContactWrapper = styled.a`
  text-decoration: none;
  font-size: 20px;
  border-radius: 8px;
  border: 2px solid;
  padding: 10px 12px;
  margin-top: 10px;
  display: inline-block;
  color: ${props => props.theme.text};
  line-height: 1.2;

  transition: 0.2s;
  @media (hover: hover) {
    :hover {
      color: ${props => props.theme.background};
      background: ${props => props.theme.text};
      border: 2px solid ${props => props.theme.text};
    }
  }
`

export const ContactButton = () => (
  <ContactWrapper
    href="mailto:mail@hewittstudios.co.uk?subject=K:Port"
    target="_blank"
    rel="noopener"
  >
    Contact Us
  </ContactWrapper>
)
