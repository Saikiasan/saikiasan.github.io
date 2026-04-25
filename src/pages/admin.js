import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import { auth, googleProvider, db, functions } from "../firebase"
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth"
import { httpsCallable } from "firebase/functions"
import JobManager from "../components/Admin/JobManager"
import ApplicationViewer from "../components/Admin/ApplicationViewer"
import { motion, AnimatePresence } from "framer-motion"
import ClientOnly from "../components/ClientOnly"

const ADMIN_SUBDOMAIN = process.env.GATSBY_ADMIN_SUBDOMAIN;

export default function AdminDashboard() {
  const [user, setUser] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("jobs")
  const [isWrongDomain, setIsWrongDomain] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && 
        window.location.hostname !== 'localhost' && 
        window.location.hostname !== ADMIN_SUBDOMAIN) {
      setIsWrongDomain(true)
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // 1. Check if user already has the admin claim
        const idTokenResult = await user.getIdTokenResult()
        if (idTokenResult.claims.admin) {
          setIsAdmin(true)
        } else {
          // 2. Try to set the claim if it matches the server-side UID
          try {
            const checkAdmin = httpsCallable(functions, 'checkAndSetAdmin')
            const result = await checkAdmin()
            if (result.data.isAdmin) {
              // Force token refresh to get the new claim
              await user.getIdToken(true)
              setIsAdmin(true)
            }
          } catch (error) {
            console.error("Admin verification failed:", error)
          }
        }
      } else {
        setIsAdmin(false)
      }
      setUser(user)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.error("Login failed:", error)
      alert("Authentication failed. Check console.")
    }
  }

  const handleLogout = () => signOut(auth)

  if (isWrongDomain) {
    return (
      <Layout>
        <div className="container py-5 text-center" style={{ paddingTop: "150px" }}>
          <h1 className="display-1 fw-bold">404</h1>
          <p className="text-muted">The requested transmission could not be found on this frequency.</p>
        </div>
      </Layout>
    )
  }

  if (loading) {
    return (
      <Layout>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </Layout>
    )
  }

  if (!user) {
    return (
      <Layout>
        <div className="container py-5 text-center" style={{ paddingTop: "150px" }}>
          <div className="neu-card p-5 d-inline-block mx-auto" style={{ maxWidth: "500px" }}>
            <h1 className="h3 fw-bold mb-4">Command Center Access</h1>
            <p className="text-muted mb-5">Restricted area. Please authenticate to continue.</p>
            <button onClick={handleLogin} className="neu-button px-5 py-3 w-100 justify-content-center">
              Sign in with Google
            </button>
          </div>
        </div>
      </Layout>
    )
  }

  if (!user || !isAdmin) {
    return (
      <Layout>
        <div className="container py-5 text-center" style={{ paddingTop: "150px" }}>
          <div className="neu-card p-5 d-inline-block mx-auto" style={{ maxWidth: "500px" }}>
            <h1 className="h3 fw-bold mb-4">Unauthorized</h1>
            <p className="text-muted mb-4">Your ID is not in the allowed administrator list.</p>
            <button onClick={handleLogout} className="neu-button px-4 py-2">Logout</button>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="container-fluid px-4 pb-5" style={{ paddingTop: "120px", maxWidth: "1200px" }}>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5 gap-3">
          <div>
            <h1 className="h2 fw-bold mb-0">Agency Command</h1>
            <div className="d-flex align-items-center gap-2 mt-1">
              <p className="text-muted small mb-0">{user.email}</p>
              <span className="text-muted small">•</span>
              <a href="https://saikiacoode.online" className="text-primary small text-decoration-none">View Site</a>
            </div>
          </div>
          <div className="d-flex gap-3">
            <div className="neu-card-inset d-flex p-1 rounded-pill">
              <button 
                onClick={() => setActiveTab("jobs")}
                className={`btn rounded-pill px-4 ${activeTab === 'jobs' ? 'bg-primary text-white shadow' : 'text-muted'}`}
                style={{ border: 'none', transition: 'all 0.3s' }}
              >
                Jobs
              </button>
              <button 
                onClick={() => setActiveTab("applications")}
                className={`btn rounded-pill px-4 ${activeTab === 'applications' ? 'bg-primary text-white shadow' : 'text-muted'}`}
                style={{ border: 'none', transition: 'all 0.3s' }}
              >
                Applications
              </button>
            </div>
            <button onClick={handleLogout} className="neu-button px-3 py-2 text-danger border-danger">
              Logout
            </button>
          </div>
        </div>

        <ClientOnly>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "jobs" ? <JobManager /> : <ApplicationViewer />}
            </motion.div>
          </AnimatePresence>
        </ClientOnly>
      </div>
    </Layout>
  )
}
