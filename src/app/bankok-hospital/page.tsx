"use client";
import React from "react";
import Head from "next/head";
import HeroSection from "../components/bankok-hospital/heroSection";
import SecondSection from "../components/bankok-hospital/secondSection";
import Services from "../components/bankok-hospital/services";
import PacakagePromotion from "../components/bankok-hospital/pacakagePromotion";
import HealthInfo from "../components/bankok-hospital/healthINfo";
import AboutUs from "../components/bankok-hospital/aboutUs";

const bankokHospital = () => {
  // const schema = {
  //   "@context": "http://schema.org",
  //   "@type": "WebSite",
  //   name: "Explore Thailand: Elite Privilege Residence Program",
  //   description:
  //     "Explore Thailand's Elite Privilege Residence Program: Long-term visas, exclusive benefits & seamless transition for investors, retirees & tourists seeking a privileged experience.",
  //   url: "https://goldenprivilege.com",
  //   potentialAction: {
  //       "@type": "Organization",
  //       name: "Golden Privilege",
  //       url: "https://goldenprivilege.com",
  //     },
  // };
  return (
    <>
      <Head>
        {/* <script type="application/ld+json">{JSON.stringify(schema)}</script> */}
      </Head>
      <div className="mainPage_class">
        <HeroSection />
        <SecondSection />
        <Services />
        <PacakagePromotion />
        <HealthInfo />
        <AboutUs />
      </div>
    </>
  );
};

export default bankokHospital;
