import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { homeObjOne } from "./Data";
import Pricing from "../../components/Pricing/Pricing";

function Portfolio() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Pricing />
    </>
  );
}

export default Portfolio;
