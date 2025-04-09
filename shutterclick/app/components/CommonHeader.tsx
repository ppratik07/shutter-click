import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CommonHeader() {
  return (
    <header className="bg-[#8a6b6b] py-4 px-6 md:px-12">
      <div className="flex items-center">
        <Link href="/">
          <div className="relative  w-[100px] h-[100px]">
            <Image
              src="/SC1.png"
              alt="Shutter ClicksLogo"
              className="h-40 w-auto"
              fill
            />
          </div>

        </Link>

      </div>
    </header>
  );
}
