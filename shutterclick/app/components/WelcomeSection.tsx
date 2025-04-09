import {
    Facebook,
    Instagram,
    Globe,
    Mail,
    Phone,
    MapPin,
  } from "lucide-react";
  
  const WelcomeSection = () => {
    return (
      <section className="bg-[#8D6E72] text-white text-center py-20 px-4 space-y-8">

        <div className="flex justify-center space-x-6">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Facebook className="hover:text-pink-300" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Instagram className="hover:text-pink-300" />
          </a>
        </div>

        <div>
          <img
            src="/logo.png" 
            alt="Logo"
            className="mx-auto h-20"
          />
        </div>
  
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">🌸 Welcome 🌸</h2>
          <p className="max-w-2xl mx-auto text-sm">
            Kindly review the description of each package for specific details. Should you have any inquiries, concerns, or wish to request a customized package, please contact me via call or text message at the contact number below.
          </p>
          <p className="font-semibold tracking-wide">
            PAYMENT PLANS & INSTALLMENTS AVAILABLE
          </p>
          <p className="text-green-300 text-sm">
            🌿 DISCOUNTS 🌿 <br />
            <span className="text-white">GET 10% OFF YOUR ENTIRE GALLERY</span> <br />
            (USE CODE: 10OFFGAL)
          </p>
        </div>
  

        <div className="space-y-3 text-sm">
          <div className="flex justify-center items-center space-x-2">
            <Globe size={16} />
            <span>www.shutterclicks.com</span>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <Mail size={16} />
            <span>shutterclicks@gmail.com</span>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <Phone size={16} />
            <span>5206776772</span>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <MapPin size={16} />
            <span>New Jersey,USA, 85138</span>
          </div>
        </div>
      </section>
    );
  };
  
  export default WelcomeSection;
  