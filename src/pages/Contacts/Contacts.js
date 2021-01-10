import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { homeObjOne, homeObjThree } from "./Data";
import ContactUs from "../../components/ContactUs/ContacUs";

function ContanctsForm() {
  return (
    <>
      <ContactUs />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default ContanctsForm;
