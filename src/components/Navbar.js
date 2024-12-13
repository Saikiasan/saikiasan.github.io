import * as React from "react"
import { Link } from "gatsby"
import { useState } from "react"
import "../styles/menu_hamburger.css"
import "../styles/menutab.css"
import { useMediaQuery } from "react-responsive"

const Plate = () => {
  const [isActive, setIsActive] = useState(false)
  const toggleActive = () => {
    setIsActive(prev => !prev)
  }
  return (
    <div
      className={`plate plate2 ${isActive ? "active" : ""}`}
      onClick={toggleActive}
    >
      <svg
        className="burger"
        version="1.1"
        height="100"
        width="100"
        viewBox="0 0 100 100"
      >
        <path
          className="line line1"
          d="M 50,65 H 70 C 70,65 75,65.198488 75,70.762712 C 75,73.779026 74.368822,78.389831 66.525424,78.389831 C 22.092231,78.389831 -18.644068,-30.508475 -18.644068,-30.508475"
        />
        <path
          className="line line2"
          d="M 50,35 H 70 C 70,35 81.355932,35.300135 81.355932,25.635593 C 81.355932,20.906215 78.841706,14.830508 72.881356,14.830508 C 35.648232,14.830508 -30.508475,84.322034 -30.508475,84.322034"
        />
        <path
          className="line line3"
          d="M 50,50 H 30 C 30,50 12.288136,47.749959 12.288136,60.169492 C 12.288136,67.738339 16.712974,73.305085 40.677966,73.305085 C 73.791674,73.305085 108.47458,-19.915254 108.47458,-19.915254"
        />
        <path
          className="line line4"
          d="M 50,50 H 70 C 70,50 81.779661,50.277128 81.779661,36.607372 C 81.779661,28.952694 77.941689,25 69.067797,25 C 39.95532,25 -16.949153,119.91525 -16.949153,119.91525"
        />
        <path
          className="line line5"
          d="M 50,65 H 30 C 30,65 17.79661,64.618439 17.79661,74.152543 C 17.79661,80.667556 25.093813,81.355932 38.559322,81.355932 C 89.504001,81.355932 135.59322,-21.186441 135.59322,-21.186441"
        />
        <path
          className="line line6"
          d="M 50,35 H 30 C 30,35 16.525424,35.528154 16.525424,24.152542 C 16.525424,17.535987 22.597755,13.559322 39.40678,13.559322 C 80.617882,13.559322 94.067797,111.01695 94.067797,111.01695"
        />
      </svg>
      <svg
        className="x"
        version="1.1"
        height="100"
        width="100"
        viewBox="0 0 100 100"
      >
        <path className="line" d="M 34,32 L 66,68" />
        <path className="line" d="M 66,32 L 34,68" />
      </svg>
    </div>
  )
}

const navbarLinks = [
  {
    t: "home",
    u: "/",
  },
  {
    t: "about",
    u: "/about",
  },
  {
    t: "projects",
    u: "/projects",
  },
  {
    t: "careers",
    u: "/careers",
  },
  {
    t: "blogs",
    u: "/blogs",
  },
  {
    t: "contact",
    u: "/contact",
  },
]

const Header = ({ siteTitle }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        margin: "none",
        padding: "0 0",
      }}
    >
      <div
        className="container-fluid"
        style={{ margin: "0px 0px", padding: "12px" }}
      >
        <div className="navbar-brand">{siteTitle}</div>
        {isMobile ? (
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar_t"
            aria-controls="navbar_t"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Plate />
          </button>
        ) : (
          ""
        )}
        <div className="collapse navbar-collapse " id="navbar_t">
          {/* <form
            className="d-flex align-items-center justify-content-center ms-lg-auto me-lg-0 visually-hidden"
            style={{ marginRight: "30px" }}
            id="search-home"
            role="search"
          >
            <i className="fa fa-search"></i>
            <input
              type="search"
              aria-label="Search"
              id="searchInput"
              className="form-control rounded-pill"
              placeholder="Search"
              maxlength="20"
            />
          </form> */}
          {isMobile ? (
            <ul
              className="navbar-nav"
              style={{ gap: "12px", margin: "24px 0px 12px 0px" }}
            >
              {navbarLinks.map((link, index) => (
                <li className="nav-item px-4">
                  <Link
                    className="nav-link text-capitalize"
                    activeClassName="active"
                    to={link.u}
                  >
                    {link.t}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="navbar-nav ms-lg-auto mb-2 mb-lg-0">
              {navbarLinks.map((link, index) => (
                <li className="nav-item">
                  <Link
                    className="nav-link text-capitalize"
                    activeClassName="active"
                    to={link.u}
                  >
                    {link.t}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
