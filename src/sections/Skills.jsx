import { motion } from 'framer-motion';
import SectionWrapper, { staggerContainer } from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import TechCategory from '../components/TechCategory';
import { techCategories } from '../data/skills';

const Skills = () => {
  return (
    <SectionWrapper
      id="skills"
      className="overflow-hidden py-16 sm:py-20 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_22%),linear-gradient(180deg,transparent,rgba(7,12,24,0.45),transparent)]"
    >
      <div className="mx-auto w-[min(90vw,1400px)] px-4 sm:px-5">
        <div className="skills-orbit-stage">
          <div aria-hidden="true" className="skills-orbit-shell">
            <div className="skills-orbit-ring skills-orbit-ring-a" />
            <div className="skills-orbit-ring skills-orbit-ring-b" />
            <div className="skills-orbit-core" />
          </div>

          <SectionTitle
            headingId="skills-heading"
            eyebrow="TECH STACK"
            title={
              <>
                My Development <span className="gradient-text">Arsenal</span>
              </>
            }
            subtitle="Everything I use to design, build, and ship
                applications."
          />
        </div>

        <motion.div variants={staggerContainer} className="skills-grid-compact">
          {techCategories.map((category) => (
            <TechCategory key={category.id} {...category} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
