import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { db } from "../firebase"
import { collection, query, onSnapshot, orderBy } from "firebase/firestore"
import { motion } from "framer-motion"

export default function Careers() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const q = query(
      collection(db, "jobs"),
      orderBy("postedAt", "desc")
    )

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const jobsList = querySnapshot.docs
        .map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        .filter(job => job.active === true)
      
      setJobs(jobsList)
      setLoading(false)
    }, (error) => {
      console.error("Error listening to jobs:", error)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <Layout>
      <div className="container-fluid px-4" style={{ maxWidth: '900px', margin: '0 auto', paddingTop: '150px' }}>
        <div className="text-center mb-5">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="small text-uppercase fw-bold text-success" 
            style={{ letterSpacing: '0.3em' }}
          >
            Opportunities
          </motion.span>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="display-4 fw-bold mt-2"
          >
            Join the Agency
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="lead text-muted"
          >
            Help us architect the future of autonomous systems.
          </motion.p>
        </div>
        
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : jobs.length > 0 ? (
          <div className="row g-4 mb-5">
            {jobs.map((job, index) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="col-12"
              >
                <div className="neu-card p-4 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">
                  <div>
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <span className="badge rounded-pill px-3 py-2" style={{ background: 'var(--accent-gradient)', color: '#000', fontSize: '0.65rem', fontWeight: 800 }}>{job.type}</span>
                      <span className="small text-muted">{new Date(job.postedAt?.toDate()).toLocaleDateString()}</span>
                    </div>
                    <h2 className="h3 fw-bold mb-3">{job.title}</h2>
                    <p className="text-muted mb-0" style={{ maxWidth: '600px' }}>{job.description}</p>
                  </div>
                  <button 
                    onClick={() => navigate(`/apply?id=${job.id}`)}
                    className="neu-button px-4 py-2"
                    style={{ minWidth: '140px', justifyContent: 'center' }}
                  >
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="neu-card p-5 text-center">
            <h2 className="h4 mb-4" style={{ color: "var(--text-primary)", fontWeight: 700 }}>
              No Active Transmissions
            </h2>
            <p className='text-muted lead mb-0'>
               We are currently operating at peak capacity. Please check back when new bandwidth becomes available.
            </p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Careers | Join the Agency" />
