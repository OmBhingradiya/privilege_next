import React, { useEffect } from "react";
import styles from "./../../styles/tours&hotels/specialDeal.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const SpecialDeal = () => {
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
            <h2 data-aos="fade-down">TOUR</h2>
          </div>
          <hr className={styles.main_hr} data-aos="fade-down" />
          <p className={styles.main_text} data-aos="fade-down">
            We offer custom tour packages in Thailand for underprivileged
            individuals and tourists. Contact us to join a group tour or create
            a tailored itinerary.
          </p>
          <div className={styles.specialDeal_main_container}>
            <div className={styles.image_container} data-aos="fade-right">
              <Image
                width={477}
                height={477}
                layout="responsive"
                src="/tours&hotel/specialDeal_1.png"
                alt="special deal offer 1"
              />
            </div>
            <div className={styles.image_container} data-aos="fade-up">
              <Image
                width={477}
                height={477}
                layout="responsive"
                src="/tours&hotel/specialDeal_2.png"
                alt="special deal offer 2"
              />
            </div>
            <div className={styles.image_container} data-aos="fade-left">
              <Image
                width={477}
                height={477}
                layout="responsive"
                src="/tours&hotel/specialDeal_3.png"
                alt="special deal offer 3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialDeal;
