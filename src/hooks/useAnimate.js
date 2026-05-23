import { useInView } from 'react-intersection-observer'
export function useAnimate(opts = {}) {
  const [ref, inView] = useInView({ threshold: 0.12, triggerOnce: true, rootMargin: '0px 0px -44px 0px', ...opts })
  return [ref, inView]
}
