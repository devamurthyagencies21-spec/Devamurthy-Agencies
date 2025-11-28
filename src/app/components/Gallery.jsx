"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// --- PROFESSIONAL COLOR PALETTE (UPDATED FOR LIGHT BG) ---
const COLORS = {
  PrimaryTeal: "#0A9396", // Accent and Active Color
  DarkText: "#003D3D", // Main Text Color
  BackgroundLight: "#F8FAFC", // Main Content/Card Background
  TexturedBG: "#EAEAEA", // Light, Textured Section Background
};

// --- GALLERY IMAGES ---
const galleryItems = [
  {
    id: 1,
    src: "https://i.pinimg.com/736x/53/b2/fe/53b2fe1623519935de166534ddd598dc.jpg",
    alt: "Premium Cement Bags Stack",
    category: "Products",
    description: "High-quality cement bags securely stacked and ready for delivery to construction sites.",
  },
  {
    id: 2,
    src: "https://img.freepik.com/premium-photo/construction-materials-vibrant-background-generative-ai_804788-159691.jpg?semt=ais_hybrid&w=740&q=80",
    alt: "Construction Materials Display",
    category: "Products",
    description: "Wide range of construction materials including cement, aggregates, and building supplies.",
  },
  {
    id: 3,
    src: "https://thumbs.dreamstime.com/b/kyiv-ukraine-january-modern-showroom-interior-displaying-tiles-surface-materials-home-decor-contemporary-featuring-354210573.jpg",
    alt: "Modern Material Showroom",
    category: "Showroom",
    description: "Our state-of-the-art showroom displaying various construction materials and building products.",
  },
  {
    id: 4,
    src: "https://www.shutterstock.com/image-photo/concrete-mixer-truck-pouring-onto-600nw-2496414829.jpg",
    alt: "Concrete Mixing and Pouring",
    category: "Products",
    description: "Professional concrete mixing and pouring operations ensuring quality construction results.",
  },
  {
    id: 5,
    src: "https://www.shutterstock.com/image-photo/check-size-controls-quality-concrete-260nw-2435844805.jpg",
    alt: "Quality Control Testing",
    category: "Quality",
    description: "Advanced laboratory equipment and rigorous testing ensuring superior product quality standards.",
  },
  {
    id: 6,
    src: "https://thumbs.dreamstime.com/b/warehouse-6423520.jpg",
    alt: "Warehouse Storage Facility",
    category: "Showroom",
    description: "Efficient warehouse management with organized storage of construction materials and supplies.",
  },
  {
    id: 7,
    src: "https://www.constructionplacements.com/wp-content/uploads/2022/11/Top-Ways-to-Secure-Your-Large-Scale-Construction-Projects.jpg.webp",
    alt: "Large Scale Construction Site",
    category: "Projects",
    description: "Major construction project showcasing the application of our premium building materials.",
  },
  {
    id: 8,
    src: "https://png.pngtree.com/background/20250104/original/pngtree-fleet-of-white-delivery-trucks-parked-in-front-of-a-modern-picture-image_15742667.jpg",
    alt: "Logistics and Delivery Fleet",
    category: "Logistics",
    description: "Reliable logistics fleet ensuring timely delivery of materials directly to your construction site.",
  },
  {
    id: 9,
    src: "https://thumbs.dreamstime.com/b/cement-factory-large-modern-concrete-plant-equipment-construction-business-industry-cement-factory-large-modern-concrete-plant-389801968.jpg",
    alt: "Modern Business Facility",
    category: "Showroom",
    description: "The professional exterior of our main facility and distribution center.",
  },
];

const categories = ["All", ...new Set(galleryItems.map((i) => i.category))];

