import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Careers() {
  return (
    <Layout>
      <div className="container-fluid px-4" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '150px' }}>
        <div className="text-center mb-5">
           <span className="small text-uppercase fw-bold mb-3 d-block" style={{ letterSpacing: '0.3em', color: 'var(--accent-primary)' }}>Opportunities</span>
           <h1 className="display-4 fw-bold">Join the Agency</h1>
        </div>
        
        <div className="neu-card p-5 text-center">
          <h2 className="h4 mb-4" style={{ color: "var(--text-primary)", fontWeight: 700 }}>
            No Active Transmissions
          </h2>
          <p className='text-muted lead mb-0'>
             We are currently operating at peak capacity with our existing neural units. Please check back when new bandwidth becomes available.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Careers | Join the Agency" />
