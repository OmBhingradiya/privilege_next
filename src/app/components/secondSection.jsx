import React, { useEffect } from "react";
import styles from "./../styles/membership/secondSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const SecondSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.main_heading} data-aos="fade-down">
          <h2>YOUR FREEDOM OF CHOICE TO ENDLESS PRIVILEGES</h2>
        </div>
        <hr className={styles.main_hr} data-aos="fade-down" />
        <p className={styles.main_text} data-aos="fade-down">
          Embark on a journey of boundless freedom and exclusive privileges with
          Golden Privilege&apos;s world-class residency program in Thailand,
          unlocking unparalleled Thai lifestyle opportunities.
        </p>
      </div>

      <div className={styles.video_container}>
        <div className={styles.inner_video_container}>
          <ReactPlayer
            url="https://cms.thailandprivilege.co.th/stocks/home_banner/o0x0/tu/zr/hov7tuzr69n/Thailand-Privilage-(15sec).mp4"
            width="100%"
            height="auto"
            controls={true}
            playing={true}
            muted={true}
            className={styles.main_video}
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload",
                },
                tracks: [
                  {
                    kind: "captions",
                    srcLang: "en",
                    default: true,
                  },
                ],
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
