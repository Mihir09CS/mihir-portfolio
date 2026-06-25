import { motion } from 'framer-motion';
import SectionWrapper, { SectionHeader, fadeUpVariants, staggerContainer } from '../components/SectionWrapper';
import { achievements } from '../data';

const AchievementCard = ({ achievement, index }) => {
  const Icon = achievement.icon;

  return (
    <motion.article
      variants={fadeUpVariants}
      className="glass-card p-6 flex gap-5 items-start h-full"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-xl glass flex items-center justify-center text-blue-300">
        <Icon size={20} aria-hidden="true" />
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs text-blue-400">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="font-semibold text-white text-base">{achievement.title}</h3>
        </div>
        <p className="text-[#B3B3B3] text-sm leading-relaxed">
          {achievement.description}
        </p>
      </div>
    </motion.article>
  );
};

const Achievements = () => {
  return (
    <SectionWrapper id="achievements" className="bg-gradient-to-b from-transparent via-blue-950/5 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          headingId="achievements-heading"
          tag="// achievements"
          title={
            <>
              Highlights & <span className="gradient-text">Progress</span>
            </>
          }
          subtitle="A quick snapshot of the work, learning, and momentum behind my portfolio."
        />

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.title} achievement={achievement} index={index} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
