import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ContactButton, ContactWrapper } from "./contactButton"
import { handleClick, navIDs } from "./nav"

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`

const Wrapper = styled.footer`
  position: relative;
  padding: 40px 0;
  background: ${props => props.theme.footer};
  color: ${props => props.theme.footerText};

  hr {
    height: 3px;
    background: ${props => props.theme.footerText};
    border: none;
  }
`

const FooterNav = styled.nav`
  margin-bottom: 50px;
  a {
    color: ${({ theme }) => theme.footerText};
  }

  ${ContactWrapper} {
    @media (hover: hover) {
      :hover {
        color: ${({ theme }) => theme.footer};
        background: ${({ theme }) => theme.footerText};
        border: 2px solid ${({ theme }) => theme.footerText};
      }
    }
  }
`

const FooterNavList = styled.ul`
  margin-bottom: 10px;
`

const FooterNavLink = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;

  color: ${({ theme }) => theme.footerText};
  font-size: 22px;
  text-decoration: none;
  margin-bottom: 15px;
  cursor: pointer;

  svg {
    transition: opacity 0.2s;
    opacity: 0;
  }
  @media (hover: hover) {
    :hover {
      svg {
        opacity: 1;
      }
    }
  }
`

const Disclaimer = styled.div`
  @media (min-width: 650px) {
    width: 50%;
  }
  p {
    margin-top: 20px;
    line-height: 1.4;
    font-size: 14px;
  }
`

const Divider = styled.hr`
  @media (min-width: 850px) {
    width: 25%;
  }
  margin: 20px 0 30px 0;
`

const SocialIcons = styled.ul`
  @media (min-width: 850px) {
    position: absolute;
    top: 50px;
    right: 20px;
  }

  display: flex;

  a {
    display: inline-block;
    padding: 10px;
  }
  li {
    margin-right: 18px;
  }
`

const DevelopedBy = styled.a`
  position: relative;
  display: block;
  right: 10px;
  margin-top: 30px;
  @media (min-width: 850px) {
    position: absolute;
    bottom: 28px;
    right: 30px;
  }
`

const linkedInSVG = (
  <svg
    width="30"
    height="29"
    viewBox="0 0 30 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.2802 0.258789H2.51785C1.3832 0.258789 0.461304 1.15777 0.461304 2.26135V26.0317C0.461304 27.1353 1.3832 28.0342 2.51785 28.0342H27.2802C28.4149 28.0342 29.3432 27.1353 29.3432 26.0317V2.26135C29.3432 1.15777 28.4149 0.258789 27.2802 0.258789ZM9.19035 24.0663H4.90964V10.811H9.1968V24.0663H9.19035ZM7.04999 9.00062C5.67681 9.00062 4.56795 7.92804 4.56795 6.61366C4.56795 5.29929 5.67681 4.22671 7.04999 4.22671C8.41673 4.22671 9.53204 5.29929 9.53204 6.61366C9.53204 7.93424 8.42318 9.00062 7.04999 9.00062ZM25.2366 24.0663H20.9559V17.6185C20.9559 16.0809 20.9236 14.1031 18.7317 14.1031C16.5011 14.1031 16.1594 15.7771 16.1594 17.5069V24.0663H11.8787V10.811H15.9853V12.6213H16.0434C16.6171 11.5798 18.0161 10.4824 20.0984 10.4824C24.4307 10.4824 25.2366 13.2289 25.2366 16.8001V24.0663Z"
      fill={"var(--footerText)"}
    />
  </svg>
)

const instaSVG = (
  <svg
    width="30"
    height="29"
    viewBox="0 0 30 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.3261 7.02524C11.2282 7.02524 7.92277 10.2047 7.92277 14.1465C7.92277 18.0883 11.2282 21.2678 15.3261 21.2678C19.424 21.2678 22.7294 18.0883 22.7294 14.1465C22.7294 10.2047 19.424 7.02524 15.3261 7.02524ZM15.3261 18.7763C12.6779 18.7763 10.513 16.7 10.513 14.1465C10.513 11.593 12.6715 9.51676 15.3261 9.51676C17.9807 9.51676 20.1392 11.593 20.1392 14.1465C20.1392 16.7 17.9743 18.7763 15.3261 18.7763ZM24.759 6.73394C24.759 7.65742 23.9858 8.39496 23.0322 8.39496C22.0722 8.39496 21.3054 7.65122 21.3054 6.73394C21.3054 5.81667 22.0786 5.07293 23.0322 5.07293C23.9858 5.07293 24.759 5.81667 24.759 6.73394ZM29.6623 8.41975C29.5528 6.19474 29.0245 4.22383 27.3299 2.60001C25.6418 0.976185 23.5928 0.467965 21.2797 0.356404C18.8957 0.226251 11.7501 0.226251 9.36607 0.356404C7.05938 0.461767 5.01042 0.969987 3.31584 2.59381C1.62126 4.21764 1.09936 6.18854 0.983378 8.41355C0.84807 10.7067 0.84807 17.5801 0.983378 19.8733C1.09291 22.0983 1.62126 24.0692 3.31584 25.693C5.01042 27.3169 7.05293 27.8251 9.36607 27.9366C11.7501 28.0668 18.8957 28.0668 21.2797 27.9366C23.5928 27.8313 25.6418 27.323 27.3299 25.693C29.018 24.0692 29.5464 22.0983 29.6623 19.8733C29.7977 17.5801 29.7977 10.7129 29.6623 8.41975ZM26.5825 22.3338C26.0799 23.5486 25.107 24.4845 23.8376 24.9741C21.9369 25.6992 17.4266 25.5319 15.3261 25.5319C13.2256 25.5319 8.70885 25.693 6.81453 24.9741C5.55165 24.4907 4.57872 23.5548 4.0697 22.3338C3.31584 20.5055 3.48981 16.167 3.48981 14.1465C3.48981 12.126 3.32228 7.78137 4.0697 5.95922C4.57228 4.74445 5.54521 3.80858 6.81453 3.31895C8.7153 2.59381 13.2256 2.76115 15.3261 2.76115C17.4266 2.76115 21.9433 2.60001 23.8376 3.31895C25.1005 3.80238 26.0735 4.73825 26.5825 5.95922C27.3363 7.78757 27.1624 12.126 27.1624 14.1465C27.1624 16.167 27.3363 20.5117 26.5825 22.3338Z"
      fill="var(--footerText)"
    />
  </svg>
)

