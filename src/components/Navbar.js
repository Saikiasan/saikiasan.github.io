import * as React from "react"
import { Link } from "gatsby"
import { useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive"
import { useTranslation } from "react-i18next"
import { FiSun, FiMoon } from "react-icons/fi"

const Header = ({ siteTitle }) => {
  const { t, i18n } = useTranslation()
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const navbarLinks = [
    { t: t('common.nav.home'), u: "/" },
    { t: t('common.nav.about'), u: "/about" },
    { t: t('common.nav.projects'), u: "/projects" },
    { t: t('common.nav.careers'), u: "/careers" },
    { t: t('common.nav.blogs'), u: "/blogs" },
    { t: t('common.nav.contact'), u: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'as' : 'en'
    i18n.changeLanguage(newLang)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <nav
      className={`fixed-top w-100 d-flex justify-content-center px-3 py-3`}
      style={{
        zIndex: 1000,
        transition: 'var(--transition-slow)',
      }}
    >
      <div
        className="neu-card d-flex align-items-center justify-content-between px-4 py-2"
        style={{
          width: '100%',
          maxWidth: '1200px',
          height: '64px',
          background: 'var(--bg-primary)',
          boxShadow: isScrolled ? 'var(--nm-outset)' : 'none',
          transition: 'var(--transition-norm)',
        }}
      >
        <Link to="/" className="navbar-brand m-0" style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.04em', color: 'var(--text-primary)' }}>
          {siteTitle}
        </Link>

        {isMobile ? (
          <div className="d-flex align-items-center gap-3">
            <button 
              onClick={toggleLanguage}
              className="neu-button px-2 py-1"
              style={{ fontSize: '0.7rem', padding: '0.4rem 0.8rem', borderRadius: '8px', color: 'var(--text-primary)' }}
            >
              {i18n.language === 'en' ? 'AS' : 'EN'}
            </button>

            <button 
              onClick={toggleTheme}
              className="neu-button"
              style={{ width: '40px', height: '40px', padding: 0, justifyContent: 'center', borderRadius: '8px', color: 'var(--text-primary)' }}
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="btn p-0 border-0"
              style={{ width: '40px', height: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '6px', alignItems: 'flex-end' }}
            >
              <span style={{ width: '24px', height: '1px', background: 'var(--text-primary)', transition: '0.3s', transform: isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></span>
              <span style={{ width: isOpen ? '0' : '18px', height: '1px', background: 'var(--text-primary)', transition: '0.2s', opacity: isOpen ? 0 : 1 }}></span>
              <span style={{ width: '24px', height: '1px', background: 'var(--text-primary)', transition: '0.3s', transform: isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></span>
            </button>
            
            {isOpen && (
              <div 
                className="neu-card position-fixed start-0 w-100 px-4 py-5"
                style={{ 
                  top: '84px', 
                  zIndex: 999,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  background: 'var(--bg-primary)',
                  animation: 'fadeInUp 0.4s forwards'
                }}
              >
                {navbarLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.u}
                    onClick={() => setIsOpen(false)}
                    className="text-capitalize h5 m-0"
                    activeStyle={{ color: 'var(--accent-primary)' }}
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.t}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="d-flex align-items-center gap-4">
            <div className="d-flex gap-4">
              {navbarLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.u}
                  className="text-capitalize"
                  style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}
                  activeStyle={{ color: 'var(--accent-primary)' }}
                >
                  {link.t}
                </Link>
              ))}
            </div>
            
            <button 
              onClick={toggleLanguage}
              className="neu-button"
              style={{ fontSize: '0.7rem', padding: '0.4rem 0.8rem', borderRadius: '8px', color: 'var(--text-primary)' }}
            >
              {i18n.language === 'en' ? 'AS' : 'EN'}
            </button>

            <button 
              onClick={toggleTheme}
              className="neu-button"
              style={{ width: '40px', height: '40px', padding: 0, justifyContent: 'center', borderRadius: '8px', color: 'var(--text-primary)' }}
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