// --- MAIN COMPONENT ---
export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Filter items based on selected category
  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((i) => i.category === selectedCategory);

  const openModal = (img) => {
    setSelectedImage(img);
    setModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setSelectedImage(null);
  }, []);

  // Logic to navigate between images in the modal
  const navigateModal = useCallback(
    (dir) => {
      if (!selectedImage) return;

      const index = filteredItems.findIndex((i) => i.id === selectedImage.id);
      const nextIndex =
        dir === "next"
          ? (index + 1) % filteredItems.length
          : (index - 1 + filteredItems.length) % filteredItems.length;

      setSelectedImage(filteredItems[nextIndex]);
    },
    [selectedImage, filteredItems]
  );

  // Keyboard navigation for accessibility and convenience
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalOpen) return;

      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") navigateModal("prev");
      if (e.key === "ArrowRight") navigateModal("next");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, closeModal, navigateModal]);

  return (
    <section
      id="gallery"
      className="py-16 md:py-24"
      style={{
        backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRjBGMEYwIiBkPSJNMCAwdjIuNDQ0aDguMDAwdjUuNTU2aC04LjAwMHYtOC4wMDB6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0Y0RjRGNCkgZD0iTTAgMGg0LjAwMHY0LjAwMkgwLjAwMHYtNC4wMDB6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0YwRjBGMCkgZD0iTTAgMGg4LjAwMHY4LjAwMkgwLjAwMHYtOC4wMDB6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0Y0RjRGNCkgZD0iTTAgMGg0LjAwMHY0LjAwMkgwLjAwMHYtNC4wMDB6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0YwRjBGMCkgZD0iTDUuNTU2IDUuNTU2aDIuNDQ0djIuNDQ0aC0yLjQ0NHYtMi40NDR6Ii8+CiAgICA8L2c+Cjwvc3ZnPg==')`,
        backgroundColor: COLORS.TexturedBG,
        backgroundRepeat: "repeat",
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Gallery Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3"
            style={{ color: COLORS.DarkText }}
          >
            <span style={{ color: COLORS.PrimaryTeal }}>OUR</span> GALLERY
          </h2>
          <p className="text-lg sm:text-xl" style={{ color: COLORS.DarkText }}>
            Showcasing quality products and our operations.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md ${selectedCategory === cat
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-800"
                }`}
              style={{
                backgroundColor:
                  selectedCategory === cat
                    ? COLORS.PrimaryTeal
                    : COLORS.BackgroundLight,
                border: `1px solid ${COLORS.PrimaryTeal}`,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid - 3 Columns per Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className="relative overflow-hidden rounded-xl shadow-2xl group cursor-pointer w-full"
                style={{
                  aspectRatio: "16/9",
                  minHeight: "200px",
                }}
                onClick={() => openModal(item)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.05, rotate: 0.5 }}
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay for Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="p-4 text-white">
                    <span
                      className="inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-1"
                      style={{ backgroundColor: COLORS.PrimaryTeal }}
                    >
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold truncate">{item.alt}</h3>
                    <p className="text-sm opacity-90 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal (Lightbox) - Fully Responsive */}
        <AnimatePresence>
          {modalOpen && selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-2 sm:p-4"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative max-w-5xl xl:max-w-7xl w-full max-h-[95vh] bg-white rounded-lg sm:rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                transition={{ type: "spring", damping: 25 }}
              >
                {/* Image Container */}
                <div
                  className="relative flex-1 bg-black flex items-center justify-center overflow-hidden p-2 sm:p-4"
                  style={{ minHeight: "250px", maxHeight: "60vh" }}
                >
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Image Info/Sidebar */}
                <div
                  className="lg:w-96 bg-white p-4 sm:p-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l overflow-y-auto"
                  style={{ maxHeight: "40vh" }}
                >
                  <div>
                    <span
                      className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2 text-white"
                      style={{ backgroundColor: COLORS.PrimaryTeal }}
                    >
                      {selectedImage.category}
                    </span>
                    <h3
                      className="font-extrabold text-xl sm:text-2xl mb-2"
                      style={{ color: COLORS.DarkText }}
                    >
                      {selectedImage.alt}
                    </h3>
                    <p className="text-gray-700 mt-1 text-sm sm:text-base">
                      {selectedImage.description}
                    </p>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    Image{" "}
                    {filteredItems.findIndex((i) => i.id === selectedImage.id) +
                      1}{" "}
                    of {filteredItems.length}
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 lg:right-auto lg:left-4 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full transition-colors duration-200 z-10 shadow-lg"
                  aria-label="Close modal"
                >
                  <X
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    style={{ color: COLORS.DarkText }}
                  />
                </button>

                {/* Navigation Buttons */}
                {filteredItems.length > 1 && (
                  <>
                    <button
                      onClick={() => navigateModal("prev")}
                      className="absolute left-2 sm:left-4 top-[30%] sm:top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 p-2 sm:p-3 rounded-full text-white transition-colors duration-200 z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    <button
                      onClick={() => navigateModal("next")}
                      className="absolute right-2 sm:right-4 lg:right-auto lg:left-[calc(100%-25rem)] top-[30%] sm:top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 p-2 sm:p-3 rounded-full text-white transition-colors duration-200 z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}