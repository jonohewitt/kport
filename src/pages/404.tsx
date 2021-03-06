import { Link, PageProps } from "gatsby"
import React, { FC } from "react"
import styled from "styled-components"
import { Seo } from "../components/seo"

const rightArrowSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
)

const Text = styled.header`
  display: grid;
  place-items: stretch center;
  padding: max(20vh, 100px) 0;
  max-height: 500px;
  h1 {
    font-size: 36px;
  }

  p {
    font-size: 20px;
  }
`

const ArrowLink = styled(Link)`
  font-size: 18px;
  border-bottom: none;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 500;
  padding: 20px;
  span {
    border-bottom: 1px solid ${({ theme }) => theme.text};
  }
  svg {
    position: relative;
    top: 3px;
    left: 0;
    transition: 0.2s;
  }
  @media (hover: hover) {
    :hover {
      span {
        border-bottom: 2px solid ${({ theme }) => theme.text};
      }
      svg {
        left: 6px;
      }
    }
  }
`

const NotFoundPage: FC<PageProps> = () => (
  <>
    <Seo title="404: Not found" />
    <Text>
      <h1>Sorry, this page doesn't exist</h1>

      <ArrowLink to="/">
        <span>Return to the overview page</span> {rightArrowSVG}
      </ArrowLink>
    </Text>
  </>
)

export default NotFoundPage
