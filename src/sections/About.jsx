import { motion } from 'framer-motion';
import { FiMapPin, FiBookOpen, FiCode, FiCpu } from 'react-icons/fi';
import SectionWrapper, { SectionHeader, fadeUpVariants } from '../components/SectionWrapper';
import { personalInfo } from '../data';

const stats = [
  { label: 'Projects Built', value: '3+', icon: FiCode },
  { label: 'Technologies', value: '15+', icon: FiCpu },
  { label: 'Year of Study', value: '3rd', icon: FiBookOpen },
  { label: 'Certifications', value: '1+', icon: FiBookOpen },
];

const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          headingId="about-heading"
          tag="// about me"
          title={<>Who I <span className="gradient-text">Am</span></>}
          subtitle="A bit about my background, focus, and what drives me"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <div>
            <motion.div variants={fadeUpVariants} className="mb-8">
              <div className="flex items-center gap-2 mb-6">
                <FiMapPin className="text-blue-400" size={16} />
                <span className="text-[#B3B3B3] text-sm font-mono">{personalInfo.location}</span>
              </div>

              <div className="space-y-5">
                {personalInfo.about.map((para, i) => (
                  <p key={i} className="text-[#B3B3B3] leading-relaxed text-base">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div
              variants={fadeUpVariants}
              className="glass-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <FiBookOpen className="text-blue-400" size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono text-blue-400 mb-1 uppercase tracking-wider">Education</p>
                  <h3 className="text-white font-semibold text-base mb-1">
                    {personalInfo.education.degree}
                  </h3>
                  <p className="text-[#B3B3B3] text-sm mb-1">{personalInfo.education.field}</p>
                  <p className="text-white/60 text-sm">{personalInfo.education.institution}</p>
                  <p className="text-white/40 text-xs mt-2 font-mono">{personalInfo.education.graduation}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Stats + Visual */}
          <div>
            {/* Stats Grid */}
            <motion.div
              variants={fadeUpVariants}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {stats.map(({ label, value, icon: Icon }) => (
                <motion.div
                  key={label}
                  className="glass-card p-6 text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <Icon className="text-blue-400 mx-auto mb-3" size={20} />
                  <span className="block text-3xl font-display font-bold gradient-text mb-1">{value}</span>
                  <span className="text-[#B3B3B3] text-xs font-mono">{label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Code snippet visual */}
            <motion.div
              variants={fadeUpVariants}
              className="glass-card p-6 font-mono text-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs text-white/30">mihir.js</span>
              </div>
              <div className="space-y-1 text-xs leading-relaxed">
                <p><span className="text-purple-400">const</span> <span className="text-blue-300">developer</span> <span className="text-white/60">=</span> {'{'}</p>
                <p className="pl-4"><span className="text-green-300">name</span><span className="text-white/60">:</span> <span className="text-amber-300">"Mihir Parida"</span><span className="text-white/60">,</span></p>
                <p className="pl-4"><span className="text-green-300">role</span><span className="text-white/60">:</span> <span className="text-amber-300">"Full Stack Developer"</span><span className="text-white/60">,</span></p>
                <p className="pl-4"><span className="text-green-300">stack</span><span className="text-white/60">:</span> [<span className="text-amber-300">"MongoDB"</span><span className="text-white/60">,</span> <span className="text-amber-300">"Express"</span><span className="text-white/60">,</span> <span className="text-amber-300">"React"</span><span className="text-white/60">,</span> <span className="text-amber-300">"Node"</span>]<span className="text-white/60">,</span></p>
                <p className="pl-4"><span className="text-green-300">location</span><span className="text-white/60">:</span> <span className="text-amber-300">"Odisha, India"</span><span className="text-white/60">,</span></p>
                <p className="pl-4"><span className="text-green-300">available</span><span className="text-white/60">:</span> <span className="text-blue-400">true</span><span className="text-white/60">,</span></p>
                <p className="pl-4"><span className="text-green-300">focus</span><span className="text-white/60">:</span> <span className="text-amber-300">"Building scalable web apps"</span></p>
                <p>{'}'};</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
