import React from "react";

interface PhotoGalleryProps {
  images: string[];
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  return (
    <section className="w-full flex justify-center px-4 md:px-16 py-12 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-auto object-cover rounded-md shadow-md"
          />
        ))}
      </div>
    </section>
  );
}
