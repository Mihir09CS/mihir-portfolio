import { motion } from 'framer-motion';
import { fadeUpVariants } from './SectionWrapper';

const SectionTitle = ({ eyebrow, title, subtitle, align = 'center', headingId }) => {
  const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center';
  const width = align === 'left' ? 'max-w-3xl' : 'max-w-2xl';

  return (
    <div className={`mb-14 flex flex-col ${alignment}`}>
      {eyebrow ? (
        <motion.span variants={fadeUpVariants} className="section-tag block mb-4">
          {eyebrow}
        </motion.span>
      ) : null}
      <motion.h2
        variants={fadeUpVariants}
        id={headingId}
        className={`section-title text-white ${width}`}
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          variants={fadeUpVariants}
          className={`mt-5 text-base leading-7 text-white/60 sm:text-lg ${width}`}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
};

export default SectionTitle;
