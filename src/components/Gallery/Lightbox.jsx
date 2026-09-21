import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiCalendar, FiX } from "react-icons/fi";

const Lightbox = ({ item, onClose, onPrevious, onNext }) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!item) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrevious();
      if (event.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose, onNext, onPrevious]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#02040a]/95 p-4 backdrop-blur-xl sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title} preview`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            className="relative flex max-h-full w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-2xl lg:flex-row"
            initial={{ scale: 0.96, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 12 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative flex min-h-[16rem] flex-1 items-center justify-center bg-black/30 lg:min-h-[34rem]">
              <img
                src={item.image}
                alt={item.title}
                decoding="async"
                className="block h-auto max-h-[70vh] w-auto max-w-full object-contain lg:max-h-[78vh]"
                style={{ imageOrientation: "from-image" }}
              />
              <button
                type="button"
                ref={closeButtonRef}
                onClick={onClose}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white transition hover:bg-white/15"
                aria-label="Close image preview"
              >
                <FiX size={20} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={onPrevious}
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white transition hover:bg-white/15 sm:left-5"
                aria-label="Previous image"
              >
                <FiArrowLeft size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={onNext}
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white transition hover:bg-white/15 sm:right-5"
                aria-label="Next image"
              >
                <FiArrowRight size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="w-full border-t border-white/10 p-6 lg:w-80 lg:border-l lg:border-t-0 lg:p-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-blue-300">
                {item.category}
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-white">
                {item.title}
              </h3>
              {item.event && item.event !== item.title && (
                <p className="mt-2 text-sm text-white/45">{item.event}</p>
              )}
              {item.year && (
                <p className="mt-4 flex items-center gap-2 text-sm text-white/55">
                  <FiCalendar size={14} aria-hidden="true" />
                  {item.year}
                </p>
              )}
              {item.description && (
                <p className="mt-5 text-sm leading-7 text-white/65">
                  {item.description}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
