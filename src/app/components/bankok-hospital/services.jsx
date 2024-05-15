import React from "react";
import styles from "./../../styles/bankok-hospital/services.module.css";
import Link from "next/link";
import Image from "next/image";
import NewsSlider from "../subComponents/newsSlider";

const Services = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div className={styles.first_container}>
            <div className={styles.main_heading}>
              <h2 data-aos="fade-down">our services</h2>
            </div>
            <hr className={styles.main_hr} data-aos="fade-down" />

            <div className={styles.destination_main_container}>
              <div className={styles.gird_container}>
                <div className={styles.grid_section}>
                  <div className={styles.grid_image}>
                    <Image
                      width={58}
                      height={52}
                      style={{
                        height: "auto",
                      }}
                      alt="services"
                      src="bankok_hospital/heart.svg"
                    />
                  </div>
                  <div className={styles.grid_text}>
                    <Link href="https://www.bangkokhospital.com/en/center-clinic/heart">
                      <p>Heart</p>
                    </Link>
                  </div>
                </div>
                <div className={styles.grid_section}>
                  <div className={styles.grid_image}>
                    <img src="bankok_hospital/cancer.svg" />
                  </div>
                  <div className={styles.grid_text}>
                    <Link href="https://www.bangkokhospital.com/en/center-clinic/heart">
                      <p>Cancer</p>
                    </Link>
                  </div>
                </div>
                <div className={styles.grid_section}>
                  <div className={styles.grid_image}>
                    <img src="bankok_hospital/bone.svg" />
                  </div>
                  <div className={styles.grid_text}>
                    <Link href="https://www.bangkokhospital.com/en/center-clinic/heart">
                      <p>Bone</p>
                    </Link>
                  </div>
                </div>
                <div className={styles.grid_section}>
                  <div className={styles.grid_image}>
                    <img src="bankok_hospital/brain.svg" />
                  </div>
                  <div className={styles.grid_text}>
                    <Link href="https://www.bangkokhospital.com/en/center-clinic/heart">
                      <p>Brain</p>
                    </Link>
                  </div>
                </div>
                <div className={styles.grid_section}>
                  <div className={styles.grid_image}>
                    <img src="bankok_hospital/trauma.svg" />
                  </div>
                  <div className={styles.grid_text}>
                    <Link href="https://www.bangkokhospital.com/en/center-clinic/heart">
                      <p>Trauma</p>
                    </Link>
                  </div>
                </div>
                <div className={styles.grid_section}>
                  <div className={styles.grid_image}>
                    <img src="bankok_hospital/surgery.svg" />
                  </div>
                  <div className={styles.grid_text}>
                    <Link href="https://www.bangkokhospital.com/en/center-clinic/heart">
                      <p>Surgery</p>
                    </Link>
                  </div>
                </div>
                <div className={styles.grid_section}>
                  <div className={styles.grid_image}>
                    <img src="bankok_hospital/more.svg" />
                  </div>
                  <div className={styles.grid_text}>
                    <Link href="https://www.bangkokhospital.com/en/center-clinic/heart">
                      <p>More</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.second_container}>
              <NewsSlider props={"bangkok"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
