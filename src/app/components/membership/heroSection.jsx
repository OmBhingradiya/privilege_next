import React, { useEffect } from "react";
import styles from "./../../styles/membership/heroSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const HeroSection = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div>
      <div
        className={styles.container}
        style={{
          background: `${
            data === "Membership"
              ? `url("./membership/membership_bg.webp")`
              : data === "About"
              ? `url("./about_bg.webp")`
              : `url("./contact_bg.webp")`
          }`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: `${data === "About" && "center"}`,
        }}
      >
        <div className={styles.inner_container}>
          {/* {data !== "Contact" && ( */}
          <div
            className={styles.thailand_main_svg}
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
          >
            <Image
              src="/pin_svg.svg"
              alt="thailand svg"
              width={132}
              height={135}
              style={{
                width: "80%",
                height: "auto",
              }}
            />
          </div>
          {/* )} */}
          <div
            className={
              data === "Contact"
                ? styles.contact_main_heading
                : styles.main_heading
            }
          >
            <h1 data-aos="fade-down">
              {data === "Membership"
                ? "Membership Packages"
                : data === "About"
                ? "ABOUT US"
                : "CONTACT US"}
            </h1>
          </div>
          {data !== "Contact" && (
            <hr className={styles.main_hr} data-aos="fade-down" />
          )}

          <p className={styles.main_text} data-aos="fade-up">
            {data === "Membership"
              ? "Unlock exclusive benefits and experiences with our premium membership."
              : data === "About"
              ? "Sprinkled with promotions that turn ordinary days into extraordinary ones."
              : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
