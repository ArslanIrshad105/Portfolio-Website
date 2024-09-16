"use client";
import About from "@/components/about/about";
import BrandsSection from "@/components/BrandsSection/BrandsSection";
import MainSection from "@/components/MainSection/MainSection";
import SkillsSection from "@/components/skillsSection/SkillsSection";

export default function Home() {
  return (
    <>
      <MainSection />
      <BrandsSection />
      <About />
      <SkillsSection />
    </>
  );
}
