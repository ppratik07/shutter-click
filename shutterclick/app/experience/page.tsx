import NaturalSession from "@/app/components/NaturalSession";
import CommonHeader from "../components/CommonHeader";
import StepsSection from "../components/StepsSection";
import AboutGallery from "../components/AboutGallery";
import FaqSection from "../components/FAQSection";
import ReadyToWork from "../components/ReadyToWork";
import Footer from "../components/Footer";

export default function ExperiencePage() {
    return (
        <div>
            <CommonHeader />
            <NaturalSession />
            <StepsSection />
            <AboutGallery />
            <FaqSection />
            <ReadyToWork title1="Start Documenting Your Story" title2="I can’t wait for us to meet and capture your story together."
                imageUrl="https://images.unsplash.com/photo-1535397318751-32521c97e1c3?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Footer />
        </div>
    )
}