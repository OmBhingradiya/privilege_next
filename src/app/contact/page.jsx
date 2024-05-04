"use client";

import styles from "./../styles/contactUs.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import { FaFilePdf } from "react-icons/fa";
import HeroSection from "../components/membership/heroSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <div className="mainPage_class">
        <HeroSection data={"Contact"} />

        <div className={styles.contactInfoMainDiv}>
          <div className={styles.contactInfoSubDiv}>
            <div>
              <div className={styles.contactInfoHeadDiv}>
                <p
                  className={styles.contactInfoHead}
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  Contact Information for Members
                </p>
              </div>
              <div
                className={styles.contactInfoDivider}
                data-aos="fade-down"
                data-aos-duration="2500"
              ></div>
              <div className={styles.contactInfoParaDiv}>
                <p
                  className={styles.contactInfoPara}
                  data-aos="fade-down"
                  data-aos-duration="3000"
                >
                  The Thailand Privilege Member Contact Center provides 24/7
                  assistance, offering support in English and additional
                  languages such as Mandarin Chinese, Japanese, and Korean.
                </p>
              </div>
            </div>
            <div className={styles.contactCenterMainDiv}>
              <div className={styles.roundSvgDiv}>
                <Image
                  src="/pin_svg.svg"
                  alt="logo"
                  width={132}
                  height={135}
                  style={{
                    // width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <div className={styles.contactCenterHeadDiv}>
                <p className={styles.contactCenterHead} data-aos="fade-down">
                  CONTACT CENTER
                </p>
              </div>
              <div className={styles.contactCenterDiv}>
                <div className={styles.contactCenterDetailsMainDiv1}>
                  <Link
                    href="tel:+1 646-645-1969"
                    className={styles.contacts_links}
                  >
                    <div className={styles.contactCenterDetailDiv}>
                      <div
                        className={styles.contactCenterIconDiv}
                        data-aos="fade-right"
                        data-aos-duration="2500"
                      >
                        <FaPhoneAlt className={styles.contactCenterIcon} />
                      </div>
                      <div className={styles.contactCenterInfoDiv}>
                        <p
                          className={styles.contactCenterInfo}
                          data-aos="fade-right"
                        >
                          +1 646-645-1969
                        </p>
                      </div>
                    </div>
                  </Link>
                  <div className={styles.contactCenterDetailDiv}>
                    <div
                      className={styles.contactCenterIconDiv}
                      data-aos="fade-right"
                      data-aos-duration="2500"
                    >
                      <FaPhoneAlt className={styles.contactCenterIcon} />
                    </div>
                    <div className={styles.contactCenterInfoDiv}>
                      <Link
                        href="tel:+66 (0) 2352 3000"
                        className={styles.contacts_links}
                      >
                        <p
                          className={styles.contactCenterInfo}
                          data-aos="fade-right"
                        >
                          +66 (0) 2352 3000
                        </p>
                      </Link>
                      <Link
                        href="tel:+66 (0) 2353 4121"
                        className={styles.contacts_links}
                      >
                        <p
                          className={styles.contactCenterInfo}
                          data-aos="fade-right"
                        >
                          +66 (0) 2353 4121
                        </p>
                      </Link>
                    </div>
                  </div>
                  <Link
                    href="mailto:memberservice@goldenprivilege.com"
                    target="_blank"
                    className={styles.contacts_links}
                  >
                    <div className={styles.contactCenterDetailDiv}>
                      <div
                        className={`${styles.contactCenterIconDiv} ${styles.contactCenterMailIconDiv}`}
                        data-aos="fade-right"
                        data-aos-duration="2500"
                      >
                        <GoMail
                          className={`${styles.contactCenterIcon} ${styles.contactCenterMailIcon}`}
                        />
                      </div>
                      <div className={styles.contactCenterInfoDiv}>
                        <p
                          className={styles.contactCenterInfo}
                          data-aos="fade-right"
                        >
                          memberservice@goldenprivilege.com
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className={styles.contactCenterDetailsMainDiv2}>
                  <Link
                    href="https://www.google.com/maps?q=41-26+73rd+St+%23+D30,+Woodside,+NY+11377"
                    target="_blank"
                    className={styles.contacts_links}
                  >
                    <div className={styles.contactCenterDetailDiv}>
                      <div
                        className={`${styles.contactCenterIconDiv} ${styles.contactCenterLocationIconDiv}`}
                        data-aos="fade-left"
                      >
                        <IoLocationSharp
                          className={`${styles.contactCenterIcon} ${styles.contactCenterLocationIcon}`}
                        />
                      </div>
                      <div className={styles.contactCenterInfoDiv}>
                        <p
                          className={styles.contactCenterInfoHead}
                          data-aos="fade-down"
                        >
                          USA Office:
                        </p>
                        <p
                          className={styles.contactCenterInfo}
                          data-aos="fade-left"
                          data-aos-duration="2500"
                        >
                          41-26 73rd ST # D30, Woodside, NY 11377
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="https://www.google.com/maps/search/?api=1&query=110/2+North+Sathorn+Road,+Silon+Bangrak,+Bangkok+10500,+Thailand"
                    target="_blank"
                    className={styles.contacts_links}
                  >
                    <div className={styles.contactCenterDetailDiv}>
                      <div
                        className={`${styles.contactCenterIconDiv} ${styles.contactCenterLocationIconDiv}`}
                        data-aos="fade-left"
                      >
                        <IoLocationSharp
                          className={`${styles.contactCenterIcon} ${styles.contactCenterLocationIcon}`}
                        />
                      </div>
                      <div className={styles.contactCenterInfoDiv}>
                        <p
                          className={styles.contactCenterInfoHead}
                          data-aos="fade-down"
                        >
                          Thailand Office:
                        </p>
                        <p
                          className={styles.contactCenterInfo}
                          data-aos="fade-left"
                          data-aos-duration="2500"
                        >
                          110/2 North Sathorn Road, Silon Bangrak, Bangkok 10500
                          Thailand
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className={styles.contactCenterTextBtnDiv}>
                <div className={styles.contactCenterTextDiv}>
                  <p className={styles.contactCenterText}>
                    Interested In Becoming A Vendor Or Agent With Us?
                  </p>
                </div>
                <div className={styles.contactCenterBtnDiv}>
                  <Link
                    href="https://www.thailandprivilege.co.th/contact"
                    target="_blank"
                  >
                    <button className={styles.contactCenterBtn}>
                      Become A Partnership
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ======================================================================================= */}
        <div className={styles.contactFormMainDiv}>
          <div className={styles.contactFormSubDiv}>
            <div className={styles.contactFormHeadDiv}>
              <p className={styles.contactFormHead} data-aos="fade-down">
                Provide your details, and our respresentative will reach out to
                answer your inquiries promptly.
              </p>
            </div>
            <div className={styles.contactFormDiv}>
              <div className={styles.contactFormField}>
                <div
                  className={styles.contactSemiFieldDiv}
                  data-aos="fade-right"
                >
                  <input
                    type="text"
                    placeholder="First Name"
                    className={styles.contactField}
                  />
                </div>
                <div
                  className={styles.contactSemiFieldDiv}
                  data-aos="fade-left"
                >
                  <input
                    type="text"
                    placeholder="Last Name"
                    className={styles.contactField}
                  />
                </div>
              </div>
              <div className={styles.contactFieldDiv} data-aos="zoom-in">
                <input
                  type="text"
                  placeholder="Title"
                  className={styles.contactFieldTitle}
                />
              </div>
              <div className={styles.contactFormField}>
                <div
                  className={styles.contactSemiFieldDiv}
                  data-aos="fade-right"
                >
                  <input
                    type="text"
                    placeholder="E-Mail"
                    className={styles.contactField}
                  />
                </div>
                <div
                  className={styles.contactSemiFieldDiv}
                  data-aos="fade-left"
                >
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className={styles.contactField}
                  />
                </div>
              </div>
              <div className={styles.contactFieldMessageDiv} data-aos="zoom-in">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className={styles.contactFieldMessage}
                ></textarea>
              </div>
              <div>
                <div className={styles.contactFormFileCheckbox}>
                  <div>
                    <label className={styles.contactFileFieldLabel}>
                      <span className={styles.pdfSpan}>
                        <FaFilePdf className={styles.pdfSpanIcon} />
                      </span>
                      Choose File
                      <input type="file" className={styles.contactFileField} />
                    </label>
                  </div>
                  <div>
                    <label className={styles.privacyLabel}>
                      <input
                        type="checkbox"
                        className={styles.contactFormFileCheckbox}
                      />
                      I Have Read And agree With The Privacy Policy
                    </label>
                  </div>
                </div>
              </div>
              <div className={styles.sendBtnDiv}>
                {/* <button className={styles.sendBtn}>Send</button> */}
                <button className={styles.btn}>
                  <Link href="/" target="_blank">
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
                    <span>Send</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.googleMapsDiv}>
            <div className={styles.googleMapSubDiv}>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?
                  pb=!1m18!1m12!1m3!1d0!2d66.66366267675604!3d19.293661489365613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU2JzM1LjEiTiA2NsKwNDUnNTYuNSJF!5e0!3m2!1sen!2sin!4v1648466346939!5m2!1sen!2sin"
                  width="100%"
                  height="550"
                  frameborder="0"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                  className={styles.map}
                />
              </div>
              <div className={styles.mapMarkerDiv}>
                <Image
                  src="/locationMarker.svg"
                  alt="location Mark"
                  width={134}
                  height={134}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  className={styles.mapMarker}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
