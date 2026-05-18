// Framer Motion variants — opacity is intentionally excluded from whileInView variants
// to prevent Framer Motion from ever setting elements invisible during scroll.
export const fadeInUp = {
  initial: { y: 40 },
  animate: { y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

export const fadeInDown = {
  initial: { y: -30 },
  animate: { y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const fadeInLeft = {
  initial: { x: -50 },
  animate: { x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const fadeInRight = {
  initial: { x: 50 },
  animate: { x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const scaleIn = {
  initial: { scale: 0.85 },
  animate: { scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
}

export const staggerItem = {
  initial: { y: 30 },
  animate: { y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export const cardVariants = {
  initial: { y: 30, scale: 0.96 },
  animate: {
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 },
  },
}

export const pageTransition = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3, ease: 'easeIn' } },
}

export const navMenuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  open: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.35, ease: 'easeOut' },
  },
}

export const heroTextVariants = {
  initial: { y: 60 },
  animate: (i) => ({
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

// GSAP helpers
export function splitIntoChars(el) {
  const words = el.textContent.trim().split(' ')
  el.innerHTML = words
    .map(
      (word) =>
        `<span class="inline-block overflow-hidden"><span class="char inline-block">${word}</span></span>`,
    )
    .join(' ')
  return el.querySelectorAll('.char')
}

export const gsapCounterConfig = (trigger) => ({
  duration: 2,
  ease: 'power2.out',
  snap: { textContent: 1 },
  scrollTrigger: {
    trigger,
    start: 'top 85%',
    once: true,
  },
})
