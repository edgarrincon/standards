import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { homeObjTwo, homeObjThree } from "./Data";

function ContanctsUs() {
  return (
    <>
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default ContanctsUs;
