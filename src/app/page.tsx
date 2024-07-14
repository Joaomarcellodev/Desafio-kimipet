
import Image from "next/image";
import { SectionHero } from "./components/SectionHero";
import { SectionHero2 } from "./components/SectionHero2";
import { SectionHero3 } from "./components/SectionHero3";
import { SectionHero4 } from "./components/SectionHero4";
import { SectionHero5 } from "./components/SectionHero5";
import { SectionHero6 } from "./components/SectionHero6";
import { Footer } from "./components/Footer";


export default function Home() {
  return (
    <div>
    <SectionHero/>
    <SectionHero2/>
    <SectionHero3/>
    <SectionHero4/>
    <SectionHero5/>
    <SectionHero6/>
    <Footer/>
   </div>
  );
}
