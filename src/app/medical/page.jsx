"use client";

import React from "react";
import FirstSection from "../components/medical/firstSection";
import SecondSection from "../components/medical/secondSection";
import CraftedByDr from "../components/medical/craftedByDr";
import HighLight from "../components/medical/highLight";

const Medical = () => {
  return (
    <>
      <div className="mainPage_class">
        <FirstSection />
        {/* <SecondSection /> */}
        <CraftedByDr />
        <HighLight />
      </div>
    </>
  );
};

export default Medical;
