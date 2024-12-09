import { Link } from "gatsby"
import React from "react"
// import "../styles/footer.css"
import * as s from "../styles/footer.module.css"
import { BiLogoFacebookSquare } from "react-icons/bi"
import {
  BsArrowUpRight,
  BsArrowUpRightCircleFill,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs"
import { useMediaQuery } from "react-responsive"

const socialMediaLinks = [
  {
    name: "Facebook",
    icon: <BiLogoFacebookSquare className={s.socialCardIcon} />,
    cap: "Share posts on Facebook",
    url: "https://www.facebook.com/opseeker.saikia",
  },
  {
    name: "Instagram",
    icon: <BsInstagram className={s.socialCardIcon} />,
    cap: "Follow on Instagram",
    url: "https://www.instagram.com/saikia.code/",
  },
  {
    name: "LinkedIn",
    icon: <BsLinkedin className={s.socialCardIcon} />,
    cap: "Connect on LinkedIn",
    url: "https://www.linkedin.com/in/ankit-saikia-17a48623b/",
  },
  {
    name: "WhatsApp",
    icon: <BsWhatsapp className={s.socialCardIcon} />,
    cap: "Contact on WhatsApp",
    url: "https://wa.me/918257068226?text=Hello%0AI%20saw%20your%20site%20and%20wanted%20to%20know%20more",
  },
]

const navigationLinks = {
  site: [
    { name: "why me?", url: "/why-us" },
    { name: "About", url: "/about" },
    { name: "Testimonials", url: "/testimonials" },
    { name: "FAQ", url: "/faq" },
  ],
  services: [
    { name: "Web Development", url: "/web-development" },
    { name: "App Development", url: "/mobile-app-development" },
    { name: "Digital solutions", url: "/digital-marketing" },
    { name: "UI - UX design", url: "/web-design" },
  ],
  projects: [
    { name: "C.T College", url: "/projects/ctctsk" },
    { name: "AtomyKeson", url: "/projects/atomy-keson" },
    { name: "keson template", url: "/projects/keson-templates-android" },
    { name: "indigain", url: "/projects/indigain" },
  ],
  blogs: [
    { name: "Gatsby SSG", url: "/blog-1" },
    { name: "PHP UI", url: "/blog-2" },
    { name: "Static SPA", url: "/blog-3" },
    { name: "Flutter UI", url: "/blog-4" },
  ],
}

const SocialCards = () => {
  return (
    <div className={s.socialCardContainer}>
      {socialMediaLinks.map((link, index) => (
        <div
          className={`card btn justify-content-center align-items-center ${s.socialCard} ${s.transitionAll500ms}`}
          key={index}
        >
          <div className={`card-body ${s.socialCardBody}`}>
            <div className="top justify-content-between align-items-center">
              {link.icon}
              <Link
                to={link.url}
                target="_blank"
                className={s.socialCardLink}
                style={{ width: "40px", height: "40px" }}
              >
                {/* <i className="bi bi-arrow-up-right"></i> */}
                <BsArrowUpRight className={s.arrowIcon} />
              </Link>
            </div>
            <div className="details">
              <h5 className={s.socialCardTitle}>{link.name}</h5>
              <div className={s.socialCardText}>{link.cap}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const MobileSocialCards = () => {
  return (
    <div className={s.mSocialCardContainer}>
      {socialMediaLinks.map((link, index) => (
        <Link to={link.url} target="_blank" className={s.mSocialCardLink}>
          {link.icon}
        </Link>
      ))}
    </div>
  )
}

const Navigation = () => {
  return (
    <div className={s.navigationContainer}>
      <div className={`card ${s.navigationCard}`}>
        <div className="card-body row justify-content-center">
          <div className={`col ${s.navigationColumn}`}>
            <h5 className={`card-title ${s.navigationListTitle}`}>Home</h5>
            <ul className="nav flex-column">
              {navigationLinks.site.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    to={link.url}
                    className={`nav-link ${s.navigationLink}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={`col ${s.navigationColumn}`}>
            <h5 className={`card-title ${s.navigationListTitle}`}>Services</h5>
            <ul className="nav flex-column">
              {navigationLinks.services.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    to={link.url}
                    className={`nav-link ${s.navigationLink}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={`col ${s.navigationColumn}`}>
            <h5 className={`card-title ${s.navigationListTitle}`}>Projects</h5>
            <ul className="nav flex-column">
              {navigationLinks.projects.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    to={link.url}
                    className={`nav-link ${s.navigationLink}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={`col ${s.navigationColumn}`}>
            <h5 className={`card-title ${s.navigationListTitle}`}>Blogs</h5>
            <ul className="nav flex-column">
              {navigationLinks.blogs.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    to={link.url}
                    className={`nav-link ${s.navigationLink}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
const MobileNavigation = () => {
  return (
    <div className={s.mNavigationContainer}>
      <div className={`card ${s.mNavigationCard}`}>
        <div className="card-body d-flex justify-content-center flex-wrap">
          <div className={` ${s.mNavigationColumn}`}>
            <h5 className={`${s.mNavigationListTitle}`}>Home</h5>
            <ul className="nav flex-column">
              {navigationLinks.site.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    to={link.url}
                    className={`nav-link ${s.mNavigationLink}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={` ${s.mNavigationColumn}`}>
            <h5 className={`${s.mNavigationListTitle}`}>Services</h5>
            <ul className="nav flex-column">
              {navigationLinks.services.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    to={link.url}
                    className={`nav-link ${s.mNavigationLink}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={` ${s.mNavigationColumn}`}>
            <h5 className={`${s.mNavigationListTitle}`}>Projects</h5>
            <ul className="nav flex-column">
              {navigationLinks.projects.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    to={link.url}
                    className={`nav-link ${s.mNavigationLink}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={` ${s.mNavigationColumn}`}>
            <h5 className={`${s.mNavigationListTitle}`}>Blogs</h5>
            <ul className="nav flex-column">
              {navigationLinks.blogs.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    to={link.url}
                    className={`nav-link ${s.mNavigationLink}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
const Newsletter = () => {
  return (
    <div className={s.newsLetterContainer}>
      <div className={`card ${s.newsLetterCard}`}>
        <div className="card-body">
          <h5 className="lead" style={{ color: "var(--g-80)" }}>
            Newsletter
          </h5>
          <div className="d-flex justify-content-between">
            <h4 className="text-uppercase" style={{ fontFamily: "Avalon" }}>
              subscribe to my newsletters
            </h4>
            <form className="d-inline-flex">
              <input
                type="email"
                placeholder="Enter your email"
                className={s.newsLetterInput}
              />
              <button
                type="submit"
                className={`btn rounded-circle ${s.newsLetterLink} ${s.transitionAll500ms}`}
              >
                <BsArrowUpRight
                  className={s.arrowIcon}
                  style={{ color: "var(--o-80)" }}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
const MobileNewsletter = () => {
  return (
    <div className={s.mNewsLetterContainer}>
      <div className={`card ${s.mNewsLetterCard}`}>
        <div className="card-body">
          <h5 className={s.mNewsLetterTitle}>Newsletter</h5>
          <h4 className={s.mNewsLetterText}>subscribe to my newsletters</h4>
          <form className={s.mNewsLetterForm}>
            <input
              type="email"
              placeholder="Enter your email"
              className={s.mNewsLetterInput}
            />
            <button
              type="submit"
              className={`btn rounded-circle ${s.mNewsLetterLink} ${s.transitionAll500ms}`}
            >
              <BsArrowUpRight
                className={s.arrowIcon}
                style={{
                  color: "var(--o-80)",
                }}
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
const Copyright = siteAuthor => {
  return (
    <div className={s.copyright}>
      <div className="card">
        <div className={`card-body ${s.copyrightCardBody}`}>
          <p className={s.left}>
            <i className="bi bi-c-circle"></i> {new Date().getFullYear()}{" "}
            {siteAuthor.author} All rights reserved.
          </p>
          <p className={s.right}>
            <Link to="/tnc" className="tnc">
              Terms & Conditions
            </Link>
            <div className="vr mx-2"></div>
            <Link to="/privacy-policy" className="tnc">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
const MobileCopyright = siteAuthor => {
  return (
    <div className={s.copyright}>
      <div className="card">
        <div className={`card-body ${s.mCopyrightCardBody}`}>
          <p className={s.mCopyrightTxt}>
            &copy; {new Date().getFullYear()} {siteAuthor.author}. All rights
            reserved.
          </p>
          <div className={s.mCopyrightLinkContainer}>
            <Link to="/tnc" className={s.mCopyrightLinks}>
              Terms & Conditions
            </Link>
            <hr />
            <Link to="/privacy-policy" className={s.mCopyrightLinks}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Footer({ siteAuthor }) {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  return isMobile ? (
    <MobileFooter siteAuthor={siteAuthor} />
  ) : (
    <PcFooter siteAuthor={siteAuthor} />
  )
}

const MobileFooter = ({ siteAuthor }) => {
  return (
    <footer className={s.mFooter}>
      <div
        className="card"
        style={{
          padding: "12px",
          background: "var(--o-60)",
        }}
      >
        <div className="card-body">
          <h2 className={s.mPromoCardTitle}>Still thinking?</h2>
          <p className={`lead ${s.mPromoCardText}`}>
            Turn your ideas into reality. You are just a call away anyways. Why
            hesitate, lets work together, achieve a great successful result.
          </p>
          <Link
            to="/contact/"
            className={`text-uppercase btn w-100 ${s.customBtn_12px}  ${s.transitionAll500ms} d-inline-flex justify-content-center`}
            style={{
              background: "var(--d-06)",
              color: "var(--0-90)",
            }}
          >
            Get in touch
            <BsArrowUpRight
              className={s.arrowIcon}
              style={{ position: "relative", marginLeft: "12px" }}
            />
          </Link>
        </div>
      </div>
      <div className={s.mGrid_1}>
        <MobileSocialCards />
        <MobileNavigation />
        <div className={s.mGrid_2}>
          <MobileNewsletter />
          <MobileCopyright author={siteAuthor} />
        </div>
      </div>
    </footer>
  )
}

const PcFooter = ({ siteAuthor }) => {
  return (
    <footer className={s.footer}>
      <div
        className="card"
        style={{
          padding: "24px",
          background: "var(--o-60)",
        }}
      >
        <div className="card-body">
          <h2 className={s.promoCardTitle}>ready to upgrade your business?</h2>
          <p className={`lead ${s.promoCardText}`}>
            Take the first step towards digital success with me.
          </p>
          <Link
            to="/contact/"
            className={`text-uppercase btn ${s.customBtn_12px} end-0 bottom-0 position-absolute ${s.transitionAll500ms}`}
            style={{
              background: "var(--d-06)",
              color: "var(--0-90)",
              marginRight: "calc(24px * 1.5)",
              marginBottom: "calc(24px * 1.5)",
            }}
          >
            Get in touch &nbsp;&nbsp;
            <BsArrowUpRightCircleFill
              className={s.arrowIcon}
              style={{ position: "relative" }}
            />
          </Link>
        </div>
      </div>
      <div className={s.grid_1}>
        <SocialCards />
        <Navigation />
        <div className={s.grid_2}>
          <Newsletter />
          <Copyright author={siteAuthor} />
        </div>
      </div>
    </footer>
  )
}
