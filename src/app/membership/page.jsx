"use client";

import React from "react";
import HeroSection from "../components/membership/heroSection";
import SecondSection from "../components/membership/secondSection";
import MainCardSection from "../components/membership/mainCardSection";
import ThirdSection from "../components/membership/thirdSection";

const Membership = () => {
  return (
    <div className="mainPage_class">
      <HeroSection data={"Membership"} />
      <MainCardSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
};

export default Membership;
