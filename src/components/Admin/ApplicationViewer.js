import React, { useState, useEffect } from "react"
import { db } from "../../firebase"
import { collection, getDocs, orderBy, query, doc, deleteDoc } from "firebase/firestore"

export default function ApplicationViewer() {
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchApplications()
  }, [])

  const fetchApplications = async () => {
    setLoading(true)
    try {
      const q = query(collection(db, "applications"), orderBy("submittedAt", "desc"))
      const querySnapshot = await getDocs(q)
      setApplications(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    } catch (error) {
      console.error("Error fetching applications:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm("Remove this application from the database?")) {
      try {
        await deleteDoc(doc(db, "applications", id))
        fetchApplications()
      } catch (error) {
        console.error("Error deleting application:", error)
      }
    }
  }

  return (
    <div className="d-flex flex-column gap-4">
      {loading ? (
        <div className="text-center py-5">
           <div className="spinner-border text-primary" role="status"></div>
           <p className="mt-3 text-muted">Retrieving candidate transmissions...</p>
        </div>
      ) : applications.length > 0 ? (
        applications.map((app) => (
          <div key={app.id} className="neu-card p-4 p-md-5">
            <div className="d-flex flex-column flex-md-row justify-content-between gap-4">
              <div className="flex-grow-1">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span className="badge rounded-pill bg-primary px-3 py-2" style={{ fontSize: '0.7rem' }}>
                    {app.jobTitle || 'General Application'}
                  </span>
                  <span className="small text-muted">
                    {app.submittedAt?.toDate().toLocaleString()}
                  </span>
                </div>
                
                <h3 className="h4 fw-bold mb-1">{app.name}</h3>
                <p className="text-primary small fw-bold mb-4">{app.email}</p>
                
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <h4 className="small text-muted text-uppercase fw-bold mb-2" style={{ letterSpacing: '0.1em' }}>Contact</h4>
                    <p className="mb-1 small"><strong>Phone:</strong> {app.phone}</p>
                    {app.whatsapp && <p className="mb-0 small"><strong>WhatsApp:</strong> {app.whatsapp}</p>}
                  </div>
                  <div className="col-sm-6">
                    <h4 className="small text-muted text-uppercase fw-bold mb-2" style={{ letterSpacing: '0.1em' }}>Socials</h4>
                    {app.portfolio && (
                      <p className="mb-1 small">
                        <strong>Portfolio:</strong> <a href={app.portfolio} target="_blank" rel="noreferrer" className="text-primary text-decoration-none">{app.portfolio}</a>
                      </p>
                    )}
                    {app.instagram && (
                      <p className="mb-1 small">
                        <strong>Instagram:</strong> <a href={app.instagram} target="_blank" rel="noreferrer" className="text-primary text-decoration-none">{app.instagram}</a>
                      </p>
                    )}
                    {app.otherSocial && (
                      <p className="mb-0 small">
                        <strong>Other:</strong> <a href={app.otherSocial} target="_blank" rel="noreferrer" className="text-primary text-decoration-none">{app.otherSocial}</a>
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="neu-card-inset p-4 mb-4">
                  <h4 className="small text-muted text-uppercase fw-bold mb-2" style={{ letterSpacing: '0.1em' }}>Pitch</h4>
                  <p className="mb-0" style={{ whiteSpace: 'pre-wrap' }}>{app.pitch}</p>
                </div>

                <div className="d-flex flex-wrap gap-3">
                  <a 
                    href={app.resumeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="neu-button px-4 py-2 text-decoration-none"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download Resume
                  </a>
                  <button 
                    onClick={() => handleDelete(app.id)}
                    className="neu-button text-danger border-danger px-4"
                  >
                    Archive Application
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="neu-card p-5 text-center text-muted">
           <h2 className="h4 mb-3">No Candidate Transmissions</h2>
           <p className="mb-0">All applications will appear here once submitted by potential recruits.</p>
        </div>
      )}
    </div>
  )
}
