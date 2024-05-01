import React, { useEffect } from "react";
import styles from "./../../styles/medical/firstSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const FirstSection = () => {
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
              <h1 data-aos="fade-right">Redefining Healthcare</h1>
            </div>
            <div className={styles.sub_heading}>
              <h2 data-aos="fade-left">
                WeCare: Delivering Exceptional Free Services for Your
                Well-Being.
              </h2>
            </div>
          </div>
          <div className={styles.medcare_image}>
            {/* <div className={styles.thailand_svg} data-aos="fade-left">
              <img src="./thai_miniSvg.svg" alt="thailand svg" />
            </div> */}
            <div className={styles.main_image}>
              <Image
                src="/medical/medPark_firstSection.png"
                alt="medcare image"
                width={1157}
                height={458}
                layout="responsive"
                data-aos="zoom-in"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
