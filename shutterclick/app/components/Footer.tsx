export default function Footer() {
    return (
      <footer className="bg-[#8a6b6b] text-white px-6 py-10 mt-10">
        <div className="flex flex-col items-center justify-center space-y-6 md:space-y-4">

          <ul className="flex flex-wrap justify-center gap-6 text-xs md:text-xs tracking-widest uppercase">
            <li><a href="#">Home</a></li>
            <li><a href="#">Experience</a></li>
            <li><a href="#">Pricing & Availability</a></li>
            <li><a href="#">Specials</a></li>
            <li><a href="#">View My Work</a></li>
            <li><a href="#">Locations & Setups<span className="mx-1">•</span></a></li>
            <li><a href="#">About<span className="mx-1">•</span></a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Booking Policy</a></li>
          </ul>
  
          <p className="text-[10px] mt-10 md:text-[10px]">&copy; 2025 Shutter Clicks</p>
        </div>
      </footer>
    );
  }
  