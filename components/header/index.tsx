import React from "react";
import Image from "next/image";
import MobileMenu from "../mobileMenu";
import DesktopMenu from "../desktopMenu";

export default function Header() {
  return (
    <header className="flex fixed z-50 top-0  w-full px-4 items-center justify-between h-[50px]  md:h-20 bg-background shadow-sm">
      <div className="flex">
        <Image src="/assets/logo.png" alt="Logo" width={80} height={80} />
      </div>
      <DesktopMenu />
      <MobileMenu />
    </header>
  );
}
