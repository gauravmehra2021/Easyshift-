"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b",
      title: "Moving Trucks",
      category: "Transportation",
    },
    {
      url: "https://images.unsplash.com/photo-1614926781997-9ca2e6d2785a",
      title: "Professional Packing",
      category: "Packing",
    },
    {
      url: "https://images.unsplash.com/photo-1652112394938-217103c33394",
      title: "Quality Packaging",
      category: "Packing",
    },
    {
      url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
      title: "Office Relocation",
      category: "Office Moving",
    },
    {
      url: "https://images.unsplash.com/photo-1768796372610-f844d490a734",
      title: "Storage Solutions",
      category: "Storage",
    },
    {
      url: "https://images.unsplash.com/photo-1609188077093-bafe2e2c118d",
      title: "Local Delivery",
      category: "Transportation",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f8f8f8] scroll-mt-24 " id="gallery">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at our professional moving services in action
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image:any, index:any) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="
                group relative cursor-pointer overflow-hidden rounded-xl
                bg-white shadow-md transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
              "
            >
              <div className="aspect-[4/2] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Overlay */}
              <div
                className="
                  absolute inset-0 bg-black/60 opacity-0
                  group-hover:opacity-100 transition-opacity duration-300
                "
              >
                <div className="absolute bottom-0 p-5">
                  <span className="text-sm font-semibold text-[#9ACD32]">
                    {image.category}
                  </span>
                  <h3 className="text-white text-lg font-semibold">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div
            className="
              fixed inset-0 z-50 bg-black/90
              flex items-center justify-center p-4
              animate-fadeIn
            "
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="
                absolute top-5 right-5 text-white
                hover:text-[#9ACD32] transition
              "
            >
              <FaTimes size={28} />
            </button>

            <div
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].url}
                alt={galleryImages[selectedImage].title}
                className="w-full rounded-xl shadow-2xl"
              />

              <div className="text-center mt-4">
                <p className="text-[#9ACD32] text-sm font-semibold">
                  {galleryImages[selectedImage].category}
                </p>
                <h3 className="text-white text-xl font-semibold">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {selectedImage + 1} / {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}