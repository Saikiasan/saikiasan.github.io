import React from 'react'
import Layout from '../components/Layout'

export default function privacy_policy() {
  return (
    <Layout>
      <div className="container-fluid text-light" style={{ paddingTop: "12px", marginBottom: "12px" }}>
        <h1 className="page-title">Privacy Policy</h1>
        <div className="card">
          <div className="card-body">
            <p className="lead">
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from this site.
            </p>
            <h2>Information We Collect</h2>
            <p>We collect information about you when you visit our site, including your IP address, browser type, and the pages you view.</p>
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to improve our site and to communicate with you about our products and services.</p>
            <h2>Sharing Your Information</h2>
            <p>We do not share your personal information with third parties except as required by law.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
