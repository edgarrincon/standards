import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { homeObjThree } from "./Data";
import ContactUs from "../../components/ContactUs/ContacUs";

function ContanctsForm() {
  return (
    <>
      <ContactUs />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default ContanctsForm;
