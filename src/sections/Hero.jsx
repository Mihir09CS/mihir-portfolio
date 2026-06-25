import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { HiDownload } from 'react-icons/hi';
import { personalInfo } from '../data';
import { useMediaQuery, usePrefersReducedMotion } from '../hooks';

const HeroScene = lazy(() => import('../components/HeroScene'));

const socialLinks = [
  { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const showHeroScene = useMediaQuery('(min-width: 1024px)') && !prefersReducedMotion;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />
      <div className="blob-1 top-12 -left-48 opacity-50" aria-hidden="true" />
      <div className="blob-2 bottom-0 -right-28 opacity-45" aria-hidden="true" />

      {showHeroScene && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-28 pb-16">
        <div className="max-w-3xl">
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.45 }}
            className="section-tag mb-5"
          >
            Open to internships and entry-level frontend or full stack roles
          </motion.p>

          <motion.h1
            id="hero-heading"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.55, delay: 0.08 }}
            className="font-display font-extrabold leading-[0.98] text-white mb-5"
            style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}
          >
            Mihir Parida
          </motion.h1>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.5, delay: 0.15 }}
            className="mb-6 flex flex-wrap items-center gap-3 text-sm md:text-base"
          >
            <span className="inline-flex rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1.5 font-mono text-blue-200">
              {personalInfo.title}
            </span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="text-[#B8C0D4] font-mono">{personalInfo.subtitle}</span>
          </motion.div>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.55, delay: 0.22 }}
            className="max-w-2xl text-lg leading-8 text-[#C3CAD9] mb-8"
          >
            {personalInfo.summary} I build user interfaces that are easy to use, performant, and ready for real-world products.
          </motion.p>

          <motion.ul
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.55, delay: 0.28 }}
            className="mb-10 flex flex-wrap gap-3"
            aria-label="Key strengths"
          >
            {personalInfo.recruiterHighlights.map((item) => (
              <li key={item} className="skill-pill text-sm">
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.55, delay: 0.34 }}
            className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mb-10"
          >
            <Link to="projects" smooth duration={600} offset={-80}>
              <motion.button
                type="button"
                className="btn-primary min-h-12 justify-center"
                whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              >
                <span>View Projects</span>
              </motion.button>
            </Link>

            <motion.a
              href={personalInfo.resume}
              download
              className="btn-outline min-h-12 justify-center"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
            >
              <HiDownload size={16} />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.55, delay: 0.42 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/35">
              Connect
            </span>
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-[#B3B3B3] hover:text-white hover:border-blue-500/40 transition-all duration-200"
                whileHover={prefersReducedMotion ? undefined : { scale: 1.04, y: -2 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {!prefersReducedMotion && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.45 }}
            aria-hidden="true"
          >
            <span className="text-xs font-mono text-white/30 tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            >
              <FiArrowDown className="text-blue-400/60" size={16} />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
