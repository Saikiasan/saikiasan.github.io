import React, { useState } from "react"
import Layout from "../components/Layout"
import * as s from "../styles/contact.module.css"
import { db } from "../firebase"
import { collection, addDoc } from "firebase/firestore"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("Sending...")
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        timestamp: new Date()
      })
      setStatus("Message sent successfully!")
      setName("")
      setEmail("")
      setMessage("")
    } catch (error) {
      console.error("Error adding document: ", error)
      setStatus("Failed to send message. Please try again.")
    }
  }

  return (
    <Layout>
      <div className="container-fluid">
        <h1 style={{ color: "var(--o-60)" }}>Contact</h1>

        <div className={s.contactFormContainer}>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
              Email:
              <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
              Message:
              <textarea placeholder="Write your message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            </label>
            <button className="btn" type="submit">
              let it rain
            </button>
            {status && <p style={{ marginTop: "12px", color: "var(--o-65)", textAlign: "center" }}>{status}</p>}
          </form>
        </div>

        <div className={s.mapDiv}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.8761136777835!2d95.77263087458618!3d27.929107876056154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x373e53005db75f2b%3A0xc2136a2075681b22!2sSaikia%20Codes!5e1!3m2!1sen!2sin!4v1736691114136!5m2!1sen!2sin"
            style={{ border: "0" }}
            className={s.map}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}
