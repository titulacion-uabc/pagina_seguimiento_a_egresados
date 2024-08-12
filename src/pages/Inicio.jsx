import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import AvisosSection from "../components/AvisosSection/AvisosSection";
import HeroInicio from "../components/HeroInicio/HeroInicio";
import SectionFAQ from "../components/SectionFAQ/SectionFAQ";

function Inicio() {
  return (
    <>
      <NavBar />

      <HeroInicio />

      <AvisosSection />

      <SectionFAQ />

      <Footer />
    </>
  );
}

export default Inicio;
