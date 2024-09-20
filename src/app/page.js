"use client";
import React from "react";
import About from "@/components/about/about";
import BrandsSection from "@/components/BrandsSection/BrandsSection";
import Header from "@/components/Header/Header";
import MainSection from "@/components/MainSection/MainSection";
import SkillsSection from "@/components/skillsSection/SkillsSection";

export default function Home() {
  return (
    <>
      <Header />
      <div id="home">
        <MainSection />
      </div>
      <div>
        <BrandsSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
    </>
  );
}
