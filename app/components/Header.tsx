import React from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

export default function Header() {
  return (
    <header
      className=" fixed top-10 left-0 w-full z-50 
                   px-4 lg:px-16 
                   flex items-center justify-between"
    >
      <div className="flex items-center justify-center">
        <Image src="/assets/WF-white.png" alt="Logo" width={60} height={60} />
        <h1 className="text-2xl text-background ">Solutions</h1>
      </div>
      <DesktopMenu />
      <MobileMenu />
    </header>
  );
}
