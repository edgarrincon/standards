import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { homeObjOne } from "./Data";
import OdooVideo from "../../components/OdooVideo/OdooVideo";
import "../../components/OdooVideo/OdooVideo.css";

function MeetOdoo() {
  return (
    <>
      <OdooVideo />
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default MeetOdoo;
