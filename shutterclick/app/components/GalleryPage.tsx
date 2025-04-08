import PhotoGallery from "./PhotoGallery";


const imageUrls = [
    "https://images.unsplash.com/photo-1618397806877-f0187730803f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
];

export default function GalleryPage() {
    return <PhotoGallery images={imageUrls} />;
}
