import React from "react";

export default function CommonHeader() {
  return (
    <header className="bg-[#8a6b6b] py-4 px-6 md:px-12">
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Shutter ClicksLogo"
          className="h-16 w-auto"
        />
      </div>
    </header>
  );
}
