import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { HiDownload } from 'react-icons/hi';
import SectionWrapper, { SectionHeader, fadeUpVariants } from '../components/SectionWrapper';
import { personalInfo } from '../data';
import { useContactForm } from '../hooks/useContactForm';

const socialLinks = [
  {
    icon: FiGithub,
    label: 'GitHub',
    href: personalInfo.github,
    description: 'Browse recent code and projects',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    href: personalInfo.linkedin,
    description: 'Connect for internships and opportunities',
  },
  {
    icon: FiMail,
    label: 'Email',
    href: `mailto:${personalInfo.email}`,
    description: personalInfo.email,
  },
];

const Contact = () => {
  const {
    errors,
    formData,
    handleBlur,
    handleChange,
    handleSubmit,
    isDisabled,
    isSubmitting,
    isSuccess,
    submitLabel,
    status,
  } = useContactForm();

  const inputClassName = (field) =>
    `w-full rounded-xl border px-4 py-3 text-sm text-white bg-white/5 placeholder:text-white/30 outline-none transition-all duration-200 ${errors[field]
      ? 'border-red-500/60 focus:border-red-500'
      : 'border-white/10 focus:border-blue-500/55 focus:bg-white/8 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]'
    }`;

  return (
    <SectionWrapper id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          headingId="contact-heading"
          tag="// contact"
          title={
            <>
              Let&apos;s <span className="gradient-text">Connect</span>
            </>
          }
          subtitle="Open to internships, entry-level software roles, and project collaborations."
        />

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 xl:gap-12 max-w-6xl mx-auto">
          <motion.article variants={fadeUpVariants} className="glass-card p-7 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <FiMapPin className="text-blue-400" size={15} />
              <span className="text-[#B3B3B3] text-sm">{personalInfo.location}</span>
            </div>

            <h3 className="text-white font-semibold text-xl mb-3">
              Ready for the next opportunity
            </h3>
            <p className="text-[#B3B3B3] leading-7 mb-8">
              I&apos;m currently looking for internship and junior software development roles where I can contribute, learn quickly, and ship quality work with a team.
            </p>

            <div className="space-y-3 mb-8">
              {socialLinks.map(({ icon: Icon, label, href, description }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/8 hover:border-blue-500/30 transition-colors"
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  aria-label={label}
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{label}</p>
                    <p className="text-[#B3B3B3] text-xs">{description}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.a
              href={personalInfo.resume}
              download
              className="btn-outline w-full justify-center min-h-12"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <HiDownload size={17} />
              Download Resume
            </motion.a>
          </motion.article>

          <motion.div variants={fadeUpVariants}>
            <form
              onSubmit={handleSubmit}
              className="glass-card p-7 md:p-8 space-y-5"
              noValidate
              aria-label="Contact form"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/75 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your name"
                  className={inputClassName('name')}
                  disabled={isDisabled}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-400 text-xs mt-1.5">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/75 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="you@example.com"
                  className={inputClassName('email')}
                  disabled={isDisabled}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-400 text-xs mt-1.5">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/75 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell me about the role, project, or opportunity."
                  className={`${inputClassName('message')} resize-none`}
                  disabled={isDisabled}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-red-400 text-xs mt-1.5">
                    {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                className="btn-primary w-full justify-center min-h-12"
                disabled={isDisabled}
                whileHover={isDisabled ? undefined : { scale: 1.01 }}
                whileTap={isDisabled ? undefined : { scale: 0.98 }}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2 relative z-10">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {submitLabel}
                  </span>
                ) : (
                  <span className="flex items-center gap-2 relative z-10">
                    <FiSend size={15} className={isSuccess ? 'text-emerald-200' : ''} />
                    {isSuccess ? `✓ ${submitLabel}` : submitLabel}
                  </span>

                )}
              </motion.button>
              {/* Subtitle Note */}
              <span className="text-xs text-beige-500 text-center font-normal">
                 Open to internships, freelance work, and collaborations.
              </span>

              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">
                  Failed to send message. Please try again later.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
