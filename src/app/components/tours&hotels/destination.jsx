import React, { useEffect } from "react";
import styles from "./../../styles/tours&hotels/destination.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Destination = () => {
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
            <h2 data-aos="fade-down">DESTINATIONS</h2>
          </div>
          <hr className={styles.main_hr} data-aos="fade-down" />
          <div className={styles.destination_main_container}>
            <div className={styles.destination_box} data-aos="fade-right">
              <div className={styles.destination_image}>
                <Image
                  src="/tours&hotel/destination_1.webp"
                  alt="destination 1"
                  width={355}
                  height={273}
                  layout="responsive"
                />
              </div>
              <div className={styles.destination_desc}>
                <h2 data-aos="zoom-in-down">CENTER</h2>
                <p data-aos="fade-down" data-aos-duration="2000">
                  The Center Thailand is still an attractive region for foreign
                  travelers with very famous sites such as Bangkok, Ayutthaya,
                  Samut Songkhram. Its Central Plains region, traversed by the
                  Chao Praya River, is considered the cradle of…
                </p>
              </div>
            </div>
            <div className={styles.destination_box2} data-aos="fade-left">
              <div className={styles.destination_image2}>
                <Image
                  src="/tours&hotel/destination_3.webp"
                  alt="destination 2"
                  width={355}
                  height={273}
                  layout="responsive"
                />
              </div>
              <div className={styles.destination_desc}>
                <h2 data-aos="zoom-in-down">NORTH</h2>
                <p data-aos="fade-down" data-aos-duration="2000">
                  Northern Thailand is an ideal place for those who love nature
                  and want to escape from urban life. It has a maze of mountains
                  and rivers, and also a crossroads, one of the oldest in Asia.
                </p>
              </div>
            </div>
            <div className={styles.destination_box} data-aos="fade-right">
              <div className={styles.destination_image}>
                <Image
                  src="/tours&hotel/destination_2.webp"
                  alt="destination 3"
                  width={355}
                  height={273}
                  layout="responsive"
                />
              </div>
              <div className={styles.destination_desc}>
                <h2 data-aos="zoom-in-down">EAST</h2>
                <p data-aos="fade-down" data-aos-duration="2000">
                  This region has a big economic influence on the country. This
                  is Thailand’s main source of gems. So you can buy them easily
                  in the local market. Discover the beauty, culture and history
                  of the area by visiting Chanthaburi, Lalu or relaxing at
                  Pattaya Beach.
                </p>
              </div>
            </div>
            <div className={styles.destination_box2} data-aos="fade-left">
              <div className={styles.destination_image2}>
                <Image
                  src="/tours&hotel/destination_4.webp"
                  alt="destination 4"
                  width={355}
                  height={273}
                  layout="responsive"
                />
              </div>
              <div className={styles.destination_desc}>
                <h2 data-aos="zoom-in-down">WEST</h2>
                <p data-aos="fade-down" data-aos-duration="2000">
                  Western Thailand is a region of Thailand bordering Myanmar on
                  the west, Southern Thailand on the south, and central Thailand
                  on the east.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
