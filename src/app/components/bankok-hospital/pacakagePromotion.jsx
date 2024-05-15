import React from "react";
import styles from "./../../styles/bankok-hospital/lastSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

const PacakagePromotion = () => {
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
                <div className={styles.gridImage}>
                  <Image
                    width={58}
                    height={52}
                    alt="Vaccine"
                    src="/bankok_hospital/Frame (12).svg"
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
                <div className={styles.gridImage}>
                  <Image
                    width={58}
                    height={52}
                    alt="Surgery"
                    src="/bankok_hospital/Group.svg"
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
                <div className={styles.gridImage}>
                  <Image
                    width={58}
                    height={52}
                    alt="Check-up"
                    src="/bankok_hospital/Frame (13).svg"
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
                <div className={styles.gridImage}>
                  <Image
                    width={58}
                    height={52}
                    alt="Dental"
                    src="/bankok_hospital/Frame (14).svg"
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
                <p>
                  View All{" "}
                  <span className={styles.health_rightArrow}>
                    <HiOutlineArrowRight />
                  </span>
                </p>
              </div>
              <div className={styles.flex}>
                <div className={styles.flexBox}>
                  <div>
                    <img
                      src="/bankok_hospital/Rectangle 647.png"
                      alt="img"
                      className={styles.flexImage}
                    />
                  </div>
                  <div className={styles.flexBoxContent}>
                    <h3 className={styles.flexHead}>
                      DO NOT MISS OUT! Vaccine Promotions For Seniors
                    </h3>
                    <p className={styles.flexContent}>
                      When Reaching Age 50+, Immune System Undergoes Dramatic
                      Aging-Related ....
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
                  <div>
                    <img
                      src="/bankok_hospital/Rectangle 656.png"
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
                      urination, diabetes ....
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
                  <div>
                    <img
                      src="/bankok_hospital/Rectangle 659.png"
                      alt="img"
                      className={styles.flexImage}
                    />
                  </div>
                  <div className={styles.flexBoxContent}>
                    <h3 className={styles.flexHead}>
                      Health Check-Up Packages{" "}
                    </h3>
                    <p className={styles.flexContent}>
                      Bangkok Health Check-up Center | Bangkok Hospital Thailand
                      ..
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
