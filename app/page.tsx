import AboutSection from "./components/AboutSection";
import ClientsSection from "./components/ClientsSection";
import Footer from "./components/Footer";
import ServicesSection from "./components/ServicesSection";
import HeroSection from "@/app/components/Hero";

export default function Home() {
  return (
    <div
      className="flex flex-col w-full min-h-screen bg-background
                    "
    >
      <HeroSection />
      <ServicesSection />
      <ClientsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
