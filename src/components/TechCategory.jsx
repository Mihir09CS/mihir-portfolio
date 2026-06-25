import { motion } from 'framer-motion';
import TechCard from './TechCard';
import { fadeUpVariants } from './SectionWrapper';

const TechCategory = ({ title, description, items, accent }) => {
  return (
    <motion.article
      variants={fadeUpVariants}
      className="compact-category-card glass-card"
      style={{ '--category-accent': accent }}
    >
      <div className="compact-category-top">
        <div>
          <h3 className="compact-category-title">{title}</h3>
          {description ? <p className="compact-category-copy">{description}</p> : null}
        </div>
        <span className="compact-category-count">{items.length}</span>
      </div>

      <ul className="compact-tech-grid" aria-label={`${title} technologies`}>
        {items.map((item) => (
          <TechCard key={`${title}-${item.name}`} category={title} {...item} />
        ))}
      </ul>
    </motion.article>
  );
};

export default TechCategory;
