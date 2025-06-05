import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './styles/About.css'

export const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  })

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About <span>Me</span>
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="image-wrapper">
              <img 
                src="/assets/images/akshay.jpg" 
                alt="Akshay Manjunath Bhat" 
              />
              <div className="image-border"></div>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>DevOps & Cloud Engineer</h3>
            <p>
              I am very passionate about software engineering, with a strong focus on DevOps and cloud computing. 
              I am mastering the Go language and am especially interested in cloud management for development purposes. 
              I also enjoy building web pages and developing websites. My goal is to create efficient, scalable, 
              and reliable solutions for modern software challenges.
            </p>
            
            <div className="about-details">
              <div className="detail-item">
                <span>Name:</span>
                <span>Akshay Manjunath Bhat</span>
              </div>
              <div className="detail-item">
                <span>Email:</span>
                <span>akshaybhats2003@gmail.com</span>
              </div>
              <div className="detail-item">
                <span>From:</span>
                <span>Bengaluru, India</span>
              </div>
            </div>

            <div className="about-actions">
              <a 
                href="/akshay.pdf" 
                download 
                className="download-btn"
              >
                Download CV
              </a>
              <a href="#contact" className="contact-btn">
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}