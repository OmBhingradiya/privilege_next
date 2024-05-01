import React, { useEffect } from "react";
import styles from "./../../styles/tours&hotels/heroSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div className={styles.heading}>
            <div className={styles.main_heading}>
              <h1 data-aos="fade-right">
                HOTELS <span className={styles.and_style}> &</span> TOURS
              </h1>
            </div>
          </div>
          <div className={styles.main_image}>
            {/* <div className={styles.thailand_svg} data-aos="fade-left">
              <img src="./thai_miniSvg.svg" alt="thailand svg" />
            </div> */}
            <Image
              src="/tours&hotel/tour_main_image.png"
              alt="tours and hotel"
              data-aos="zoom-in"
              width={1157}
              height={458}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
