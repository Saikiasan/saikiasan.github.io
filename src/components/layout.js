import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Navbar"
import Footer from "./Footer"
import Background3D from "./Background3D"
import ClientOnly from "./ClientOnly"
import { useTranslation } from "react-i18next"
import { useMediaQuery } from "react-responsive"
import JokerLoader from "./JokerLoader"
import { useNavigation } from "../context/NavigationContext"

const Layout = ({ children }) => {
  const { isNavigating } = useNavigation()
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
    <div style={{ position: 'relative' }}>
      <JokerLoader isNavigating={isNavigating} />
      <ClientOnly>
        <Background3D />
      </ClientOnly>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      
      <main className="animate-fade-in" style={{ minHeight: '80vh', position: 'relative', zIndex: 1 }}>
        {children}
      </main>

      <Footer siteAuthor={data.site.siteMetadata?.author || `Saikia`} />
    </div>
  )
}

export default Layout
