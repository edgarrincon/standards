import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { homeObjOne } from "./Data";
import OdooVideo from "../../components/OdooVideo/OdooVideo";
import "../../components/OdooVideo/OdooVideo.css";
import Pricing from "../../components/Pricing/Pricing";

function MeetOdoo() {
  return (
    <>
      <OdooVideo />
      <HeroSection {...homeObjOne} />
      <Pricing />
    </>
  );
}

export default MeetOdoo;
