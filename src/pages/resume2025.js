import React from "react";
import Layout from "../components/Layout";

const ResumePage = () => (
  <Layout>
    <div className="container my-4">
      <h1 className="text-center mb-4" style={{color: "var(--o-60)"}}>My Resume</h1>

      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <img
            src="/resume.png"
            alt="Resume 2025"
            className="img-fluid mx-auto d-block shadow rounded"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      <div className="text-center mt-4">
        <a href="/resume.pdf" download className="btn btn-primary">
          Download PDF
        </a>
      </div>
    </div>
  </Layout>
);

export default ResumePage;
