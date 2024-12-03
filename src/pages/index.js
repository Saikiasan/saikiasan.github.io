import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import * as style from "../styles/home.module.css"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const skills = [
  {
    n: "web development",
    d: "89%",
  },
  {
    n: "app development",
    d: "5+",
  },
  {
    n: "data analysis",
    d: "70%",
  },
  {
    n: "machine learning",
    d: "65%",
  },
  {
    n: "cyber security",
    d: "80%",
  },
]

const BannerSkills = () => {
  return (
    <div className={style.bannerSkillCards}>
      {/* <div className=""> */}
      {skills.map((skill, index) => (
        <div className={`card ${style.skillCard}`}>
          <div className={`card-body ${style.body}`}>
            <span className={style.bannerSkillData}>{skill.d}</span>
            <span className={style.bannerSkillName}>{skill.n}</span>
          </div>
        </div>
      ))}
      <div className="card">
        <div className={`card-body ${style.bannerKnowMoreCardBody}`}>
          <i className={`bi bi-arrow-up-right ${style.bannerKnowMoreIcon}`}></i>
          <span className={style.bannerKnowMoreLink}>know more</span>
        </div>
      </div>
    </div>
    // </div>
  )
}

const IndexPage = ({ data }) => {
  const image = getImage(data.file.childImageSharp)
  return (
    <Layout>
      <div className="container-fluid">
        <div className={style.section1}>
          <div className={`card ${style.banner}`}>
            <div className="card-body">
              <h1 className={style.bannerShowcaseH1}>
                Crafting Digital Experiences
              </h1>
              <h2 className={style.bannerShowcaseH2}>
                programming new experiences
              </h2>
              {/* image in here ... */}
              <GatsbyImage image={image} className={style.animImg} />
            </div>
          </div>
          <div className={`card ${style.profileImg}`}>
            <div className="card-body">
              <img src="" alt="description" className="img-fluid" />
            </div>
          </div>
          <BannerSkills />
        </div>

        <div className="card">
          <div className="card-body">
            <h3>Join us in making the new youthTech</h3>
            <p>
              Someone simply had a thought, "What if at least the minorities of
              the human race get all together and create something that can
              bring forth a new era of job?". With a lot of people being jobless
              and having no means of getting a secure income in life, forget the
              luxury, we can't even afford a days worth of food.
            </p>
            <p>
              People just see messages like this and laugh their asses off and
              continue with their daily life.
            </p>
            <p>
              This behaviour in us is the proof of the small mindset in
              majorities of the people. Since ancient times, we have been living
              like this. With no care for the general survival of the species
              but living for ourselves, we have long forgotten the task we were
              given.
            </p>
            <p>
              All life forms in this planet have a purpose, hence carrying out
              the pre-destined purpose in life. Until facing a major threat,
              nobody would care for things like this. We don't focus on the main
              scenarios.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export const query = graphql`
  query {
    file(relativePath: { eq: "asa.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`

export default IndexPage
