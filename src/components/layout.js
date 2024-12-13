import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Navbar"
import Footer from "./Footer"
import "../styles/style-25.css"
import "../styles/utils-25.css"
import { useMediaQuery } from "react-responsive"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  const isMobile = useMediaQuery({ maxWidth: 768 })
  return (
    <>
      <div class="preloader">
        {/* <img src="" alt="Logo" className="logo"/> */}
      </div>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {isMobile ? (
        <svg>
          <defs>
            <filter id="gooeyness">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="2.2"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"
                result="gooeyness"
              />
              <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
            </filter>
          </defs>
        </svg>
      ) : (
        ""
      )}

      <main>{children}</main>

      <Footer siteAuthor={data.site.siteMetadata?.author || `Saikia`} />
    </>
  )
}

export default Layout
