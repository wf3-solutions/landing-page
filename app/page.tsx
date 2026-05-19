import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import ProcessSection from "./components/ProcessSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import WhatsappFloating from "./components/WhatsappFloating";
import WhyUsSection from "./components/WhyUsSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <WhyUsSection />
      <ProjectsSection />
      <AboutSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <WhatsappFloating />
    </div>
  );
}
