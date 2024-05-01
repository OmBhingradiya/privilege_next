import React, { useEffect } from "react";
import styles from "./../../styles/medical/craftedByDr.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const CraftedByDr = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left_section}>
          <h2 className={styles.heading} data-aos="fade-right">
            CRAFTED BY DOCTORS
          </h2>
          <hr className={styles.hr} data-aos="fade-right" />
          <p className={styles.text} data-aos="fade-right">
            Will It Be Possible?
            <br />
            If the leading doctors in the country come together to co-design the
            hospital they would like to see in Thailand. Because some of the
            details of treatment are only deeply understood by specialists and
            know what is most important and safe for their patients.
          </p>

          <div className={styles.button_container} data-aos="fade-right">
            <button className={styles.btn}>
              <Link
                href="https://www.medparkhospital.com/en-US/about-us"
                target="_blank"
                aria-label="Read more about Medpark Hospital"
              >
                <svg
                  width="120px"
                  height="40px"
                  viewBox="0 0 180 60"
                  class="border"
                >
                  <rect
                    x="0"
                    y="0"
                    width="180"
                    height="60"
                    rx="7"
                    ry="7"
                    class="bg-line"
                  />
                  <rect
                    x="1"
                    y="1"
                    width="178"
                    height="58"
                    rx="7"
                    ry="7"
                    class="hl-line"
                  />
                </svg>
                <span>Read More</span>
                <span className={styles.visually_hidden}>
                  about Medpark Hospital
                </span>
              </Link>
            </button>
          </div>
        </div>
        <div className={styles.right_section} data-aos="fade-left">
          {/* <img
            src="./medical/medPark.png"
            alt="medipark"
            style={{ width: "100%" }}
          /> */}
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: "0",
              overflow: "hidden",
              maxWidth: "100%",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/GGzex-WxQYg"
              title="YouTube Video Player"
              frameBorder="0"
              allowFullScreen
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                borderRadius: "12px",
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default CraftedByDr;
