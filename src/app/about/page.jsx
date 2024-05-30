"use client";

import styles from "./../styles/about.module.css";
import HeroSection from "./../components/membership/heroSection.jsx";
import AboutSlider from "../components/subComponents/aboutSlider.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <div className="mainPage_class">
        <HeroSection data={"About"} />
        {/* ==================Second Section ======================== */}
        <div>
          <div className={styles.secondSection_container}>
            <div
              className={styles.secondSection_main_heading}
              data-aos="zoom-in"
            >
              <h2>
                Endless privileges await within the freedom of your choices
              </h2>
            </div>
            <hr className={styles.secondSection_main_hr} data-aos="zoom-in" />
            <p className={styles.secondSection_first_text} data-aos="zoom-out">
              We are an internationally authorized agent for the Thailand
              Privilege Visa Card Co., in partnership with the Ministry of
              Tourism and Sports (TAT). Our services include free consultations,
              guidance, and assistance for the Thailand Long-Term Privilege
              Residence Program.
            </p>
            <p className={styles.secondSection_first_text} data-aos="zoom-out">
              Furthermore, we represent MedPark Hospital and Bangkok hospital
              globally, offering complimentary services to all medical visitors
              and patients. Additionally, we provide tailored tour packages for
              underprivileged individuals and tourists. Please get in touch with
              us to join a group tour or create a custom itinerary.
            </p>
            <p className={styles.secondSection_first_text} data-aos="zoom-out">
              Moreover, we represent several 3 to 5-star hotels in Thailand,
              offering free consultations, personalized guidance, and hotel
              bookings tailored to your budget.
            </p>
          </div>
        </div>
        {/* ==================Second Section End ======================== */}
        {/* ================================================================ */}
        <div className={styles.uniquenessMainDiv}>
          <div className={styles.uniquenessSubDiv}>
            <div className={styles.roundSvgDiv} data-aos="fade-down">
              <Image
                width={132}
                height={135}
                alt="logo"
                layout="responsive"
                src="/pin_svg.svg"
              />
            </div>
            <div className={styles.uniqueDiv}>
              <div className={styles.uniqueImgsDiv}>
                <div className={styles.uniquenessFirstPart}>
                  <Image
                    src="/uniquenessImg.webp"
                    width={611}
                    height={746}
                    alt="uniquenessImg 1"
                    layout="responsive"
                  />
                </div>
                <div className={styles.uniquenessSecondPart}>
                  <div className={styles.uniqueSecImgMainDiv}>
                    <div className={styles.pinSvgDiv}>
                      <Image
                        width={76}
                        height={72}
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                        alt="logo"
                        src="/pin_svg.svg"
                      />
                    </div>
                    <div className={styles.uniqueSecImgDiv}>
                      <div className={styles.shadow}></div>
                      <Image
                        src="/unique2.webp"
                        width={254}
                        height={311}
                        alt="uniquenessImg 2"
                        layout="responsive"
                      />
                    </div>
                  </div>
                  <div className={styles.uniqueSecImgMainDiv}>
                    <div className={styles.pinSvgDiv}>
                      <Image
                        width={76}
                        height={72}
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                        alt="logo"
                        src="/pin_svg.svg"
                      />
                    </div>
                    <div className={styles.uniqueSecImgDiv}>
                      <div className={styles.shadow}></div>
                      <Image
                        src="/unique3.webp"
                        width={254}
                        height={311}
                        alt="uniquenessImg 3"
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.uniquenessThirdPart}>
                <div className={styles.uniquenessHeadDiv}>
                  <p className={styles.uniquenessHeading} data-aos="fade-left">
                    OUR UNIQUENESS
                  </p>
                </div>
                <div
                  className={styles.uniquenessConDivider}
                  data-aos="fade-left"
                ></div>
                <div className={styles.uniquenessConDiv}>
                  <p className={styles.uniquenessContent} data-aos="fade-left">
                    At Thailand Privilege, our uniqueness lies in the seamless
                    blend of exclusive services and unparalleled experiences
                    tailored to elevate every moment. As pioneers in redefining
                    privilege, we take pride in curating a distinctive realm
                    where luxury meets convenience. Our commitment to excellence
                    transcends boundaries, creating a realm of unparalleled
                    access and elevated lifestyle for our privileged members.
                    Discover a world where exclusivity is not just a concept but
                    a living experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ================================================================ */}
        <div className={styles.graceTopDiv}>
          <div className={styles.graceMainDiv}>
            <div className={styles.graceSubDiv}>
              <div className={styles.graceFirstSec}>
                <div className={styles.visionMainBox} data-aos="fade-right">
                  <div className={styles.gracePinSvgDiv}>
                    <Image
                      width={76}
                      height={72}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      alt="logo"
                      src="/pin_svg.svg"
                    />
                  </div>
                  <div className={styles.visionHeadDiv}>
                    <p className={styles.visionHead}>Vision</p>
                  </div>
                  <div className={styles.visionContDiv}>
                    <p className={styles.visionCont}>
                      A world-class residency program with distinguished
                      privileges for friends of Thailand.
                    </p>
                  </div>
                </div>
                <div className={styles.missionMainBox} data-aos="fade-right">
                  <div className={styles.gracePinSvgDiv}>
                    <Image
                      width={76}
                      height={72}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      alt="logo"
                      src="/pin_svg.svg"
                    />
                  </div>
                  <div className={styles.visionHeadDiv}>
                    <p className={styles.visionHead}>Mission</p>
                  </div>
                  <div className={styles.visionContDiv}>
                    <ul className={styles.visionContUl}>
                      <li className={styles.visionCont}>
                        We offer Thailand&apos;s Privilege Residency Program,
                        providing special privileges and excellent experiences
                        to maximize member satisfaction.
                      </li>
                      <li className={styles.visionCont}>
                        Our goal is to attract high-potential foreigners to
                        Thailand and actively support both the public and
                        private sectors to foster the growth of the Thai
                        economy.
                      </li>
                      {/* <li className={styles.visionCont}>
                        We aim to attract high-potential foreigners to Thailand.
                      </li>
                      <li className={styles.visionCont}>
                        We actively support both public and private sectors to
                        foster the growth of the Thai economy.
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.graceSecondSec} data-aos="fade-left">
                <div className={styles.brandMainBox}>
                  <div className={styles.visionHeadDiv}>
                    <p className={styles.visionHead}>Brand DNA</p>
                  </div>
                  <div className={styles.visionContDiv}>
                    <div className={styles.brandSubDivs}>
                      <div className={styles.brandLetterDiv}>
                        <p className={styles.brandLetter} data-aos="fade-down">
                          G
                        </p>
                      </div>
                      <div className={styles.brandContDiv}>
                        <p className={styles.visionCont}>
                          Stands for grace, symbolizing our warm and graceful
                          welcome to ensure every member enjoys an extraordinary
                          experience in Thailand.
                        </p>
                      </div>
                    </div>
                    <div className={styles.brandSubDivs}>
                      <div className={styles.brandLetterDiv}>
                        <p className={styles.brandLetter} data-aos="fade-down">
                          R
                        </p>
                      </div>
                      <div className={styles.brandContDiv}>
                        <p className={styles.visionCont}>
                          Stands for a relationship, signifying our commitment
                          to treating all members like friends and family,
                          delivering smiles and happiness.
                        </p>
                      </div>
                    </div>
                    <div className={styles.brandSubDivs}>
                      <div className={styles.brandLetterDiv}>
                        <p className={styles.brandLetter} data-aos="fade-down">
                          A
                        </p>
                      </div>
                      <div className={styles.brandContDiv}>
                        <p className={styles.visionCont}>
                          Stands for assistance, highlighting our constant
                          availability to provide help and suggestions whenever
                          our members need them.
                        </p>
                      </div>
                    </div>
                    <div className={styles.brandSubDivs}>
                      <div className={styles.brandLetterDiv}>
                        <p className={styles.brandLetter} data-aos="fade-down">
                          C
                        </p>
                      </div>
                      <div className={styles.brandContDiv}>
                        <p className={styles.visionCont}>
                          Stands for a companion, illustrating our unwavering
                          support in fulfilling every desire our members have
                          during their visit to Thailand. We will always be
                          there for you.
                        </p>
                      </div>
                    </div>
                    <div className={styles.brandSubDivs}>
                      <div className={styles.brandLetterDiv}>
                        <p className={styles.brandLetter} data-aos="fade-down">
                          E
                        </p>
                      </div>
                      <div className={styles.brandContDiv}>
                        <p className={styles.visionCont}>
                          Stands for exclusivity, representing our pursuit of
                          exclusive privileges through partnerships to offer the
                          best experiences.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ================================================================ */}
        <div className={styles.valuesMainDiv}>
          <div className={styles.valuesSubDiv} data-aos="zoom-out-up">
            <div className={styles.valuesImgDiv}>
              <Image
                width={645}
                height={456}
                layout="responsive"
                alt="our info"
                src="/valuesImg.webp"
                className={styles.valuesImg}
              />
            </div>
            <div className={styles.valuesDividerDiv} data-aos="zoom-in">
              <div className={styles.valuesDivider}></div>
            </div>
            <div className={styles.valuesParaDiv}>
              <p className={styles.valuesPara} data-aos="zoom-out-down">
                Our core values encompass an emphasis on Talent, whereby we
                recruit and select members for our organization to foster
                efficiency as well as individual growth and development; reduce
                the loss of skilled and experienced staff by creating an
                energized and motivated atmosphere and sustainable competition;
                Proficiency, wherein we increase staff efficiency and
                effectiveness by instilling positive habits within our teams,
                improve skillfulness and capability in every aspect, and merging
                innovation and creativity into the working system of Thailand
                Privilege Card Co., Ltd.;
              </p>
            </div>
          </div>
        </div>
        <div className={styles.slider_container}>
          <div className={styles.slider_main_heading}>
            <h2 data-aos="fade-down">MILESTONES</h2>
            <hr className={styles.hr} data-aos="fade-down" />
            <AboutSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
