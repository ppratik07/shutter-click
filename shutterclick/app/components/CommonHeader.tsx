import Link from "next/link";
import React from "react";

export default function CommonHeader() {
  return (
    <header className="bg-[#8a6b6b] py-4 px-6 md:px-12">
      <div className="flex items-center">
        <Link href="/">
          <img
            src="/SC1.png"
            alt="Shutter ClicksLogo"
            className="h-40 w-auto"
          />
        </Link>

      </div>
    </header>
  );
}
