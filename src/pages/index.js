import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import * as style from "../styles/home.module.css"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsBicycle, BsFillArrowUpRightCircleFill } from "react-icons/bs"
import { IconContext } from "react-icons"

const skills = [
  {
    n: "BCA",
    d: "2023",
  },
  {
    n: "projects",
    d: "50+",
  },
  {
    n: "photoshop",
    d: "40+",
  },
  {
    n: "electrical",
    d: ">5",
  },
  {
    n: "designing concepts",
    d: "20+",
  },
]

const services = [
  {
    icon: <i className="bi bi-laptop" />,
    name: "Web Development",
    description:
      "We specialize in building high-quality websites using modern technologies and best practices.",
    price: "1,300",
    link: "/services/web-development",
  },
  {
    icon: <i class="bi bi-phone"></i>,
    name: "App Development",
    description:
      "We develop high-quality mobile applications using React Native, Flutter, or Ionic.",
    price: "1,500",
    link: "/services/app-development",
  },
  {
    icon: <i class="bi bi-briefcase"></i>,
    name: "Digital Solutions",
    description:
      "We help businesses transform their digital presence by designing and implementing solutions.",
    price: "2,000",
    link: "/services/digital-solutions",
  },
  {
    icon: <i class="bi bi-cup-straw"></i>,
    name: "UI - UX design",
    description:
      "We help businesses create visually appealing and user-friendly interfaces.",
    price: "1,000",
    link: "/services/ui-ux-design",
  },
  {
    icon: <i class="bi bi-bar-chart"></i>,
    name: "Data Analysis",
    description:
      "We help businesses make data-driven decisions by analyzing and interpreting data.",
    price: "1,200",
    link: "/services/data-analysis",
  },
  {
    icon: <i class="bi bi-robot"></i>,
    name: "Machine Learning",
    description:
      "We help businesses create advanced machine learning models and algorithms.",
    price: "1,500",
    link: "/services/machine-learning",
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
      <Link to="/about/services" className="card text-decoration-none">
        <div className={`card-body ${style.bannerKnowMoreCardBody}`}>
          <i className={`bi bi-arrow-up-right ${style.bannerKnowMoreIcon}`}></i>
          <span className={style.bannerKnowMoreLink}>know more</span>
        </div>
      </Link>
    </div>
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
              {/* <GatsbyImage image={image} className={style.animImg} /> */}
            </div>
          </div>
          <div className={`card ${style.profileImg}`}>
            <div className="card-body">
              <GatsbyImage image={image} className={style.animImg} />
            </div>
          </div>
          <BannerSkills />
        </div>

        <div className={`${style.service}`}>
          <div className={style.card} style={{ flex: 1, alignItems: "center" }}>
            <h2
              style={{
                textTransform: "uppercase",
                color: "var(--o-80)",
                fontFamily: "Archive",
              }}
            >
              my services
            </h2>
          </div>

          <div
            style={{
              flex: "1 1 100%",
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              alignItems: "stretch",
              justifyContent: "start",
            }}
          >
            {services.map(service => (
              <div
                className={style.card}
                style={{ flex: "1 1 calc(50% - 12px)" }}
              >
                <div
                  className={style.serviceFlex}
                  style={{
                    marginBottom: "24px",
                    justifyContent: "space-between",
                  }}
                >
                  <div className={style.serviceFlex}>
                    <div className={style.serviceIcon}>{service.icon}</div>
                    <h3>{service.name}</h3>
                  </div>
                  <Link to={service.link} className={style.serviceLink}>
                    <i
                      className={`bi bi-arrow-up-right ${style.serviceLinkIcon}`}
                    ></i>
                    <span className={style.serviceLinkSpan}>Book a call</span>
                  </Link>
                </div>
                <p className={style.serviceDescription}>
                  {service.description}
                </p>
                <span className={style.servicePrice}>
                  Starts from ₹{service.price}
                </span>
              </div>
            ))}
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
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: WEBP
        )
      }
    }
  }
`

export default IndexPage
