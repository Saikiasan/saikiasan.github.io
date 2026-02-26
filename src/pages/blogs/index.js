import React from 'react'
import Layout from '../../components/Layout'

export default function index() {
  return (
    <Layout>
      <div className="container-fluid text-light" style={{ paddingTop: "12px", marginBottom: "12px" }}>
        <h1 className="page-title">Blogs</h1>
        <div className="card">
          <div className="card-body">
            <p className="lead">
              Welcome to my blog! Here, I share my thoughts, experiences, and insights on various topics related to technology, programming, and more.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
