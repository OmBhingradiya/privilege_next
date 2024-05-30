import React, { useState } from "react";
import styles from "./../../styles/bankok-hospital/lastSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

const PacakagePromotion = () => {
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
              <h2 data-aos="fade-down">
                Packages{" "}
                <span
                  style={{
                    fontFamily: "Playfair Display, sans-serif",
                  }}
                >
                  &
                </span>{" "}
                Promotions{" "}
              </h2>
              <hr className={styles.main_hr} data-aos="fade-down" />
            </div>
            <div className={styles.grid}>
              <div className={styles.subGrid}>
                <div
                  className={styles.gridImage}
                  onMouseEnter={() => handleHover(1)}
                  onMouseLeave={() => handleHover(null)}
                >
                  <Image
                    width={58}
                    height={52}
                    alt="Vaccine"
                    style={{
                      transform:
                        hoveredSection === 1 ? "scale(1.2)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                    src={
                      hoveredSection === 1
                        ? "bankok_hospital/hoverd/Frame-1.svg"
                        : "bankok_hospital/Frame (12).svg"
                    }
                  />
                </div>
                <div className={styles.grid_text}>
                  <Link
                    target="_blank"
                    href="https://www.bangkokhospital.com/en/package?selectedCategory=vaccine-and-supplement"
                  >
                    <p>Vaccine</p>
                  </Link>
                </div>
              </div>
              <div className={styles.subGrid}>
                <div
                  className={styles.gridImage}
                  onMouseEnter={() => handleHover(2)}
                  onMouseLeave={() => handleHover(null)}
                >
                  <Image
                    width={58}
                    height={52}
                    alt="Surgery"
                    style={{
                      transform:
                        hoveredSection === 2 ? "scale(1.2)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                    src={
                      hoveredSection === 2
                        ? "bankok_hospital/hoverd/Frame-2.svg"
                        : "bankok_hospital/Group.svg"
                    }
                  />
                </div>
                <div className={styles.grid_text}>
                  <Link
                    target="_blank"
                    href="https://www.bangkokhospital.com/en/package?selectedCategory=surgery-and-treatment"
                  >
                    <p>Surgery</p>
                  </Link>
                </div>
              </div>
              <div className={styles.subGrid}>
                <div
                  className={styles.gridImage}
                  onMouseEnter={() => handleHover(3)}
                  onMouseLeave={() => handleHover(null)}
                >
                  <Image
                    width={58}
                    height={52}
                    alt="Check-up"
                    style={{
                      transform:
                        hoveredSection === 3 ? "scale(1.2)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                    src={
                      hoveredSection === 3
                        ? "bankok_hospital/hoverd/Frame.svg"
                        : "bankok_hospital/Frame (13).svg"
                    }
                  />
                </div>
                <div className={styles.grid_text}>
                  <Link
                    target="_blank"
                    href="https://www.bangkokhospital.com/en/package?selectedCategory=health-check-up"
                  >
                    <p>Check-up</p>
                  </Link>
                </div>
              </div>
              <div className={styles.subGrid}>
                <div
                  className={styles.gridImage}
                  onMouseEnter={() => handleHover(4)}
                  onMouseLeave={() => handleHover(null)}
                >
                  <Image
                    width={58}
                    height={52}
                    alt="Dental"
                    style={{
                      transform:
                        hoveredSection === 4 ? "scale(1.2)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                    src={
                      hoveredSection === 4
                        ? "bankok_hospital/hoverd/Frame-3.svg"
                        : "bankok_hospital/Frame (14).svg"
                    }
                  />
                </div>
                <div className={styles.grid_text}>
                  <Link
                    target="_blank"
                    href="https://www.bangkokhospital.com/en/package?selectedCategory=dental"
                  >
                    <p>Dental</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.promotion_container}>
              <div className={styles.health_viewAll}>
                <Link
                  href="https://www.bangkokhospital.com/en/package"
                  target="_blank"
                >
                  <p>
                    View All{" "}
                    <span className={styles.health_rightArrow}>
                      <HiOutlineArrowRight />
                    </span>
                  </p>
                </Link>
              </div>
              <div className={styles.flex}>
                <div className={styles.flexBox}>
                  <div className={styles.flexImage_container}>
                    <img
                      src="/bankok_hospital/Rectangle 647.webp"
                      alt="img"
                      className={styles.flexImage}
                    />
                  </div>
                  <div className={styles.flexBoxContent}>
                    <h3 className={styles.flexHead}>
                      DO NOT MISS OUT! Vaccine Promotions For Seniors
                    </h3>
                    <p className={styles.flexContent}>
                      When reaching age 50+, immune system undergoes dramatic
                      aging-related changes. Boost up immunity in the elderly to
                      prevent infections and reduce disease severity with
                      essential vaccines.
                    </p>
                    <div className={styles.buttonDiv}>
                      <button className={styles.btn}>
                        <Link
                          href="https://www.bangkokhospital.com/en/package/promotion-elderly-vaccine"
                          target="_blank"
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
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.flexBox}>
                  <div className={styles.flexImage_container}>
                    <img
                      src="/bankok_hospital/Rectangle 656.webp"
                      alt="img"
                      className={styles.flexImage}
                    />
                  </div>
                  <div className={styles.flexBoxContent}>
                    <h3 className={styles.flexHead}>
                      Kidney Health Screening{" "}
                    </h3>
                    <p className={styles.flexContent}>
                      “Swollen body, swollen leg and feet, cramping, frequent
                      urination, diabetes and hypertension”. Do not overlook
                      these warning signs of KIDNEY DISEASE.
                    </p>
                    <div className={styles.buttonDiv}>
                      <button className={styles.btn}>
                        <Link
                          href="https://www.bangkokhospital.com/en/package/kidney-disease-risk-screening"
                          target="_blank"
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
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.flexBox}>
                  <div className={styles.flexImage_container}>
                    <img
                      src="/bankok_hospital/Rectangle 659.webp"
                      alt="img"
                      className={styles.flexImage}
                    />
                  </div>
                  <div className={styles.flexBoxContent}>
                    <h3 className={styles.flexHead}>
                      Health Check-Up Packages{" "}
                    </h3>
                    <p className={styles.flexContent}>
                      HEALTH DESIGN CENTER | In order to prevent the
                      transmission of COVID-19 and maintain social distancing,
                      please make an appointment at least 3 days in advance.
                    </p>
                    <div className={styles.buttonDiv}>
                      <button className={styles.btn}>
                        <Link
                          href="https://www.bangkokhospital.com/en/package/health-check-up-packages"
                          target="_blank"
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
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PacakagePromotion;
