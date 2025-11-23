import HeroSection from "@/components/heroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full h-screen bg-foreground">
      <HeroSection />
    </div>
  );
}
