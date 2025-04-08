import CardGrids from "./components/CardGrids";
import ClientCenteredBanner from "./components/ClientCenteredBanner";
import Footer from "./components/Footer";
import GalleryPage from "./components/GalleryPage";
import Hero from "./components/HeroSection";
import Promo from "./components/Promo";
import ReadyToWork from "./components/ReadyToWork";

export default function Home() {
  return (
    <main>
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
      <ReadyToWork />
      <GalleryPage variant="square" />
      <div className="w-full h-full flex justify-center items-center text-center">
        <h4 className="text-xs tracking-widest text-black uppercase">
          follow me on instagram<br />@shutterclicks
        </h4>
      </div>
      <Footer/>
    </main>
  );
}