const twitterSVG = (
  <svg
    width="32"
    height="29"
    viewBox="0 0 32 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.0234 7.18093C28.043 7.48471 28.043 7.78855 28.043 8.09233C28.043 17.358 21.6715 28.0342 10.0263 28.0342C6.43857 28.0342 3.10579 26.8841 0.302307 24.8878C0.812048 24.9529 1.30212 24.9746 1.83147 24.9746C4.79174 24.9746 7.51683 23.868 9.69297 21.9801C6.90909 21.915 4.57612 19.8969 3.77231 17.1194C4.16444 17.1844 4.55651 17.2278 4.96825 17.2278C5.53677 17.2278 6.10534 17.141 6.63464 16.9892C3.73315 16.3381 1.55696 13.5172 1.55696 10.1104V10.0236C2.39993 10.5444 3.38025 10.8699 4.41922 10.9132C2.71361 9.65465 1.59618 7.50642 1.59618 5.07605C1.59618 3.7741 1.9098 2.58062 2.45877 1.53903C5.57593 5.79215 10.2615 8.56964 15.5155 8.87349C15.4175 8.3527 15.3587 7.81026 15.3587 7.26776C15.3587 3.40519 18.1818 0.258789 21.691 0.258789C23.5142 0.258789 25.161 1.10507 26.3177 2.47215C27.7488 2.16837 29.1211 1.58245 30.3367 0.779583C29.8661 2.40709 28.8663 3.77416 27.5528 4.64209C28.8271 4.49026 30.0622 4.09958 31.1993 3.55715C30.3368 4.94586 29.2585 6.18269 28.0234 7.18093Z"
      fill="var(--footerText)"
    />
  </svg>
)

const upArrowSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="10 9 15 4 20 9"></polyline>
    <path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
  </svg>
)

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <SocialIcons>
          <li>
            <a
              href="https://www.linkedin.com/company/hewitt-studios"
              target="_blank"
              rel="noopener"
              aria-label="Visit our LinkedIn account"
            >
              {linkedInSVG}
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/hewittstudios/"
              target="_blank"
              rel="noopener"
              aria-label="Visit our Instagram account"
            >
              {instaSVG}
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/hewittstudios"
              target="_blank"
              rel="noopener"
              aria-label="Visit our Twitter account"
            >
              {twitterSVG}
            </a>
          </li>
        </SocialIcons>
        <Divider />
        <FooterNav aria-label="Footer navigation">
          <FooterNavList>
            {navIDs.map(option => (
              <li key={option.name}>
                <FooterNavLink onClick={e => handleClick(e, option)}>
                  {option.name} {upArrowSVG}
                </FooterNavLink>
              </li>
            ))}
          </FooterNavList>
          <ContactButton />
        </FooterNav>
        <Disclaimer>
          <p>
            The K:Port® concept and design as well as all website contents,
            including images, are copyright of ©{" "}
            <span className="no-break">Hewitt Studios LLP</span>, 2014-
            {new Date().getFullYear()}.
          </p>
          <p>K:Port® is a trademarked and registered design.</p>
          <p> All rights reserved.</p>
        </Disclaimer>
        <DevelopedBy
          href="https://www.hewittstudios.co.uk/"
          target="_blank"
          rel="noopener"
          aria-label="Visit the Hewitt Studios website"
        >
          <StaticImage
            src="../images/content/hewitt-studios-logo.png"
            alt=""
            layout="constrained"
            width={250}
            loading="eager"
            placeholder="none"
          />
        </DevelopedBy>
      </Container>
    </Wrapper>
  )
}
