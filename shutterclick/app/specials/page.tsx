import CommonHeader from "../components/CommonHeader";
import Footer from "../components/Footer";
import Promo from "../components/Promo";
import SpecialsGallery from "../components/SpecialsGallery";

export default function SpecialsPage(){
    return(
        <main>
            <CommonHeader/>
            <SpecialsGallery/>
            <Promo/>
            <Footer/>
        </main>
    )
}