"use client";
import React from "react";
import NewsSection from "../components/newsSection";
import Testimonial from "../components/testimonial";
import Membership from "../components/membership";
import FourthSection from "../components/fourthSection";
import ThirdSection from "../components/thirdSection";
import FirstSection from "../components/firstSection";
import SecondSection from "../components/secondSection";

const Home = () => {
  return (
    <>
      <div className="mainPage_class">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <Membership />
        <Testimonial />
        <NewsSection />
      </div>
    </>
  );
};

export default Home;
