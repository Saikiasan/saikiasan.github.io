import React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'

function tnc() {
  return (
    <Layout>
      <div className="container-fluid text-light" style={{ paddingTop: "12px", marginBottom: "12px" }}>
        <h1 className="page-title" style={{ color: "var(--o-60)" }}>Terms and Conditions</h1>
        <div className="card" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}>
          <div className="card-body">
            
            <h2 className="h4 mb-3">1. Introduction</h2>
            <p>
              Welcome to Saikia Codes (the "Website"). These Terms and Conditions govern your use of our website and the services provided. By accessing and using this website, you agree to be bound by these terms. If you do not agree with any part of these terms, please do not use the website.
            </p>

            <h2 className="h4 mb-3">2. Intellectual Property Rights</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, audio clips, and code, is the intellectual property of Saikia Codes or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, modify, or transmit any content without express written permission from Saikia Codes.
            </p>

            <h2 className="h4 mb-3">3. User Responsibilities</h2>
            <p>
              You agree to use this website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment of the website. Prohibited behavior includes:
            </p>
            <ul>
              <li>Harassing or causing distress or inconvenience to any person</li>
              <li>Obscene or offensive remarks or comments</li>
              <li>Disrupting the normal flow of dialogue within our website</li>
              <li>Attempting to gain unauthorized access to our systems</li>
              <li>Transmitting obscene or offensive content</li>
            </ul>

            <h2 className="h4 mb-3">4. Limitation of Liability</h2>
            <p>
              Saikia Codes shall not be held responsible for any damages, loss of data, or other issues resulting from your use of the website. We strive to keep the website accurate and up-to-date, but we make no warranties, express or implied, regarding the accuracy, timeliness, or completeness of the information presented.
            </p>

            <h2 className="h4 mb-3">5. Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of these external sites. Your use of third-party websites is at your own risk and subject to their terms and conditions.
            </p>

            <h2 className="h4 mb-3">6. Services and Projects</h2>
            <p>
              Saikia Codes provides web development, app development, design, and other digital services. All projects are subject to a project agreement outlining scope, timeline, and payment terms. Changes to project scope may incur additional costs.
            </p>

            <h2 className="h4 mb-3">7. Payment Terms</h2>
            <p>
              Payment terms for services will be outlined in individual project agreements. Invoices are payable within the agreed timeframe. Late payments may result in suspension of services.
            </p>

            <h2 className="h4 mb-3">8. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of proprietary information shared during the course of any project or engagement. Confidential information shall not be disclosed to third parties without express written consent.
            </p>

            <h2 className="h4 mb-3">9. Modification of Terms</h2>
            <p>
              Saikia Codes reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website following the posting of modified terms constitutes acceptance of those modifications.
            </p>

            <h2 className="h4 mb-3">10. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts located in Assam, India.
            </p>

            <h2 className="h4 mb-3">11. Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
              <br />
              <strong>Email:</strong> saikiacodes@gmail.com
              <br />
              <strong>Address:</strong> Chapakhowa, Lakhimipather, Assam - 786157, India
            </p>

            <h2 className="h4 mb-3">12. Acceptance of Terms</h2>
            <p>
              By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any of these terms, you are requested to immediately discontinue use of the website.
            </p>

            <hr className="my-4" />
            <p className="text-muted small">
              Last Updated: December 2025
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Terms and Conditions" />

export default tnc