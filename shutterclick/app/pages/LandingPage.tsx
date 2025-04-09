import CardGrids from "../components/CardGrids";
import ClientCenteredBanner from "../components/ClientCenteredBanner";
import Footer from "../components/Footer";
import GalleryPage from "../components/GalleryPage";
import Hero from "../components/HeroSection";
import Promo from "../components/Promo";
import ReadyToWork from "../components/ReadyToWork";

export const LandingPage = () => {
    return (
        <div>
            <Hero />
            <ClientCenteredBanner
                title="Capturing the Essence of Divine Beauty & Memorable Moments"
            />
            <CardGrids />
            <ClientCenteredBanner
                title="CURRENT SPECIALS"
                buttonText="CLICK HERE"
            />
            <GalleryPage variant="rectangle" />
            <ClientCenteredBanner
                title="Other Package Offers"
            />
            <Promo />
            <ReadyToWork title1="Ready to Work With Me" title2="Let’s connect and make some magic"
             imageUrl="https://images.unsplash.com/photo-1438962136829-452260720431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <GalleryPage variant="square" />
            <div className="w-full h-full flex justify-center items-center text-center">
                <h4 className="text-xs tracking-widest text-black uppercase">
                    follow me on instagram<br />@shutterclicks
                </h4>
            </div>
            <Footer />
        </div>
    );
}