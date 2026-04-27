import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import LoadingScreen from "../components/LoadingScreen"
import * as styles from "../styles/sass/game-dev.module.scss"
import { FiCpu, FiZap, FiLayers, FiUsers, FiTerminal } from "react-icons/fi"

const GameDevPage = () => {
  const [isLoaded, setIsLoaded] = React.useState(false)

  React.useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])
  const upcomingGames = [
    {
      name: "Shadow Strike 2D",
      genre: "Martial Arts Brawler",
      status: "Beta Testing",
      desc: "Inspired by classic shadow combat, featuring high-fidelity animations and a revolutionary physics-based 2D combat system.",
      engine: "Unity 2D / Custom Physics",
      image: "shadow_strike_2d_1777202349604.png"
    },
    {
      name: "Apex Simulator: Pro Series",
      genre: "Realistic Simulation",
      status: "Early Access",
      desc: "The ultimate simulation experience. Master Cars, Buses, Trucks, and even Planes in a massive, open-world environment.",
      engine: "Unreal Engine 5",
      image: "simulator_collection_1777202566856.png"
    },
    {
      name: "Neon Crush",
      genre: "Modern Match-3 Puzzle",
      status: "Released",
      desc: "A vibrant, fast-paced puzzle game with glossy aesthetics and satisfying chain reactions. The next evolution of mobile puzzles.",
      engine: "React Native / PixiJS",
      image: "candy_crush_modern_1777202551107.png"
    },
    {
      name: "Constructor Pro: JCB Edition",
      genre: "Construction Sim",
      status: "Prototype",
      desc: "Operate heavy machinery with precision. From excavators to cranes, experience the most realistic construction sim ever made.",
      engine: "Custom Engine / PhysX",
      image: "simulator_collection_1777202566856.png"
    },
    {
      name: "Pixel Plumber",
      genre: "Modern Retro Platformer",
      status: "In Development",
      desc: "A love letter to 8-bit classics with a modern twist. Explore vibrant worlds with pixel-perfect precision and dynamic lighting.",
      engine: "Godot Engine",
      image: "pixel_plumber_1777202366586.png"
    },
    {
      name: "Shadow Protocol",
      genre: "Tactical Stealth Action",
      status: "Closed Alpha",
      desc: "An immersive sim set in a sprawling megacity where every choice ripples through the narrative. Master the art of infiltration.",
      engine: "Unreal Engine 5",
      image: "upcoming_game_concept_1777202011275.png"
    },
    {
      name: "Nova: AI Companion",
      genre: "AI Simulation",
      status: "Prototype",
      desc: "Pushing the boundaries of NPCs. Features a dynamic emotional engine powered by LLMs for truly unique interactions.",
      engine: "Custom LLM / Unreal 5",
      image: "ai_companion_1777202383894.png"
    },
    {
      name: "Classic Suite",
      genre: "Casual Collection",
      status: "Released",
      desc: "A premium collection of classics: Snake, Solitaire, and Chess, reimagined with modern graphics and global leaderboards.",
      engine: "JavaScript / Canvas",
      image: "shadow_strike_2d_1777202349604.png"
    }
  ]

  const [formSubmitted, setFormSubmitted] = React.useState(false)

  const handleApply = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <>
      <LoadingScreen isLoaded={isLoaded} />
      <Layout>
      <Seo title="Game Development | Vanguard Studios" />
      
      <main className={styles.gameDevPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <img 
            src="/game_dev_hero_1777201994078.png" 
            alt="Cyberpunk City" 
            className={styles.heroImage} 
          />
          <div className={styles.heroContent}>
            <span className={styles.badge}>Next-Gen Gaming</span>
            <h1 className={styles.title}>Forging New <br/>Realities</h1>
            <p className={styles.subtitle}>
              Pushing the boundaries of interactive entertainment through cutting-edge engineering and visionary storytelling. 
              From retro-inspired platformers to AI-driven companions.
            </p>
            <div className="d-flex justify-content-center gap-4">
              <button className="neu-button" style={{ background: 'var(--accent-primary)', color: '#000', border: 'none' }}>
                Join The Studio
              </button>
            </div>
          </div>
        </section>

        {/* Development Philosophy */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionTitle}>
              <span className={styles.small}>Our Tech Stack</span>
              <h2 className={styles.large}>Built for Performance</h2>
            </div>
            
            <div className="row g-4 mt-2">
              {[
                { icon: <FiCpu />, title: "Low-Level Optimization", text: "Direct memory management and SIMD optimizations for maximum frame consistency." },
                { icon: <FiZap />, title: "Real-time Raytracing", text: "Implementing state-of-the-art global illumination and reflections using DX12/Vulkan." },
                { icon: <FiLayers />, title: "Modular Architecture", text: "Highly decoupled systems allowing for rapid iteration and scalable game worlds." }
              ].map((item, i) => (
                <div key={i} className="col-md-4">
                  <div className="neu-card p-4 h-100">
                    <div style={{ fontSize: '2rem', color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>{item.icon}</div>
                    <h4 className="mb-3">{item.title}</h4>
                    <p className="text-secondary small">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Games */}
        <section className={styles.section} style={{ background: 'rgba(0,0,0,0.2)' }}>
          <div className="container">
            <div className={styles.sectionTitle}>
              <span className={styles.small}>Upcoming Titles</span>
              <h2 className={styles.large}>In The Pipeline</h2>
            </div>
            
            <div className={styles.gamesGrid}>
              {upcomingGames.map((game, i) => (
                <div key={i} className={styles.gameCard}>
                  <div className={styles.gameImageWrapper}>
                    <span className={styles.status}>{game.status}</span>
                    <img 
                      src={`/${game.image}`} 
                      alt={game.name} 
                      className={styles.gameImage} 
                    />
                  </div>
                  <div className={styles.gameInfo}>
                    <span className={styles.genre}>{game.genre}</span>
                    <h3 className={styles.name}>{game.name}</h3>
                    <p className={styles.desc}>{game.desc}</p>
                    <div className={styles.meta}>
                      <span className={styles.engine}>
                        <FiTerminal /> {game.engine}
                      </span>
                      <span>TBD</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beta Tester Program */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.betaSection}>
              <div className={styles.betaContent}>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Join The Frontline</span>
                <h2 className={styles.betaTitle}>Become a <br/>Beta Tester</h2>
                <p className={styles.betaText}>
                  Shape the future of our games. Get early access to internal builds, provide feedback directly to developers, 
                  and earn exclusive in-game rewards.
                </p>
                
                {formSubmitted ? (
                  <div className="neu-card p-4 text-center" style={{ borderColor: 'var(--accent-primary)', background: 'rgba(var(--accent-primary-rgb), 0.1)' }}>
                    <h4 style={{ color: 'var(--accent-primary)' }}>Application Received!</h4>
                    <p className="mb-0 small">Thank you for your interest. Our recruitment team will review your application and contact you soon.</p>
                  </div>
                ) : (
                  <form className={styles.formGroup} onSubmit={handleApply}>
                    <input type="email" placeholder="Enter your email address" required />
                    <button type="submit">Apply Now</button>
                  </form>
                )}

                <div className="mt-4 d-flex gap-4 text-muted small">
                  <span className="d-flex align-items-center gap-2"><FiUsers /> 1,200+ Active Testers</span>
                  <span className="d-flex align-items-center gap-2"><FiLayers /> Multiple Platforms</span>
                </div>
              </div>
              <div className="position-relative overflow-hidden">
                <img 
                  src="/beta_tester_cta_1777202029618.png" 
                  alt="Beta Access" 
                  className={styles.betaImage} 
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
    </>
  )
}

export default GameDevPage
