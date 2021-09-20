import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Wrapper = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  border-radius: 8px;
  border: 2px solid;
  padding: 10px 12px;
  margin-top: 10px;
  display: inline-block;
  color: ${props => props.theme.text};
`

export const ContactButton = () => <Wrapper to="/contact">Contact Us</Wrapper>
