"use client";

import React from "react";
import HeroSection from "../components/tours&hotels/heroSection";
import HotelSection from "../components/tours&hotels/hotelSection";
import BestSeller from "../components/tours&hotels/bestSeller";
import Destination from "../components/tours&hotels/destination";
import SpecialDeal from "../components/tours&hotels/specialDeal";
import FeaturedTours from "../components/tours&hotels/featuredTours";
import TravelTheme from "../components/tours&hotels/travelTheme";

const ToursAndHotels = () => {
  return (
    <div className="mainPage_class">
      <HeroSection />
      <HotelSection />
      <SpecialDeal />
      <BestSeller />
      <FeaturedTours />
      <TravelTheme />
      <Destination />
    </div>
  );
};

export default ToursAndHotels;
