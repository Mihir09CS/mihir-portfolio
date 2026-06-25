import { motion } from 'framer-motion';
import { FiGithub, FiHeart, FiLinkedin, FiMail } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { personalInfo } from '../data';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <Link to="home" smooth duration={600} className="cursor-pointer">
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.01 }}>
              <span className="font-mono text-xs text-blue-400">&lt;</span>
              <span className="font-display font-bold text-lg text-white">
                Mihir<span className="gradient-text">.</span>
              </span>
              <span className="font-mono text-xs text-blue-400">/&gt;</span>
            </motion.div>
          </Link>

          <p className="text-[#B3B3B3] text-sm flex items-center gap-2 text-center">
            <span>&copy; {year} Mihir Parida. Built with care using React and Tailwind CSS.</span>
            <FiHeart className="text-red-400" size={14} aria-hidden="true" />
          </p>

          <div className="flex items-center gap-2">
            {[
              { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
              { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[#B3B3B3] hover:text-white hover:border-blue-500/30 transition-colors"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.96 }}
                aria-label={label}
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
