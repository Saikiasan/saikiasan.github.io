import React from "react"
import Layout from "../components/Layout"
import { FaFaceAngry } from "react-icons/fa6"

export default function Careers() {
  return (
    <Layout>
      <h1>Careers</h1>
      <FaFaceAngry
        style={{
          width: "300px",
          height: "300px",
        }}
      />
      <p>
        I'm always looking for new opportunities to grow and improve my skills.
        If you're interested in working with me, please don't hesitate to reach
        out.
      </p>
      <p>
        I'm currently open to full-time or part-time roles in the following
        areas:
      </p>
      <ul>
        <li>Frontend development</li>
        <li>Backend development</li>
        <li>Product management</li>
        <li>UX/UI design</li>
      </ul>
      <p>
        Please feel free to reach out to me at saikia.kim[at]gmail.com or via
        LinkedIn at https://www.linkedin.com/in/saikia-kim-5b899b1b2/
      </p>
      <p>Thank you for considering me for your position.</p>
    </Layout>
  )
}
