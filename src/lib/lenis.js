import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenisInstance = null

export function initLenis() {
  if (lenisInstance) return lenisInstance

  lenisInstance = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.85,
    touchMultiplier: 2,
    infinite: false,
  })

  lenisInstance.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => lenisInstance.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)

  return lenisInstance
}

export function destroyLenis() {
  if (lenisInstance) {
    lenisInstance.destroy()
    lenisInstance = null
  }
}

export function getLenis() {
  return lenisInstance
}
