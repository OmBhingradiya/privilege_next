import React, { useState } from "react";
import styles from "./../../styles/bankok-hospital/lastSection.module.css";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const handleHover = (sectionId) => {
    setHoveredSection(sectionId);
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div className={styles.container_main}>
            <div className={styles.about_main_heading}>
              <h2 data-aos="fade-down" className={styles.aboutHead}>
                ABOUT US
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
                    alt="Our Story"
                    style={{
                      transform:
                        hoveredSection === 1 ? "scale(1.2)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                    src={
                      hoveredSection === 1
                        ? "bankok_hospital/hoverd/Group-1.svg"
                        : "bankok_hospital/Group (1).svg"
                    }
                  />
                </div>
                <div className={styles.grid_text}>
                  <Link
                    target="_blank"
                    href="https://www.bangkokhospital.com/en/about-us/our-story"
                  >
                    <p>Our Story</p>
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
                    alt="News & Events"
                    style={{
                      transform:
                        hoveredSection === 2 ? "scale(1.2)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                    src={
                      hoveredSection === 2
                        ? "bankok_hospital/hoverd/Group-2.svg"
                        : "bankok_hospital/Group (2).svg"
                    }
                  />
                </div>
                <div className={styles.grid_text}>
                  <Link
                    target="_blank"
                    href="https://www.bangkokhospital.com/en/news-events"
                  >
                    <p>News & Events</p>
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
                    alt="Room Rates"
                    style={{
                      transform:
                        hoveredSection === 3 ? "scale(1.2)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                    src={
                      hoveredSection === 3
                        ? "bankok_hospital/hoverd/Group-3.svg"
                        : "bankok_hospital/Group (3).svg"
                    }
                  />
                </div>
                <div className={styles.grid_text}>
                  <Link
                    target="_blank"
                    href="https://www.bangkokhospital.com/en/visit/room-rate?selectedType=standard&selectedDetail=standard-ward-8c"
                  >
                    <p>Room Rates</p>
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
                    alt="Map"
                    style={{
                      transform:
                        hoveredSection === 4 ? "scale(1.2)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                    src={
                      hoveredSection === 4
                        ? "bankok_hospital/hoverd/Group-4.svg"
                        : "bankok_hospital/Group (4).svg"
                    }
                  />
                </div>
                <div className={styles.grid_text}>
                  <Link
                    target="_blank"
                    href="https://www.bangkokhospital.com/en/visit/map"
                  >
                    <p>Map</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.main_box}>
            <div className={styles.box_name}>
              <p>Bangkok Hospital Campus</p>
            </div>
            <div className={styles.flexImageLogo}>
              <div className={styles.imageLogo}>
                <img src="/bankok_hospital/bht 1.svg" alt="heart" />
              </div>
              <div>
                <hr className={styles.hr} />
              </div>
              <div className={styles.imageLogo}>
                <img src="/bankok_hospital/bih 1.svg" alt="heart" />
              </div>
              <div>
                <hr className={styles.hr2} />
              </div>
              <div className={styles.imageLogo}>
                <img src="/bankok_hospital/wsh 1.svg" alt="heart" />
              </div>
              <div>
                <hr className={styles.hr} />
              </div>
              <div className={styles.imageLogo}>
                <img src="/bankok_hospital/chiva 1.svg" alt="heart" />
              </div>
            </div>
          </div>

          <div className={styles.award_container}>
            <div className={styles.about_main_heading}>
              <h2 data-aos="fade-down" className={styles.aboutHead}>
                Awards Accreditations
              </h2>
              <hr className={styles.main_hr} data-aos="fade-down" />
            </div>
            <div className={styles.award_main_box}>
              <div className={styles.award_image}>
                <img src="/bankok_hospital/accreditation1.svg" alt="award" />
              </div>
              <div className={styles.award_image}>
                <img src="/bankok_hospital/accreditation2.svg" alt="award" />
              </div>
              <div className={styles.award_image}>
                <img src="/bankok_hospital/accreditation3.svg" alt="award" />
              </div>
              <div className={styles.award_image}>
                <img src="/bankok_hospital/accreditation4.svg" alt="award" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.connected_container}>
          <p className={styles.connected_text}>Stay Connected</p>
          <div className={styles.connected_button_container}>
            <div className={styles.connected_button}>
              <button>
                <Link
                  target="_blank"
                  href="https://www.bangkokhospital.com/en/newsletter"
                >
                  Subscribe E-Newsletter
                </Link>
              </button>
            </div>
            <div className={styles.connected_button}>
              <button>
                <Link
                  target="_blank"
                  href="https://www.bangkokhospital.com/en/contact/?go=suggestion"
                >
                  Feedback{" "}
                  <span
                    style={{
                      fontFamily: "Playfair Display, sans-serif",
                    }}
                  >
                    &
                  </span>{" "}
                  Suggestion
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
