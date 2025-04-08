import React from "react";

interface PhotoGalleryProps {
    images: string[];
    variant: "rectangle" | "square";
}

export default function PhotoGallery({ images, variant }: PhotoGalleryProps) {
    return (
        <section className="w-full flex justify-center px-4 md:px-16 py-12 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Gallery Image ${index + 1}`}
                        className={`object-cover shadow-md ${variant === "rectangle"
                                ? "w-full h-auto"
                                : "w-full aspect-square"
                            }`}
                    />
                ))}
            </div>
        </section>
    )
}
