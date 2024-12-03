// src/pages/about.js
import * as React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/about-page.module.css"

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Web Design & Development",
  "UI/UX Design",
  "PHP",
  "Java",
  "Python",
  "Flutter",
  "Android App Development",
  "Frontend & Backend Development",
  "Database Management & Firebase",
  "Custom-Solutions Development",
]

export default function About() {
  return (
    <Layout>
      <div
        className={`container-fluid text-light`}
        style={{ paddingTop: "12px", marginBottom: "12px" }}
      >
        <h1 className={styles.pageTitle}>About Me</h1>
        <div className={`${styles.container}`}>
          <div className={`card ${styles.description}`}>
            <div className={`card-body`}>
              <p className={`${styles.descriptionText}`}>
                Hello! I’m <b>Ankit Saikia</b>, a passionate and dedicated
                developer with a focus on frontend technologies. I completed my
                Bachelor of Computer Applications (BCA) in 2023 and have since
                been honing my skills in various areas of software
                development...
              </p>
            </div>
          </div>

          <div className={`card ${styles.skills}`}>
            <div className={`card-body ${styles.p2}`}>
              <h2 className={styles.itemHeading1}>My Skills</h2>
              <p className="lead" style={{ color: "var(--g-50)" }}>
                Throughout my journey, I’ve gained expertise in a range of
                programming languages and technologies:
              </p>
              <div className={`${styles.skillItemList}`}>
                {skills.map(skill => {
                  return (
                    <div key={skill} className={styles.skillItem}>
                      <span>{skill}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <h2>What I Do</h2>
        <p>
          I mainly focus on frontend development, designing clean, user-friendly
          interfaces with a strong emphasis on responsiveness and performance. I
          enjoy creating visually appealing layouts that provide seamless user
          experiences. While I specialize in frontend, I also have a solid
          understanding of backend development and enjoy working on full-stack
          projects.
        </p>

        <h2>My Approach</h2>
        <p>
          Along with coding daily and working on personal projects, I make sure
          to stay updated with the latest trends in technology. I also have a
          keen interest in graphic design and enjoy visual storytelling through
          UI/UX design. I believe in continuously improving my skills and
          solving real-world problems through code.
        </p>

        <h2>Other Interests</h2>
        <p>
          Apart from coding, I have a variety of hobbies. I love working with
          electronics and exploring electrical systems. I also have a good range
          of computer skills, though I’m not into video editing or
          photoshopping. These diverse interests help me stay creative and
          expand my knowledge beyond just software development.
        </p>

        <h2>About My Hometown</h2>
        <p>
          I’m from Chapakhowa, Lakhimpur, Assam (Pin: 786157), a place that has
          always inspired me. The scenic beauty and tranquility of the area
          foster my creative thinking and problem-solving skills, which are
          reflected in my work.
        </p>
      </div>
    </Layout>
  )
}
