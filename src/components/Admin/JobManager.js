import React, { useState, useEffect } from "react"
import { db } from "../../firebase"
import { 
  collection, 
  onSnapshot,
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  serverTimestamp, 
  orderBy, 
  query 
} from "firebase/firestore"

export default function JobManager() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingJob, setEditingJob] = useState(null)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "Full-time",
    active: true
  })

  useEffect(() => {
    const q = query(collection(db, "jobs"), orderBy("postedAt", "desc"))
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const jobsList = querySnapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      }))
      setJobs(jobsList)
      setLoading(false)
    }, (error) => {
      console.error("Error listening to jobs:", error)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editingJob) {
        await updateDoc(doc(db, "jobs", editingJob.id), {
          ...formData,
          updatedAt: serverTimestamp()
        })
      } else {
        await addDoc(collection(db, "jobs"), {
          ...formData,
          postedAt: serverTimestamp()
        })
      }
      setFormData({ title: "", description: "", type: "Full-time", active: true })
      setEditingJob(null)
    } catch (error) {
      console.error("Error saving job:", error)
    }
  }

  const handleEdit = (job) => {
    setEditingJob(job)
    setFormData({
      title: job.title,
      description: job.description,
      type: job.type,
      active: job.active
    })
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this job listing?")) {
      try {
        await deleteDoc(doc(db, "jobs", id))
      } catch (error) {
        console.error("Error deleting job:", error)
      }
    }
  }

  return (
    <div className="row g-4">
      <div className="col-lg-4">
        <div className="neu-card p-4 sticky-top" style={{ top: "140px" }}>
          <h2 className="h4 fw-bold mb-4">{editingJob ? "Edit Job" : "Post New Job"}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="small text-muted mb-2">Job Title</label>
              <input 
                type="text" 
                className="neu-input" 
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                required
                placeholder="e.g. AI Solutions Architect"
              />
            </div>
            <div className="mb-3">
              <label className="small text-muted mb-2">Job Description</label>
              <textarea 
                className="neu-input" 
                rows="4"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                required
                placeholder="Detailed job requirements..."
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="small text-muted mb-2">Employment Type</label>
              <select 
                className="neu-input"
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
              >
                <option value="Full-time">Full-time</option>
                <option value="Contract">Contract</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
                <option value="Commission Based">Commission Based</option>
              </select>
            </div>
            <div className="mb-4 d-flex align-items-center gap-2">
              <input 
                type="checkbox" 
                id="active"
                checked={formData.active}
                onChange={(e) => setFormData({...formData, active: e.target.checked})}
              />
              <label htmlFor="active" className="small text-muted">Active Listing</label>
            </div>
            <div className="d-flex gap-2">
              <button type="submit" className="neu-button flex-grow-1 justify-content-center">
                {editingJob ? "Update Listing" : "Publish Listing"}
              </button>
              {editingJob && (
                <button 
                  type="button" 
                  onClick={() => { setEditingJob(null); setFormData({title:"", description:"", type:"Full-time", active:true}); }}
                  className="neu-button text-muted"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="col-lg-8">
        <div className="d-flex flex-column gap-3">
          {loading ? (
            <div className="text-center py-5">Loading jobs...</div>
          ) : jobs.length > 0 ? (
            jobs.map(job => (
              <div key={job.id} className="neu-card p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h3 className="h5 fw-bold mb-1">{job.title}</h3>
                    <div className="d-flex gap-2">
                      <span className="badge rounded-pill bg-light text-dark small">{job.type}</span>
                      <span className={`badge rounded-pill ${job.active ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'}`}>
                        {job.active ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <button onClick={() => handleEdit(job)} className="btn btn-sm btn-outline-primary">Edit</button>
                    <button onClick={() => handleDelete(job.id)} className="btn btn-sm btn-outline-danger">Delete</button>
                  </div>
                </div>
                <p className="text-muted small mb-0 text-truncate" style={{ maxWidth: "500px" }}>{job.description}</p>
              </div>
            ))
          ) : (
            <div className="neu-card p-5 text-center text-muted">
              No job listings found. Post your first one!
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
