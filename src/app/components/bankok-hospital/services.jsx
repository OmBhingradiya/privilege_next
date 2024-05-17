import React, { useState } from "react";
import styles from "./../../styles/bankok-hospital/services.module.css";
import Link from "next/link";
import Image from "next/image";
import NewsSlider from "../subComponents/newsSlider";

const Services = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const handleHover = (sectionId) => {
    setHoveredSection(sectionId);
  };
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
                  <div
                    className={styles.grid_image}
                    onMouseEnter={() => handleHover(1)}
                    onMouseLeave={() => handleHover(null)}
                  >
                    <Image
                      width={58}
                      height={52}
                      alt="services"
                      style={{
                        transform:
                          hoveredSection === 1 ? "scale(1.2)" : "scale(1)",
                        transition: "transform 0.3s ease",
                      }}
                      src={
                        hoveredSection === 1
                          ? "bankok_hospital/hoverd/heart.svg"
                          : "bankok_hospital/heart.svg"
                      }
                    />
                  </div>
                  <div className={styles.grid_text}>
                    <Link href="https://www.bangkokhospital.com/en/center-clinic/heart">
                      <p>Heart</p>
                    </Link>
                  </div>
                </div>
                <div className={styles.grid_section}>
                  <div
                    className={styles.grid_image}
                    onMouseEnter={() => handleHover(2)}
                    onMouseLeave={() => handleHover(null)}
                  >
                    <Image
                      width={58}
                      height={52}
                      src={
                        hoveredSection === 2
                          ? "bankok_hospital/hoverd/cancer.svg"
                          : "bankok_hospital/cancer.svg"
                      }
                      style={{
                        transform:
                          hoveredSection === 2 ? "scale(1.2)" : "scale(1)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                  <div className={styles.grid_text}>
                    <Link href="https://www.bangkokhospital.com/en/center-clinic/cancer">
                      <p>Cancer</p>
                    </Link>
                  </div>
                </div>
                <div className={styles.grid_section}>
                  <div
                    className={styles.grid_image}
                    onMouseEnter={() => handleHover(3)}
                    onMouseLeave={() => handleHover(null)}
                  >
                    <Image
                      width={58}
                      height={52}
                      src={
                        hoveredSection === 3
                          ? "bankok_hospital/hoverd/bone.svg"
                          : "bankok_hospital/bone.svg"
                      }
                      style={{
                        transform:
                          hoveredSection === 3 ? "scale(1.2)" : "scale(1)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                  <div className={styles.grid_text}>
                    <Link href="https://www.bangkokhospital.com/en/center-clinic/bone-joint">
                      <p>Bone</p>
                    </Link>
                  </div>
                </div>
                <div className={styles.grid_section}>
                  <div
                    className={styles.grid_image}
                    onMouseEnter={() => handleHover(4)}
                    onMouseLeave={() => handleHover(null)}
                  >
                    <Image
                      width={58}
                      height={52}
                      src={
                        hoveredSection === 4
                          ? "bankok_hospital/hoverd/brain.svg"
                          : "bankok_hospital/brain.svg"
                      }
                      style={{
                        transform:
                          hoveredSection === 4 ? "scale(1.2)" : "scale(1)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                  <div className={styles.grid_text}>
                    <Link href="https://www.bangkokhospital.com/en/center-clinic/brain">
                      <p>Brain</p>
                    </Link>
                  </div>
                </div>
                <div className={styles.grid_section}>
                  <div
                    className={styles.grid_image}
                    onMouseEnter={() => handleHover(5)}
                    onMouseLeave={() => handleHover(null)}
                  >
                    <Image
                      width={58}
                      height={52}
                      src={
                        hoveredSection === 5
                          ? "bankok_hospital/hoverd/trauma.svg"
                          : "bankok_hospital/trauma.svg"
                      }
                      style={{
                        transform:
                          hoveredSection === 5 ? "scale(1.2)" : "scale(1)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                  <div className={styles.grid_text}>
                    <Link href="https://www.bangkokhospital.com/en/center-clinic/trauma">
                      <p>Trauma</p>
                    </Link>
                  </div>
                </div>
                <div className={styles.grid_section}>
                  <div
                    className={styles.grid_image}
                    onMouseEnter={() => handleHover(6)}
                    onMouseLeave={() => handleHover(null)}
                  >
                    <Image
                      width={58}
                      height={52}
                      src={
                        hoveredSection === 6
                          ? "bankok_hospital/hoverd/surgery.svg"
                          : "bankok_hospital/surgery.svg"
                      }
                      style={{
                        transform:
                          hoveredSection === 6 ? "scale(1.2)" : "scale(1)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                  <div className={styles.grid_text}>
                    <Link href="https://www.bangkokhospital.com/en/center-clinic/surgery">
                      <p>Surgery</p>
                    </Link>
                  </div>
                </div>
                <div className={styles.grid_section}>
                  <div
                    className={styles.grid_image}
                    onMouseEnter={() => handleHover(7)}
                    onMouseLeave={() => handleHover(null)}
                  >
                    <Image
                      width={58}
                      height={52}
                      src={
                        hoveredSection === 7
                          ? "bankok_hospital/hoverd/more.svg"
                          : "bankok_hospital/more.svg"
                      }
                      style={{
                        transform:
                          hoveredSection === 7 ? "scale(1.2)" : "scale(1)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                  <div className={styles.grid_text}>
                    <Link href="https://www.bangkokhospital.com/en/center-clinic">
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
