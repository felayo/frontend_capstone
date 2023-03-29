import React from "react";
import Hero from "./Hero";
import Hightlights from "../../components/Highlights/Highlights";
import Testimonials from "../../components/Testimonials/Testimonials";
import About from "../../components/About/About";

const Home = () => {
  return (
    <>
      <Hero />
      <Hightlights />
      <Testimonials />
      <About />
    </>
  );
};

export default Home;
