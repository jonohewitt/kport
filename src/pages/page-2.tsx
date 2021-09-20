import React, { FC } from "react"
import { Link, PageProps } from "gatsby"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"

const SecondPage: FC<PageProps> = () => (
  <>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default SecondPage
