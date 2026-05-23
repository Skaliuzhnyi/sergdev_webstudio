import { motion } from 'framer-motion'
import { useAnimate } from '../hooks/useAnimate'

const ease = [0.16, 1, 0.3, 1]

export function FadeUp({ children, delay = 0, style = {}, as = 'div', ...props }) {
  const [ref, inView] = useAnimate()
  const Tag = motion[as] || motion.div
  return (
    <Tag ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: .72, delay, ease }} style={style} {...props}>
      {children}
    </Tag>
  )
}

export function FadeLeft({ children, delay = 0, style = {} }) {
  const [ref, inView] = useAnimate()
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: -28 }} animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: .7, delay, ease }} style={style}>
      {children}
    </motion.div>
  )
}

export function FadeRight({ children, delay = 0, style = {} }) {
  const [ref, inView] = useAnimate()
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: 28 }} animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: .7, delay, ease }} style={style}>
      {children}
    </motion.div>
  )
}

export function ScaleIn({ children, delay = 0, style = {} }) {
  const [ref, inView] = useAnimate()
  return (
    <motion.div ref={ref} initial={{ opacity: 0, scale: .92 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: .65, delay, ease }} style={style}>
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, style = {}, stagger = 0.1 }) {
  const [ref, inView] = useAnimate()
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: stagger } } }} style={style}>
      {children}
    </motion.div>
  )
}

export const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: .65, ease } },
}
