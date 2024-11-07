import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Testimonial />
    </>
  );
};

export default page;
