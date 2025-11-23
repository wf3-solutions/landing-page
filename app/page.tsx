import AboutSection from "@/app/components/AboutSection";
import HeroSection from "@/app/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex flex-col w-full min-h-screen bg-background
                    "
    >
      <HeroSection />
      <AboutSection />
    </div>
  );
}
