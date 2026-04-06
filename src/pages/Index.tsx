import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import StatsSection from "@/components/StatsSection";
import AsciiDivider from "@/components/AsciiDivider";
import SpeakersSection from "@/components/SpeakersSection";
import SignupSection from "@/components/SignupSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background scanlines crt-flicker">
    <Navbar />
    <HeroSection />
    <CountdownSection />
    <StatsSection />
    <AsciiDivider />
    <SpeakersSection />
    <SignupSection />
    <Footer />
  </div>
);

export default Index;
