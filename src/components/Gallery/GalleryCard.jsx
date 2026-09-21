import { motion } from "framer-motion";
import { FiCalendar, FiMaximize2, FiMapPin } from "react-icons/fi";
import { fadeUpVariants } from "../SectionWrapper";

const GalleryCard = ({ item, onSelect }) => {
  return (
    <motion.article
      variants={fadeUpVariants}
      className="group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 shadow-glass"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.22 }}
    >
      <button
        type="button"
        className="relative block w-full overflow-hidden bg-black/25 text-left"
        onClick={() => onSelect(item)}
        aria-label={`Open ${item.title} image`}
      >
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="mx-auto block h-auto max-h-[34rem] w-auto max-w-full object-contain transition duration-500 ease-out group-hover:brightness-110"
          style={{ imageOrientation: "from-image" }}
        />
        <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-slate-950/65 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
          <FiMaximize2 size={16} aria-hidden="true" />
        </span>
      </button>

      <div className="border-t border-white/8 px-5 py-4">
        <span className="inline-flex rounded-full border border-blue-300/20 bg-blue-400/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-blue-200">
          {item.category}
        </span>
        <h3 className="mt-3 font-display text-lg font-semibold leading-tight text-white">
          {item.title}
        </h3>
        {item.event && item.event !== item.title && (
          <p className="mt-1 text-xs text-white/45">{item.event}</p>
        )}
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/55">
          {item.year && (
            <span className="inline-flex items-center gap-1.5">
              <FiCalendar size={12} aria-hidden="true" />
              {item.year}
            </span>
          )}
          {item.location && (
            <span className="inline-flex items-center gap-1.5">
              <FiMapPin size={12} aria-hidden="true" />
              {item.location}
            </span>
          )}
        </div>
        {item.description && (
          <p className="mt-3 text-sm leading-6 text-white/55">
            {item.description}
          </p>
        )}
      </div>
    </motion.article>
  );
};

export default GalleryCard;
