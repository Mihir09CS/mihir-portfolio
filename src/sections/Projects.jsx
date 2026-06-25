import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiExternalLink, FiGithub } from 'react-icons/fi';
import GitHubStarButton from '../components/GitHubStarButton';
import SectionWrapper, { SectionHeader, fadeUpVariants, staggerContainer } from '../components/SectionWrapper';
import { projects } from '../data';

const ProjectCard = ({ project }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.article
      variants={fadeUpVariants}
      className="glass-card project-card group overflow-hidden h-full flex flex-col"
      whileHover={{ y: -6, transition: { duration: 0.24 } }}
      onHoverStart={() => setIsActive(true)}
      onHoverEnd={() => setIsActive(false)}
      onFocusCapture={() => setIsActive(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsActive(false);
        }
      }}
    >
      <div className={`project-card-media relative p-7 bg-gradient-to-br ${project.color}`}>
        <div
          className="project-card-media-glow absolute inset-0 opacity-15"
          aria-hidden="true"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, ${project.accent}40 0%, transparent 50%), radial-gradient(circle at 85% 10%, ${project.accent}22 0%, transparent 45%)`,
          }}
        />

        <motion.div
          initial={false}
          animate={isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-4 top-4 z-20 hidden md:block"
          style={{ pointerEvents: isActive ? 'auto' : 'none' }}
          aria-hidden={!isActive}
        >
          <GitHubStarButton githubUrl={project.githubUrl} projectName={project.title} />
        </motion.div>

        <div className="relative z-10 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-white/70 mb-3">
              {project.label}
            </p>
            <h3 className="font-display font-bold text-xl text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm leading-6 text-white/80 max-w-xl">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="mb-5 md:hidden">
          <GitHubStarButton githubUrl={project.githubUrl} projectName={project.title} mobile />
        </div>

        <div className="mb-5">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-white/35 mb-3">
            What it shows
          </p>
          <ul className="space-y-2">
            {project.features.slice(0, 5).map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-[#B3B3B3]">
                <FiCheck size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-white/35 mb-3">
            Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="skill-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex flex-col sm:flex-row gap-3 pt-5 border-t border-white/6">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline py-2.5 px-4 text-sm flex-1 justify-center"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <FiGithub size={15} />
            GitHub
          </motion.a>
          <motion.a
            href={project.liveUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2.5 px-4 text-sm flex-1 justify-center"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`View live demo for ${project.title}`}
            aria-disabled={!project.liveUrl}
            tabIndex={project.liveUrl ? 0 : -1}
            onClick={(event) => {
              if (!project.liveUrl) {
                event.preventDefault();
              }
            }}
          >
            <span className="flex items-center gap-1.5 relative z-10">
              <FiExternalLink size={14} />
              {project.liveUrl ? 'Live Demo' : 'Live Soon'}
            </span>
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          headingId="projects-heading"
          tag="// projects"
          title={
            <>
              Selected <span className="gradient-text">Projects</span>
            </>
          }
          subtitle="Projects that demonstrate product thinking, interface quality, and practical full stack development."
        />

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 xl:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <motion.div variants={fadeUpVariants} className="text-center mt-14">
          <p className="text-[#B3B3B3] text-sm mb-5">
            Additional work and experiments are available on GitHub.
          </p>
          <motion.a
            href="https://github.com/Mihir09CS"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiGithub size={16} />
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
