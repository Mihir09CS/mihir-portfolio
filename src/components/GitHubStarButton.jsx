import { motion } from 'framer-motion';
import { FiGithub, FiStar } from 'react-icons/fi';

const openRepository = (githubUrl) => {
  if (!githubUrl) return;
  window.open(githubUrl, '_blank', 'noopener,noreferrer');
};

const handleKeyDown = (event, githubUrl) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openRepository(githubUrl);
  }
};

const GitHubStarButton = ({ githubUrl, projectName, className = '', mobile = false }) => {
  const baseClassName = mobile ? 'github-star-chip github-star-chip-mobile' : 'github-star-chip';

  return (
    <motion.button
      type="button"
      onClick={() => openRepository(githubUrl)}
      onKeyDown={(event) => handleKeyDown(event, githubUrl)}
      className={`${baseClassName} ${className}`.trim()}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      aria-label={`Star this repository on GitHub${projectName ? `: ${projectName}` : ''}`}
    >
      <span className="github-star-chip__sparkle" aria-hidden="true" />
      <FiGithub size={14} aria-hidden="true" />
      <motion.span
        className="github-star-chip__star-wrap"
        whileHover={{ rotate: 12 }}
        transition={{ duration: 0.2 }}
      >
        <FiStar size={14} aria-hidden="true" />
      </motion.span>
      <span>Star on GitHub</span>
    </motion.button>
  );
};

export default GitHubStarButton;
