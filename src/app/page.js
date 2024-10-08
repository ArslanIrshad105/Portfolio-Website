"use client";
import React, { useState, useEffect, useRef } from "react";
import About from "@/components/about/about";
import Header from "@/components/Header/Header";
import MainSection from "@/components/MainSection/MainSection";
import SkillsSection from "@/components/skillsSection/SkillsSection";
import ContactSection from "@/components/ContactSection/Contact";
import Footer from "@/components/Footer/Footer";
import Slider from "@/components/LogosSection/Logos";
import Projects from "@/components/Projects_Section/Projects";
import Services from "@/components/Services_Section/ServicesSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection((prevActiveSection) => {
            const newActiveSection = `#${entry.target.id}`;
            // State will update only if the section has actually changed
            return prevActiveSection !== newActiveSection
              ? newActiveSection
              : prevActiveSection;
          });
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver(handleObserver, options);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);

  return (
    <>
      <Header activeSection={activeSection} />

      <div id="home" ref={sectionRefs.home}>
        <MainSection />
        <Slider />
      </div>
      <div id="about" ref={sectionRefs.about}>
        <About />
      </div>
      <div id="services" ref={sectionRefs.services}>
        <Services />
      </div>
      <div id="projects" ref={sectionRefs.projects}>
        <Projects />
      </div>
      <div id="skills" ref={sectionRefs.skills}>
        <SkillsSection />
      </div>
      <div id="contact" ref={sectionRefs.contact}>
        <ContactSection />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
