import { motion, useReducedMotion } from 'framer-motion';

const TechCard = ({ name, fullName, icon: Icon, color, category }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.li
      whileHover={reduceMotion ? undefined : { y: -3, rotateX: 4, rotateY: -4, scale: 1.015 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="compact-tech-item"
    >
      <article
        tabIndex={0}
        aria-label={`${fullName || name} in ${category}`}
        className="compact-tech-card group"
      >
        <span
          className="compact-tech-icon"
          style={{ color, boxShadow: `0 10px 30px ${color}22` }}
          aria-hidden="true"
        >
          <Icon size={18} />
        </span>
        <span className="compact-tech-name">{name}</span>
      </article>
    </motion.li>
  );
};

export default TechCard;
