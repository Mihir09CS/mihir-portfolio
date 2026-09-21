import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper, {
  SectionHeader,
  fadeUpVariants,
  staggerContainer,
} from "../SectionWrapper";
import { gallery, galleryCategories } from "../../data/gallery";
import GalleryCard from "./GalleryCard";
import Lightbox from "./Lightbox";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredGallery =
    activeCategory === "All"
      ? gallery
      : gallery.filter((item) => item.category === activeCategory);

  const selectedIndex = filteredGallery.findIndex(
    (item) => item === selectedItem,
  );
  const moveSelection = (direction) => {
    if (!filteredGallery.length) return;
    const nextIndex =
      (selectedIndex + direction + filteredGallery.length) %
      filteredGallery.length;
    setSelectedItem(filteredGallery[nextIndex]);
  };

  return (
    <SectionWrapper
      id="gallery"
      className="bg-gradient-to-b from-transparent via-blue-950/5 to-transparent"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          headingId="gallery-heading"
          tag="// beyond code"
          title={
            <>
              Beyond <span className="gradient-text">Code</span>
            </>
          }
          subtitle="Events, hackathons, workshops and moments from my developer journey."
        />

        <motion.div
          variants={fadeUpVariants}
          className="mb-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Gallery categories"
        >
          {galleryCategories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm transition-all duration-200 ${
                activeCategory === category
                  ? "border-blue-400/50 bg-blue-400/15 text-blue-100 shadow-glow-blue"
                  : "border-white/10 bg-white/[0.03] text-white/55 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {filteredGallery.length > 0 ? (
          <motion.div
            variants={staggerContainer}
            className="columns-1 gap-5 sm:columns-2 xl:columns-3 2xl:columns-4"
          >
            {filteredGallery.map((item, index) => (
              <GalleryCard
                key={`${item.image}-${item.title}`}
                item={item}
                onSelect={setSelectedItem}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            variants={fadeUpVariants}
            className="glass-card flex min-h-64 flex-col items-center justify-center px-6 py-12 text-center"
          >
            <span className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-blue-300">
              Gallery loading bay
            </span>
            <h3 className="font-display text-xl font-semibold text-white">
              Your next developer moment belongs here.
            </h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
              Add real photos to{" "}
              <span className="font-mono text-blue-200">public/gallery</span>,
              then describe them in{" "}
              <span className="font-mono text-blue-200">
                src/data/gallery.js
              </span>
              .
            </p>
          </motion.div>
        )}
      </div>

      <Lightbox
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onPrevious={() => moveSelection(-1)}
        onNext={() => moveSelection(1)}
      />
    </SectionWrapper>
  );
};

export default Gallery;
