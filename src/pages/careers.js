import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/sass/about-page.module.scss"

export default function Careers() {
  return (
    <Layout>
      <h1 className={styles.pageTitle}>Career opportunities</h1>
      <div className="container-fluid text-light py-4" style={{ paddingTop: "12px", marginBottom: "12px" }}>
        <div className="card col-lg-5 mx-auto border-1 rounded-4 border-danger">
          <div className="card-body text-center">
            <h2 className="h2" style={{ color: "var(--o-80)" }}>
              We are not hiring at the moment. Please check back later.
            </h2>
            <p className='lead'>
               We apologize for any inconvenience caused.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
