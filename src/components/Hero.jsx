import { motion } from 'framer-motion'
import Typed from 'react-typed'
import './styles/Hero.css'

export const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className="hero-title">
            Hi, I'm <span>Akshay Manjunath Bhat</span>
          </h1>
          <div className="hero-subtitle">
            <Typed
              strings={[
                'DevOps Engineer',
                'Cloud Specialist',
                'Full Stack Developer',
                'Go Enthusiast'
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </div>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Building scalable cloud solutions and efficient DevOps pipelines
          </motion.p>
        </motion.div>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.a
            href="#projects"
            className="cta-btn primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="cta-btn secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          className="scroll-down"
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop'
          }}
        >
          <span>Scroll Down</span>
          <div className="arrow"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}