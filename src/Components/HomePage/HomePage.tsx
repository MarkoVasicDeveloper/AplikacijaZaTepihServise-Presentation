import { HomeProps } from "../../Misc/HeaderProps/props";
import HeaderHome from "../Header/HeaderHome";
import Footer from "./Sections/Footer/Footer";
import HeroSection from "./Sections/Hero/HeroSection";
import InfoSection from "./Sections/Info/InfoSection";
import InfoAboreWasher from "./Sections/InfoAboveWasher/InfoAboreWasher";
import Suport from "./Sections/Suport/Suport";
import './HomePage.css';
import { useEffect, useRef } from "react";

export default function HomePage() {

  const homePageRef = useRef(null) as any
  
  return (
    <section id="homePage" ref={homePageRef}>
      <HeaderHome item={HomeProps} />
      <HeroSection />
      <InfoSection />
      <InfoAboreWasher />
      <Suport />
      <Footer />
    </section>
  );
}
