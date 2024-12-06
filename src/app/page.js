import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/app/components/heroBanner";
import SecondSection from "@/app/components/secondSection";

export default function Home() {
  return (
      <main>
        <Hero/>
        <SecondSection/>
      </main>
  );
}
