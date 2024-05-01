import React, { useEffect } from "react";
import styles from "./../styles/fourthSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

const FourthSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.image_section}>
          <div className={styles.firstImageSection}>
            <div className={styles.experFirstImage} data-aos="fade-right">
              <Image
                src="/Rectangle 16.png"
                className={styles.image1}
                alt="Privilege Entry Visa"
                width={307}
                height={307}
                // style={{
                //   width: "100%",
                //   height: "auto",
                // }}
                layout="responsive"
              />
            </div>
            <div className={styles.experSecImage} data-aos="fade-right">
              <Image
                src="/Rectangle 17.png"
                className={styles.image2}
                alt="Thai Business Visa"
                width={307}
                height={307}
                // style={{
                //   width: "100%",
                //   height: "auto",
                // }}
                layout="responsive"
              />
            </div>
          </div>
          <div className={styles.secondImageSection} data-aos="zoom-in-down">
            <Image
              src="/Rectangle 15.png"
              className={styles.image3}
              alt="Tourist Visa"
              width={308}
              height={641}
              // style={{
              //   width: "100%",
              //   height: "auto",
              // }}
              layout="responsive"
            />
          </div>
        </div>
        <div className={styles.content_section}>
          <h2 className={styles.heading} data-aos="fade-left">
            EXPERIENCE THAILAND WITH OUR EXCLUSIVE PRIVILEGES
          </h2>
          <hr className={styles.hr} data-aos="fade-left" />
          <p className={styles.description} data-aos="fade-left">
            The warm tropical climate of Thailand is a significant attraction,
            offering generally pleasant weather that allows for outdoor
            activities throughout the year, despite occasional humidity.
          </p>
          <div className={styles.services}>
            <div className={styles.service}>
              <div className={styles.airportImgDiv} data-aos="flip-up">
                <div className={styles.svg_container}>
                  <Image
                    src="/airport.svg"
                    alt="Exclusive Benefits"
                    className={styles.service_icon}
                    data-aos="zoom-in"
                    width={57}
                    height={57}
                    // style={{
                    //   // width: "100%",
                    //   height: "auto",
                    // }}
                    layout="responsive"
                  />
                </div>
                <div>
                  <h3 className={styles.service_title}>Airport VIP Service</h3>
                </div>
              </div>
              {/* <hr className={styles.service_hr} /> */}
              <div className={styles.airportParaDiv}>
                <p className={styles.service_description} data-aos="fade-left">
                  Enjoy fast-track immigration and personal assistance at Thai
                  airports, ensuring a seamless arrival and departure
                  experience.
                </p>
              </div>
            </div>
            <div className={styles.service}>
              <div className={styles.airportImgDiv} data-aos="flip-up">
                <div className={styles.svg_container}>
                  <Image
                    src="/body-massage.svg"
                    alt="Thailand Privilege Card"
                    className={styles.service_icon}
                    data-aos="zoom-in"
                    width={48}
                    height={48}
                    // style={{
                    //   // width: "100%",
                    //   height: "auto",
                    // }}
                    layout="responsive"
                  />
                </div>
                <div>
                  <h3 className={styles.service_title}>
                    Health & Spa Benefits
                  </h3>
                </div>
              </div>
              {/* <hr className={styles.service_hr} /> */}
              <div className={styles.airportParaDiv}>
                <p className={styles.service_description} data-aos="fade-left">
                  Prioritize your wellness with annual health check-ups and
                  indulgent spa treatments at Thailand’s premier facilities
                </p>
              </div>
            </div>
          </div>
          <div className={styles.button_container} data-aos="zoom-in">
            <Link
              href="https://www.thailandprivilege.co.th/why-thailand"
              target="_blank"
            >
              <button className={styles.btn} aria-label="Close">
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
                <span>More Details</span>
              </button>
              {/* <button className={styles.button}>More Details</button> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
