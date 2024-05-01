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
          We represent MedPark Hospital, Thailand worldwide. Our services are
          free for all medical visitors and patients. Email us for help and
          support.
        </p>
        <div className={styles.inner_container}>
          <div className={styles.main_box} data-aos="fade-up-right">
            <div className={styles.main_inner_box}>
              <Link
                href="https://www.medparkhospital.com/en-US/appointment?step=1"
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
                    Expert consultation guidance and make a doctor’s
                    appointment.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.main_box} data-aos="fade-down-right">
            <div className={styles.main_inner_box}>
              <Link
                href="https://www.medparkhospital.com/en-US/doctors"
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
                  <p>Find a doctor and estimate treatment cost.</p>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.main_box} data-aos="fade-down-left">
            <div className={styles.main_inner_box}>
              <Link
                href="https://www.medparkhospital.com/en-US/contact-us"
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
                  <p>Contact us anytime.</p>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.main_box} data-aos="fade-up-left">
            <div className={styles.main_inner_box}>
              <Link
                href="https://www.medparkhospital.com/en-US/static/visitor-guide"
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
                  <p>Get your visitor guide by email.</p>
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
