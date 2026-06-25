import { motion } from 'framer-motion';
import { useInView } from '../hooks';

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

export const SectionHeader = ({ tag, title, subtitle, headingId }) => {
  return (
    <div className="text-center mb-16">
      <motion.span
        variants={fadeUpVariants}
        className="section-tag block mb-4"
      >
        {tag}
      </motion.span>
      <motion.h2
        variants={fadeUpVariants}
        id={headingId}
        className="section-title text-white mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUpVariants}
          className="text-[#B3B3B3] max-w-2xl mx-auto text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

const SectionWrapper = ({ children, id, className = '' }) => {
  const [ref, inView] = useInView(0.1);

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={`section-padding relative ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
