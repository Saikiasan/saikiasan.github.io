import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const NotFoundPage = () => (
  <Layout>
    {/* <style>
      {`h1::before,h1::after {
        content: '';
        display: inline-block;
        width: 100px;
        height: 2px;
        background: var(--red-404);
      }
  
      `}
    </style> */}
    <div
      className="clearfix"
      style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <h1
        style={{
          fontFamily: "Archive",
          color: "var(--red-404)",
          textAlign: "center",
          fontSize: "5rem",
          border: "2px solid var(--neon-green)",
          padding: "24px",
          borderRadius: "12px",
        }}
      >
        404: Not Found
      </h1>
      <p
        className="lead"
        style={{
          color: "var(--neon-green)",
          fontFamily: "MonoBold",
          fontSize: "1.5rem",
          textAlign: "center",
        }}
      >
        OOPS WE CAN'T FIND THE PAGE YA LOOKIN FOR!
        <br />
        It seems we ran at an invalid page, Go back to the previous page
      </p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
