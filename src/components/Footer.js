import * as React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="mt-5 pb-5 px-4">
      <div className="container-fluid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="neu-card p-5">
          <div className="row g-5">
            <div className="col-lg-5">
              <h2 className="display-6 fw-bold mb-4" style={{ letterSpacing: '-0.04em' }}>Let's architect <br/> the future.</h2>
              <p className="text-muted mb-5" style={{ maxWidth: '350px' }}>
                Building strategic cognitive systems and premium digital experiences for the next generation of business.
              </p>
              <div className="d-flex gap-3">
                <a href="https://github.com/saikiacodes" target="_blank" rel="noopener noreferrer" className="neu-button" style={{ width: '45px', height: '45px', padding: 0, justifyContent: 'center', borderRadius: '50%' }}>
                  <FaGithub />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="neu-button" style={{ width: '45px', height: '45px', padding: 0, justifyContent: 'center', borderRadius: '50%' }}>
                  <FaLinkedin />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="neu-button" style={{ width: '45px', height: '45px', padding: 0, justifyContent: 'center', borderRadius: '50%' }}>
                  <FaXTwitter />
                </a>
              </div>
            </div>
            
            <div className="col-lg-7">
              <div className="row">
                <div className="col-md-4 mb-4 mb-md-0">
                  <h5 className="mb-4 fw-bold small text-uppercase" style={{ color: 'var(--text-primary)', letterSpacing: '0.1em' }}>Navigation</h5>
                  <ul className="list-unstyled d-flex flex-column gap-2">
                    <li><Link to="/" className="text-muted small hover-accent">Home</Link></li>
                    <li><Link to="/about" className="text-muted small hover-accent">About</Link></li>
                    <li><Link to="/projects" className="text-muted small hover-accent">Archive</Link></li>
                    <li><Link to="/blogs" className="text-muted small hover-accent">Intelligence</Link></li>
                  </ul>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                  <h5 className="mb-4 fw-bold small text-uppercase" style={{ color: 'var(--text-primary)', letterSpacing: '0.1em' }}>Venture</h5>
                  <ul className="list-unstyled d-flex flex-column gap-2">
                    <li><Link to="/careers" className="text-muted small hover-accent">Careers</Link></li>
                    <li><Link to="/contact" className="text-muted small hover-accent">Consultancy</Link></li>
                    <li><Link to="/policy/privacy" className="text-muted small hover-accent">Privacy</Link></li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h5 className="mb-4 fw-bold small text-uppercase" style={{ color: 'var(--text-primary)', letterSpacing: '0.1em' }}>Contact</h5>
                  <p className="text-muted small mb-1">saikiacodes@gmail.com</p>
                  <p className="text-muted small">Based in Assam, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-5 pt-5" style={{ borderTop: '1px solid var(--border-color)' }}>
            <div className="d-flex justify-content-between align-items-center">
                <p className="text-muted small mb-0">&copy; {year} Saikia Codes. All rights reserved.</p>
                <div className="neu-card-inset px-3 py-1 small text-muted" style={{ fontSize: '0.7rem', borderRadius: '4px' }}>System v4.0.0-neu</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
