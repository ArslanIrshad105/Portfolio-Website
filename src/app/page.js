import Image from "next/image";
import styles from "./page.module.css";
import SkillsSection from "@/components/skillsSection/SkillsSection";
import About from "@/components/about/about";

export default function Home() {
  return (
    // <div className={styles.page}>
    <div>
      <About />
      <SkillsSection />
    </div>
    // </div>
  );
}
