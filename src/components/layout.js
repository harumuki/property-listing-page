/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => (
  <>
    <Navbar />
    {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

    <main>{children}</main>

    <Footer />
  </>
)

export default Layout
