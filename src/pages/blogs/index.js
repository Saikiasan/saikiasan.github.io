import * as React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import ClientOnly from "../../components/ClientOnly"
import IntelligenceClientContent from "../../components/IntelligenceClientContent"

const IntelligencePage = () => {
  return (
    <Layout>
      <div className="container-fluid px-4" style={{ maxWidth: '900px', margin: '120px auto' }}>
        <ClientOnly>
          <IntelligenceClientContent />
        </ClientOnly>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Intelligence | The Agentic Manifesto" />

export default IntelligencePage
