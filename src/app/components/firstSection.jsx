import React, { useEffect } from "react";
import styles from "./../styles/firstSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const FirstSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div className={styles.heading}>
            <div className={styles.main_heading} data-aos="fade-down">
              <h1>UNLOCK EXCLUSIVE LONG-TERM VISA PRIVILEGES IN THAILAND</h1>
            </div>
          </div>
          <div className={styles.all_images}>
            <div className={styles.main_image_container}>
              {/* <Link href="/medical">
                <div className={styles.thailand_svg} data-aos="fade-left">
                  <Image
                    src="/thai_miniSvg.svg"
                    alt="logo"
                    width={132}
                    height={135}
                    style={{
                      // width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </Link> */}
              <Image
                className={styles.main_thailand_image}
                src="/home/Thailand Privilege.webp"
                alt="Thailand Privilege Residence Program"
                data-aos="fade-down"
                width={1091}
                height={292}
                layout="responsive"

                // style={{
                //   width: "100%",
                //   height: "auto",
                // }}
              />
            </div>

            <div className={styles.sub_image_container}>
              <div className={styles.sub_image}>
                <div className={styles.svg}>
                  <Image
                    src="/pin_svg.svg"
                    alt="logo"
                    data-aos="fade-right"
                    width={76}
                    height={72}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                <div className={styles.homeImgDiv} data-aos="fade-right">
                  <Image
                    src="/home/Privilege Image 1.webp"
                    alt="Thai Elite Visa"
                    className={styles.homeImg}
                    width={420}
                    height={201}
                    layout="responsive"

                    // style={{
                    //   width: "100%",
                    //   height: "auto",
                    // }}
                  />
                </div>
              </div>

              <div className={styles.sub_image}>
                <div className={styles.svg}>
                  <Image
                    src="/pin_svg.svg"
                    alt="logo"
                    data-aos="fade-right"
                    width={76}
                    height={72}
                    // style={{
                    //   width: "100%",
                    //   height: "auto",
                    // }}
                    layout="responsive"
                  />
                </div>
                <div className={styles.homeImgDiv} data-aos="fade-up">
                  <Image
                    src="/home/Privilege Image 2.webp"
                    alt="Thai Retirement Visa"
                    className={styles.homeImg}
                    width={420}
                    height={201}
                    layout="responsive"

                    // style={{
                    //   width: "100%",
                    //   height: "auto",
                    // }}
                  />
                </div>
              </div>

              <div className={styles.sub_image}>
                <div className={styles.svg}>
                  <Image
                    src="/pin_svg.svg"
                    alt="logo"
                    data-aos="fade-right"
                    width={76}
                    height={72}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                <div className={styles.homeImgDiv} data-aos="fade-left">
                  <Image
                    src="/home/Privilege Image 3.webp"
                    alt="Thailand Investment Visa"
                    className={styles.homeImg}
                    width={420}
                    height={201}
                    layout="responsive"
                    // style={{
                    //   width: "100%",
                    //   height: "auto",
                    // }}
                  />
                </div>
              </div>
              {/* <div className={styles.homeImgDiv}>
                <img src="./Privilege Image 3.png" className={styles.homeImg} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
