"use client";
import React from "react";
import { usePathname } from "next/navigation";
import styles from "./../../styles/footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

import { IoLocationSharp } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const pathname = usePathname();
  const getEmailAddress = (pathname) => {
    switch (pathname) {
      case "/home":
        return "contact@goldenprivilege.com";
      case "/medical":
        return "medpark@goldenprivilege.com";
      case "/bankok-hospital":
        return "bkkhospital@goldenprivilege.com";
      case "/hotels-tours":
        return "hotels&tours@goldenprivilege.com";
      case "/about":
      case "/contact":
      case "/membership":
        return "info@goldenprivilege.com";
      default:
        return "";
    }
  };

  const emailAddress = getEmailAddress(pathname);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerTopMainDiv}>
          <div className={styles.footerMainDiv}>
            <div className={styles.socialMediaAndBackToTop}>
              <div className={styles.socialMediaTextDiv}>
                <p className={styles.socialMedia}>Social Media:</p>
              </div>
              <div className={styles.socialMediaIconsMainDiv}>
                {/* <Link href="" target="_blank">
                  <div className={styles.socialMediaIconsDiv}>
                    <FaLinkedin fill="#FFF" className={styles.socialIcon} />
                  </div>
                </Link> */}
                <Link
                  href="https://www.instagram.com/thailandprivilege/"
                  target="_blank"
                  aria-label="Follow on Instagram"
                >
                  <div className={styles.socialMediaIconsDiv}>
                    <FaInstagram fill="#FFF" className={styles.socialIcon} />
                  </div>
                </Link>
                <Link
                  href="https://www.youtube.com/@thailandprivilegecardofficial"
                  target="_blank"
                  aria-label="Watch on YouTube"
                >
                  <div className={styles.socialMediaIconsDiv}>
                    <FaYoutube fill="#FFF" className={styles.socialIcon} />
                  </div>
                </Link>

                <Link
                  href="https://www.facebook.com/thailandprivilege"
                  target="_blank"
                  aria-label="Follow on Facebook"
                >
                  <div className={styles.socialMediaIconsDiv}>
                    <FaFacebook fill="#FFF" className={styles.socialIcon} />
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <div className={styles.backToTopDiv} onClick={handleClick}>
                <IoIosArrowUp className={styles.backToTop} />
              </div>
            </div>
          </div>
          <div
            className={
              pathname === "/medical" || pathname === "/bankok-hospital"
                ? styles.medParkFooter
                : styles.footerLinks
            }
          >
            <div className={styles.footerContactDetails}>
              <div className={styles.footerEmailDiv}>
                <p className={styles.email_text}>
                  Email for Assistance and Support
                </p>

                <p className={styles.footerEmail}>{emailAddress}</p>
              </div>
              <div className={styles.footerVendorAgent}>
                <div className={styles.footerVendorIconDiv}>
                  <Image
                    src="/footer/FOOTER-ICON-1.png"
                    className={styles.footerVendorIcon}
                    alt="footerVendorIcon"
                    width={32}
                    height={32}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                <div className={styles.footerVendorDiv}>
                  <p className={styles.footerVendorText}>For Vendors</p>
                </div>
              </div>
              <div className={styles.footerVendorAgent}>
                <div className={styles.footerVendorIconDiv}>
                  <Image
                    src="/footer/FOOTER-ICON-2.png"
                    className={styles.footerVendorIcon}
                    alt="footerVendorIcon"
                    width={32}
                    height={32}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                <div className={styles.footerVendorDiv}>
                  <p className={styles.footerVendorText}>For Agents</p>
                </div>
              </div>
              <div className={styles.footerLogosMainDiv}>
                <div
                  className={`${styles.footerLogoDiv} ${styles.footerLogo1}`}
                >
                  <Image
                    src="/footer/FOOTER-LOGO-1.png"
                    className={styles.footerLogo}
                    alt="footerLogo1"
                    width={80}
                    height={80}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                <div
                  className={`${styles.footerLogoDiv} ${styles.footerLogo2}`}
                >
                  <Image
                    src="/footer/FOOTER-LOGO-2.png"
                    className={styles.footerLogo}
                    alt="footerLogo2"
                    width={80}
                    height={80}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                <div
                  className={`${styles.footerLogoDiv} ${styles.footerLogo3}`}
                >
                  <Image
                    src="/footer/FOOTER-LOGO-3.png"
                    className={styles.footerLogo}
                    alt="footerLogo3"
                    width={80}
                    height={80}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
            {pathname === "/medical" || pathname === "/bankok-hospital" ? (
              <>
                <div
                  className={`${
                    pathname === "/bankok-hospital"
                      ? styles.bangkokFooter_container
                      : styles.medPark_container
                  }`}
                >
                  <div className={styles.medParkLogo_container}>
                    <Image
                      src="/medical/medPark_logo.png"
                      alt="medpark logo"
                      width={420}
                      height={124}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className={styles.medpark_textIcon_container}>
                    <div className={styles.medPark_location_icon}>
                      <IoLocationSharp />
                    </div>
                    <p>
                      {pathname === "/medical"
                        ? "3333 Rama IV RD, Khlong Toei, Bangkok 10110"
                        : "2 Soi Soonvijai 7,  New Petchburi Rd., Huaykwang, Bangkok 10310 Thailand"}
                    </p>
                  </div>
                  <div className={styles.medpark_textIcon_container}>
                    <div className={styles.medPark_location_icon}>
                      <TfiWorld />
                    </div>
                    <p>
                      {pathname === "/medical"
                        ? "www.medparkhospital.com"
                        : "www.bangkokhospital.com"}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles.footerLink1}>
                  <div className={styles.footerTextDiv}>
                    <Link href="/home" trget="_blank">
                      <h2 className={styles.footerInnerHeading}>Privileges</h2>
                    </Link>
                    <Link
                      href="https://www.thailandprivilege.co.th/privileges/stay"
                      target="_blank"
                    >
                      <p className={styles.footerText}>Stay</p>
                    </Link>
                    <Link
                      href="https://www.thailandprivilege.co.th/privileges/travel"
                      target="_blank"
                    >
                      <p className={styles.footerText}>Travel</p>
                    </Link>
                    <Link
                      href="https://www.thailandprivilege.co.th/privileges/leisure"
                      target="_blank"
                    >
                      <p className={styles.footerText}>Leisure</p>
                    </Link>
                    <Link
                      href="https://www.thailandprivilege.co.th/privileges/health-well-being"
                      target="_blank"
                    >
                      <p className={styles.footerText}>Health & Well-being</p>
                    </Link>
                    <Link
                      href="https://www.thailandprivilege.co.th/privileges/wealth"
                      target="_blank"
                    >
                      <p className={styles.footerText}>Wealth</p>
                    </Link>
                  </div>
                  <div className={styles.footerTextSubDiv}>
                    <Link
                      href="https://www.thailandprivilege.co.th/why-thailand"
                      target="_blank"
                    >
                      <p className={styles.footerBoldText}>Why Thailand?</p>
                    </Link>
                    <Link
                      href="https://www.thailandprivilege.co.th/news"
                      target="_blank"
                    >
                      <p className={styles.footerBoldText}>News & Promotion</p>
                    </Link>
                    <Link
                      href="https://www.thailandprivilege.co.th/living-in-thailand"
                      target="_blank"
                    >
                      <p className={styles.footerBoldText}>
                        Living in Thailand
                      </p>
                    </Link>
                  </div>
                </div>
                <div className={styles.footerLink2}>
                  <div className={styles.footerTextDiv}>
                    <Link href="/membership">
                      <h2 className={styles.footerInnerHeading}>Membership</h2>
                    </Link>
                    <Link
                      href="https://www.thailandprivilege.co.th/membership/reserve"
                      target="_blank"
                    >
                      <p className={styles.footerText}>Reserve</p>
                    </Link>
                    <Link
                      href="https://www.thailandprivilege.co.th/membership/diamond"
                      target="_blank"
                    >
                      <p className={styles.footerText}>Diamond</p>
                    </Link>

                    <Link
                      href="https://www.thailandprivilege.co.th/membership/platinum"
                      target="_blank"
                    >
                      <p className={styles.footerText}>Platinum</p>
                    </Link>
                    <Link
                      href="https://www.thailandprivilege.co.th/membership/gold"
                      target="_blank"
                    >
                      <p className={styles.footerText}>Gold</p>
                    </Link>
                  </div>
                  <div className={styles.footerTextSubDiv}>
                    <Link
                      href="https://www.thailandprivilege.co.th/announcement"
                      target="_blank"
                    >
                      <p className={styles.footerBoldText}>Announcement</p>
                    </Link>
                    <Link
                      href="https://www.thailandprivilege.co.th/procurement"
                      target="_blank"
                    >
                      <p className={styles.footerBoldText}>Procurement</p>
                    </Link>
                    <Link
                      href="https://www.thailandprivilege.co.th/download"
                      target="_blank"
                    >
                      <p className={styles.footerBoldText}>Download</p>
                    </Link>
                  </div>
                </div>
                <div className={styles.footerLink3}>
                  <div className={styles.footerTextDiv}>
                    <Link href="/about">
                      <h2 className={styles.footerInnerHeading}>About</h2>
                    </Link>
                    <Link
                      href="https://www.thailandprivilege.co.th/about"
                      target="_blank"
                    >
                      <p className={styles.footerText}>Who we are?</p>
                    </Link>
                    <Link
                      href="https://www.thailandprivilege.co.th/about/our-team?type=board-of-directors"
                      target="_blank"
                    >
                      <p className={styles.footerText}>Board of directors</p>
                    </Link>
                    <Link
                      href="https://www.thailandprivilege.co.th/about/our-team?type=audit-committees"
                      target="_blank"
                    >
                      <p className={styles.footerText}>Audit committees</p>
                    </Link>
                    <Link
                      href="https://www.thailandprivilege.co.th/about/our-team?type=management-team"
                      target="_blank"
                    >
                      <p className={styles.footerText}>Management team</p>
                    </Link>
                  </div>
                  <div className={styles.footerTextSubDiv}>
                    <Link
                      href="https://www.thailandprivilege.co.th/career"
                      target="_blank"
                    >
                      <p className={styles.footerBoldText}>Careers</p>
                    </Link>
                    <Link href="/contact">
                      <p className={styles.footerBoldText}>Contact us</p>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className={styles.copyrightLinksDiv}>
            <div>
              <p className={styles.copyrightText}>
                Copyright © 2024 The Crown Privileges
              </p>
            </div>
            <div>
              <p className={styles.copyrightText}>
                <Link
                  href="https://www.thailandprivilege.co.th/privacy-policy"
                  target="_blank"
                >
                  <span className={styles.copyrightTextLink}>
                    Privacy Policy
                  </span>
                </Link>
                <span className={styles.copyrightTextLink}>
                  <Link
                    href="https://www.thailandprivilege.co.th/cookie-policy"
                    target="_blank"
                  >
                    Cookies Policy
                  </Link>
                </span>
              </p>
            </div>
          </div>

          <div className={styles.footerGoldenTextDiv}>
            <h2 className={styles.footerGoldenText}>GOLDEN PRIVILEGE</h2>
            <div className={styles.svg}>
              <Image
                src="/pin_svg.svg"
                alt="logo"
                data-aos="fade-right"
                width={308}
                height={296}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
