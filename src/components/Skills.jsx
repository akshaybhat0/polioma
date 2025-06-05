import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '../utils/constants'
import './styles/Skills.css'

export const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My <span>Skills</span>
        </motion.h2>

        <motion.div
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((category) => (
            <motion.div
              key={category.name}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.name}</h3>
              </div>
              <div className="skills-list">
                {category.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <span>{skill.name}</span>
                    <div className="skill-progress">
                      <motion.div
                        className="progress-bar"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}