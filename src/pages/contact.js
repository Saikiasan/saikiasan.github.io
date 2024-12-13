import React from "react"
import Layout from "../components/Layout"
import * as s from "../styles/contact.module.css"

export default function Contact() {
  return (
    <Layout>
      <div className="container-fluid">
        <h1 style={{ color: "var(--o-60)" }}>Contact</h1>

        <div className={s.contactFormContainer}>
          <form>
            <label>
              Name:
              <input type="text" placeholder="Enter your name" required />
            </label>
            <label>
              Email:
              <input type="email" placeholder="Enter your email" required />
            </label>
            <label>
              Message:
              <textarea placeholder="Write your message"></textarea>
            </label>
            <button className="btn" type="submit">
              let it rain
            </button>
          </form>
        </div>

        <div className={s.mapDiv}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.69232459831983!2d95.7755697466052!3d27.92803691414651!2m3!1f352.36185921479955!2f27.47165337293109!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x373e53a012d61579%3A0xf657ad8af7abadaa!2sMellokits%20Palace!5e1!3m2!1sen!2sin!4v1734076673755!5m2!1sen!2sin"
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
