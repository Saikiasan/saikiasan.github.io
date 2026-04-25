import * as React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import ClientOnly from "../../components/ClientOnly"
import AboutClientContent from "../../components/AboutClientContent"

const About = () => {
  return (
    <Layout>
      <div className="container-fluid px-4" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <ClientOnly>
          <AboutClientContent />
        </ClientOnly>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="The Origin Story" />

export default About
