"use client";
import React from "react";
import NewsSection from "../components/newsSection";
import Testimonial from "../components/testimonial";
import Membership from "../components/membership";
import FourthSection from "../components/fourthSection";
import ThirdSection from "../components/thirdSection";
import FirstSection from "../components/firstSection";
import SecondSection from "../components/secondSection";
import Head from "next/head";

const Home = () => {
  const schema = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    name: "Explore Thailand: Elite Privilege Residence Program",
    description:
      "Explore Thailand's Elite Privilege Residence Program: Long-term visas, exclusive benefits & seamless transition for investors, retirees & tourists seeking a privileged experience.",
    url: "https://goldenprivilege.com",
    potentialAction: {
      "@type": "Organization",
      name: "Golden Privilege",
      url: "https://goldenprivilege.com",
    },
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>
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
