import React, { useEffect } from "react";
import styles from "./../../styles/tours&hotels/travelTheme.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

const TravelTheme = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div className={styles.main_heading}>
            <h2 data-aos="fade-down">TRAVEL THEME</h2>
          </div>
          <hr className={styles.main_hr} data-aos="fade-down" />
          <div className={styles.travelTheme_main_container}>
            <div className={styles.travelTheme_box}>
              <Link
                href="https://thaiunikatravel.com/travel_theme_category/cruises"
                target="_blank"
              >
                <div className={styles.travelTheme_image_container}>
                  <Image
                    src="/tours&hotel/travelTheme_1.webp"
                    alt="travel theme 1"
                    width={357}
                    height={257}
                    layout="responsive"
                  />
                </div>
                <p>CRUISES</p>
              </Link>
            </div>
            <div className={styles.travelTheme_box}>
              <Link
                href="https://thaiunikatravel.com/travel_theme_category/cruises"
                target="_blank"
              >
                <div className={styles.travelTheme_image_container}>
                  <Image
                    src="/tours&hotel/travelTheme_2.webp"
                    alt="travel theme 2"
                    width={357}
                    height={257}
                    layout="responsive"
                  />
                </div>
                <p>CLASSIC HIGHLIGHTS</p>
              </Link>
            </div>
            <div className={styles.travelTheme_box}>
              <Link
                href="https://thaiunikatravel.com/travel_theme_category/lux-honeymoon"
                target="_blank"
              >
                <div className={styles.travelTheme_image_container}>
                  <Image
                    src="/tours&hotel/travelTheme_3.webp"
                    alt="travel theme 3"
                    width={357}
                    height={257}
                    layout="responsive"
                  />
                </div>
                <p>LUX & HONEYMOON</p>
              </Link>
            </div>
            <div className={styles.travelTheme_box}>
              <Link
                href="https://thaiunikatravel.com/travel_theme_category/multi-countries-tours"
                target="_blank"
              >
                <div className={styles.travelTheme_image_container}>
                  <Image
                    src="/tours&hotel/travelTheme_4.webp"
                    alt="travel theme 4"
                    width={357}
                    height={257}
                    layout="responsive"
                  />
                </div>
                <p>MULTI-COUNTRIES TOURS</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelTheme;
