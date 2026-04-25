import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { db, storage } from "../firebase"
import { doc, getDoc, collection, addDoc, serverTimestamp } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { motion } from "framer-motion"

const ApplyPage = ({ location }) => {
  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    portfolio: "",
    instagram: "",
    otherSocial: "",
    pitch: "",
  })
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState("")
  const [isUploading, setIsUploading] = useState(false)

  const params = new URLSearchParams(location.search)
  const jobId = params.get("id")

  useEffect(() => {
    if (!jobId) {
      navigate("/careers")
      return
    }

    const fetchJob = async () => {
      try {
        const docRef = doc(db, "jobs", jobId)
        const docSnap = await getDoc(docRef)
        
        if (docSnap.exists()) {
          setJob({ id: docSnap.id, ...docSnap.data() })
        } else {
          console.error("No such job!")
          navigate("/careers")
        }
      } catch (error) {
        console.error("Error fetching job:", error)
        navigate("/careers")
      } finally {
        setLoading(false)
      }
    }

    fetchJob()
  }, [jobId])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file) {
      setStatus("Please upload your resume.")
      return
    }

    setIsUploading(true)
    setStatus("Syncing credentials...")

    try {
      // 1. Upload Resume to Storage
      const storageRef = ref(storage, `resumes/${job.id}/${Date.now()}_${file.name}`)
      await uploadBytes(storageRef, file)
      const resumeUrl = await getDownloadURL(storageRef)

      // 2. Save Application to Firestore
      await addDoc(collection(db, "applications"), {
        jobId: job.id,
        jobTitle: job.title,
        ...formData,
        resumeUrl,
        status: "pending",
        submittedAt: serverTimestamp(),
      })

      setStatus("Application transmitted successfully. Stand by for feedback.")
      setTimeout(() => {
        navigate("/careers")
      }, 3000)
    } catch (error) {
      console.error("Submission error:", error)
      setStatus("Transmission failed. Please check your bandwidth and retry.")
    } finally {
      setIsUploading(false)
    }
  }

  if (loading) {
    return (
      <Layout>
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </Layout>
    )
  }

  if (!job) return null

  return (
    <Layout>
      <div className="container py-5" style={{ marginTop: '100px' }}>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="neu-card p-4 p-md-5"
            >
              <div className="mb-5">
                <Link to="/careers" className="text-muted text-decoration-none small mb-3 d-inline-block">
                  &larr; Back to Opportunities
                </Link>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span className="badge rounded-pill px-3 py-2" style={{ background: 'var(--accent-gradient)', color: '#000', fontSize: '0.65rem', fontWeight: 800 }}>{job.type}</span>
                </div>
                <h1 className="display-5 fw-bold mb-3">{job.title}</h1>
                <p className="lead text-muted">{job.description}</p>
              </div>

              <div className="row g-5">
                <div className="col-lg-7">
                  <h3 className="h4 fw-bold mb-4">Application Form</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="small text-uppercase fw-bold mb-2 d-block text-muted">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        className="w-100 neu-card-inset border-0 p-3"
                        style={{ background: 'var(--bg-primary)', outline: 'none', color: 'var(--text-primary)' }}
                        placeholder="Your Identity"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mb-4">
                      <label className="small text-uppercase fw-bold mb-2 d-block text-muted">Email Address</label>
                      <input 
                         type="email" 
                         name="email"
                         required
                         className="w-100 neu-card-inset border-0 p-3"
                         style={{ background: 'var(--bg-primary)', outline: 'none', color: 'var(--text-primary)' }}
                         placeholder="Transmission Address"
                         value={formData.email}
                         onChange={handleInputChange}
                       />
                    </div>

                    <div className="row g-4 mb-4">
                      <div className="col-md-6">
                        <label className="small text-uppercase fw-bold mb-2 d-block text-muted">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          className="w-100 neu-card-inset border-0 p-3"
                          style={{ background: 'var(--bg-primary)', outline: 'none', color: 'var(--text-primary)' }}
                          placeholder="+91..."
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="small text-uppercase fw-bold mb-2 d-block text-muted">WhatsApp (Optional)</label>
                        <input 
                          type="tel" 
                          name="whatsapp"
                          className="w-100 neu-card-inset border-0 p-3"
                          style={{ background: 'var(--bg-primary)', outline: 'none', color: 'var(--text-primary)' }}
                          placeholder="Same as phone?"
                          value={formData.whatsapp}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="small text-uppercase fw-bold mb-2 d-block text-muted">Portfolio / LinkedIn (Optional)</label>
                      <input 
                        type="url" 
                        name="portfolio"
                        className="w-100 neu-card-inset border-0 p-3"
                        style={{ background: 'var(--bg-primary)', outline: 'none', color: 'var(--text-primary)' }}
                        placeholder="Digital Footprint"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="row g-4 mb-4">
                      <div className="col-md-6">
                        <label className="small text-uppercase fw-bold mb-2 d-block text-muted">Instagram (Optional)</label>
                        <input 
                          type="url" 
                          name="instagram"
                          className="w-100 neu-card-inset border-0 p-3"
                          style={{ background: 'var(--bg-primary)', outline: 'none', color: 'var(--text-primary)' }}
                          placeholder="instagram.com/..."
                          value={formData.instagram}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="small text-uppercase fw-bold mb-2 d-block text-muted">Other Social (Optional)</label>
                        <input 
                          type="url" 
                          name="otherSocial"
                          className="w-100 neu-card-inset border-0 p-3"
                          style={{ background: 'var(--bg-primary)', outline: 'none', color: 'var(--text-primary)' }}
                          placeholder="Twitter, Behance, etc."
                          value={formData.otherSocial}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="small text-uppercase fw-bold mb-2 d-block text-muted">Resume (PDF / DOCX)</label>
                      <div className="neu-card-inset p-3 position-relative" style={{ background: 'var(--bg-primary)' }}>
                        <input 
                          type="file" 
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          required
                          className="opacity-0 position-absolute top-0 start-0 w-100 h-100"
                          style={{ cursor: 'pointer' }}
                        />
                        <div className="text-center py-2">
                          <span className="small text-muted">
                            {file ? file.name : "Click to select or drag file here"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="small text-uppercase fw-bold mb-2 d-block text-muted">Brief Pitch</label>
                      <textarea 
                        name="pitch"
                        className="w-100 neu-card-inset border-0 p-3"
                        style={{ background: 'var(--bg-primary)', outline: 'none', minHeight: '150px', resize: 'none', color: 'var(--text-primary)' }}
                        placeholder="Why should we sync? Describe your vision for this role..."
                        value={formData.pitch}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isUploading}
                      className="neu-button w-100 justify-content-center py-3 fw-bold"
                    >
                      {isUploading ? "Transmitting..." : "Submit Application"}
                    </button>

                    {status && (
                      <p className={`mt-4 text-center small ${status.includes("failed") ? "text-danger" : "text-success"}`}>
                        {status}
                      </p>
                    )}
                  </form>
                </div>

                <div className="col-lg-5">
                  <div className="sticky-top" style={{ top: '120px' }}>
                    <div className="mb-5">
                      <h3 className="h4 fw-bold mb-4">Terms & Conditions</h3>
                      <div className="small text-muted" style={{ lineHeight: '1.8' }}>
                        <p>By submitting this application, you agree to the following:</p>
                        <ul>
                          <li>The information provided is accurate and truthful.</li>
                          <li>Your resume and portfolio will be stored securely for evaluation purposes.</li>
                          <li>We may contact you via the provided email for interview scheduling.</li>
                          <li>We respect intellectual property; please do not share confidential information from previous employers.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mb-5">
                      <h3 className="h4 fw-bold mb-4">Privacy Policy</h3>
                      <div className="small text-muted" style={{ lineHeight: '1.8' }}>
                        <p>We prioritize your data sovereignty:</p>
                        <ul>
                          <li>We do not sell your personal information to third parties.</li>
                          <li>Your data is used exclusively for recruitment within Saikia Codes.</li>
                          <li>You can request deletion of your data at any time by contacting us.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="neu-card p-4" style={{ background: 'var(--bg-secondary)', border: 'none' }}>
                      <h4 className="h6 fw-bold mb-3 text-uppercase" style={{ letterSpacing: '0.1em' }}>Secure Transmission</h4>
                      <p className="small text-muted mb-0">
                        This application is encrypted and transmitted directly to our secure Command Center. No intermediary data scraping occurs during this process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ApplyPage

export const Head = () => <Seo title="Apply Now | Join the Agency" />
