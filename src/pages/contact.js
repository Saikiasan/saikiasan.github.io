import React, { useState } from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { db } from "../firebase"
import { collection, addDoc } from "firebase/firestore"
import { motion } from "framer-motion"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("Initiating neural transmission...")
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        timestamp: new Date()
      })
      setStatus("Message synced to the cloud successfully.")
      setName("")
      setEmail("")
      setMessage("")
    } catch (error) {
      console.error("Error adding document: ", error)
      setStatus("Transmission failed. Please retry or email directly.")
    }
  }

  return (
    <Layout>
      <div className="container-fluid px-4" style={{ maxWidth: '1000px', margin: '0 auto', paddingTop: '150px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-5">
            <span className="small text-uppercase fw-bold mb-3 d-block" style={{ letterSpacing: '0.3em', color: 'var(--accent-primary)' }}>Direct Connection</span>
            <h1 className="display-3 fw-bold">Get In Touch</h1>
            <p className="text-muted lead mt-4 mx-auto" style={{ maxWidth: '600px' }}>
              Have a project in mind? Let's build the future together.
            </p>
          </div>

          <div className="row g-5">
            <div className="col-lg-7">
              <div className="neu-card p-5">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="small text-uppercase fw-bold mb-2 d-block" style={{ color: 'var(--text-muted)' }}>Name</label>
                    <input 
                      type="text" 
                      className="w-100 neu-card-inset border-0 p-3"
                      style={{ background: 'var(--bg-primary)', outline: 'none', color: 'var(--text-primary)' }}
                      placeholder="Your Identity" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      required 
                    />
                  </div>
                  <div className="mb-4">
                    <label className="small text-uppercase fw-bold mb-2 d-block" style={{ color: 'var(--text-muted)' }}>Email</label>
                    <input 
                      type="email" 
                      className="w-100 neu-card-inset border-0 p-3"
                      style={{ background: 'var(--bg-primary)', outline: 'none', color: 'var(--text-primary)' }}
                      placeholder="Transmission Address" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required 
                    />
                  </div>
                  <div className="mb-5">
                    <label className="small text-uppercase fw-bold mb-2 d-block" style={{ color: 'var(--text-muted)' }}>Message</label>
                    <textarea 
                      className="w-100 neu-card-inset border-0 p-3"
                      style={{ background: 'var(--bg-primary)', outline: 'none', minHeight: '150px', resize: 'none', color: 'var(--text-primary)' }}
                      placeholder="Describe the objective..." 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)} 
                      required 
                    ></textarea>
                  </div>
                  
                  <button 
                    className="neu-button w-100 justify-content-center" 
                    type="submit"
                    style={{ fontWeight: 700, fontSize: '1rem' }}
                  >
                    Sync Message
                  </button>
                  
                  {status && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-4 small text-center"
                      style={{ color: status.includes("failed") ? "var(--accent-secondary)" : "var(--accent-primary)" }}
                    >
                      {status}
                    </motion.p>
                  )}
                </form>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="neu-card p-2 h-100 overflow-hidden" style={{ minHeight: '400px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.8761136777835!2d95.77263087458618!3d27.929107876056154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x373e53005db75f2b%3A0xc2136a2075681b22!2sSaikia%20Codes!5e1!3m2!1sen!2sin!4v1736691114136!5m2!1sen!2sin"
                  style={{ border: "0", width: '100%', height: '100%', borderRadius: '15px' }}
                  className="theme-map"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact | Sync with Saikia" />
