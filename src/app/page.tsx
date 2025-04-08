import AboutUs from "./components/aboutus";
import CtaFinal from "./components/ctafinal";
import DuvidasFrequentes from "./components/faq";
import Footer from "./components/footer";
import GarantiaEBonus from "./components/garantia-bonus";
import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";
import PricingCTASection from "./components/pricingcta";
import Sobre from "./components/sobre";
import TestimonialsSection from "./components/testimonialsection";



export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
     <Sobre />
     <TestimonialsSection />
     <GarantiaEBonus />
     <PricingCTASection />
     <AboutUs />
     <DuvidasFrequentes />
     <CtaFinal />
     <Footer />
    </div>
  );
}
