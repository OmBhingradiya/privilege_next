import React, { useEffect } from "react";
import styles from "./../../styles/medical/secondSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

const SecondSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <p className={styles.main_text} data-aos="fade-down">
          We represent Bangkok Hospital, Thailand, Worldwide. Our services are
          free for medical visitors and patients. Email us for help and
          assistance.
        </p>
        <div className={styles.inner_container}>
          <div className={styles.main_box} data-aos="fade-up-right">
            <div className={styles.main_inner_box}>
              <Link
                href="https://www.bangkokhospital.com/en/appointment?step=1"
                target="_blank"
              >
                <div className={styles.svg_icon}>
                  <Image
                    src="/pin_svg.svg"
                    alt="logo"
                    width={73}
                    height={70}
                    layout="responsive"
                  />
                </div>
                <div className={styles.box_text}>
                  <p>
                    expert consultation guidance and make a doctor’s
                    Appointment 
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.main_box} data-aos="fade-down-right">
            <div className={styles.main_inner_box}>
              <Link
                href="https://www.bangkokhospital.com/en/doctor"
                target="_blank"
              >
                <div className={styles.svg_icon}>
                  <Image
                    src="/pin_svg.svg"
                    alt="logo"
                    width={73}
                    height={70}
                    layout="responsive"
                  />
                </div>
                <div className={styles.box_text}>
                  <p>Find a Doctor and estimate treatment cost</p>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.main_box} data-aos="fade-down-left">
            <div className={styles.main_inner_box}>
              <Link
                href="https://www.bangkokhospital.com/en/contact/"
                target="_blank"
              >
                <div className={styles.svg_icon}>
                  <Image
                    src="/pin_svg.svg"
                    alt="logo"
                    width={73}
                    height={70}
                    layout="responsive"
                  />
                </div>
                <div className={styles.box_text}>
                  <p>Contact Us anytime</p>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.main_box} data-aos="fade-up-left">
            <div className={styles.main_inner_box}>
              <Link
                href="https://www.bangkokhospital.com/en/package"
                target="_blank"
              >
                <div className={styles.svg_icon}>
                  <Image
                    src="/pin_svg.svg"
                    alt="logo"
                    width={73}
                    height={70}
                    layout="responsive"
                  />
                </div>
                <div className={styles.box_text}>
                  <p>get your Packages</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondSection;
