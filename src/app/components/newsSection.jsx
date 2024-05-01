import React, { useEffect } from "react";
import styles from "./../styles/newsSection.module.css";
import NewsSlider from "./subComponents/newsSlider";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const NewsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // You can customize the animation duration
    });
  }, []);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div className={styles.headerContainer}>
            <h2 className={styles.heading} data-aos="fade-down">
              NEWS, EVENTS <span className={styles.and_style}> &</span>{" "}
              PROMOTION
            </h2>
            <hr className={styles.heading_hr} />
            <p className={styles.sub_heading} data-aos="fade-down">
              Free Consultations, Guidance, and Services for Thailand Long-Term
              Privilege Residency Program
            </p>
          </div>
          <NewsSlider />
        </div>
        <div className={styles.svg}>
          <Image
            src="/pin_svg.svg"
            alt="logo"
            data-aos="fade-right"
            width={76}
            height={72}
            // style={{
            //   width: "100%",
            //   height: "auto",
            // }}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
