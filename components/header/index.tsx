import React from "react";
import Image from "next/image";
import MobileMenu from "../mobileMenu";

export default function Header() {
  return (
    <header className="flex w-full px-4 items-center justify-between h-[50px] bg-background md:h-20">
      <div className="flex">
        <Image src="/assets/logo.png" alt="Logo" width={80} height={80} />
      </div>
      <MobileMenu />
    </header>
  );
}
