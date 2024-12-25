import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/app/components/heroBanner";
import SecondSection from "@/app/components/secondSection";
import ThirdSection from "@/app/components/thirdSection";
import AccessoriesParts from "./components/accessories";
import ZealoopsComponent from "./components/specs";
import Testimonials from "./components/testimonials";
export default function Home() {
  return (
      <main>
        <Hero/>
        <SecondSection/>
        <ThirdSection/>
        <AccessoriesParts/>
        <ZealoopsComponent/>
        <Testimonials/>
      </main>
  );
}
