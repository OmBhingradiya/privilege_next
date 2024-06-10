"use client";
import React, { useEffect, useState } from "react";
import headerStyles from "./../../styles/header.module.css";
import { MdLocationPin } from "react-icons/md";
import { VscMail } from "react-icons/vsc";
import { BsClockFill } from "react-icons/bs";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathnamee = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [pathName, setPathName] = useState("/home");

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    setPathName(pathnamee);
  }, [pathnamee]);
  return (
    <>
      <div>
        <div>
          <div className={headerStyles.topHeaderMainDiv}>
            <div className={headerStyles.topHeaderAllInfo}>
              <div className={headerStyles.topHeaderAllInfoSubDiv}>
                <div className={headerStyles.addressesDiv}>
                  <Link
                    href="https://www.google.com/maps/search/?api=1&query=City+Center,+Thailand+Thai+Mall"
                    className={headerStyles.top_header_links}
                    target="_blank"
                  >
                    <div
                      className={`${headerStyles.topHeadericonDescriDiv} ${headerStyles.topHeaderLocationDiv}`}
                    >
                      <div className={headerStyles.topHeadericonDiv}>
                        <MdLocationPin className={headerStyles.topHeadericon} />
                      </div>
                      <div className={headerStyles.topHeaderParaDiv}>
                        <p className={headerStyles.topHeaderPara}>
                          40, City center, near thai mall, Thailand
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="mailto:needhelp@company.com"
                    className={headerStyles.top_header_links}
                  >
                    <div className={headerStyles.topHeadericonDescriDiv}>
                      <div className={headerStyles.topHeadericonDiv}>
                        <VscMail className={headerStyles.topHeadericon} />
                      </div>
                      <div className={headerStyles.topHeaderParaDiv}>
                        <p className={headerStyles.topHeaderPara}>
                          needhelp@company.com
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className={headerStyles.topHeaderTimeDiv}>
                  <div className={headerStyles.topHeadericonDescriDiv}>
                    <div className={headerStyles.topHeadericonDiv}>
                      <BsClockFill
                        className={headerStyles.topHeaderClockicon}
                      />
                    </div>
                    <div className={headerStyles.topHeaderParaDiv}>
                      <p className={headerStyles.topHeaderPara}>
                        Mon to Sat:8:00am - 7:00pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={headerStyles.topHeaderTopDiv}>
              <div className={headerStyles.topHeaderAllSocialIconDiv}>
                <div>
                  {/* <div className={headerStyles.topHeaderSocialIconDiv}>
                    <TfiLinkedin className={headerStyles.topHeaderSocialIcon} />
                  </div> */}
                </div>
                <div>
                  <div className={headerStyles.topHeaderSocialIconDiv}>
                    <Link
                      href="https://www.instagram.com/thailandprivilege/"
                      target="_blank"
                      aria-label="Follow on Instagram"
                    >
                      <FaInstagram
                        className={headerStyles.topHeaderSocialIcon}
                      />
                    </Link>
                  </div>
                </div>
                <div>
                  <div className={headerStyles.topHeaderSocialIconDiv}>
                    <Link
                      href="https://www.youtube.com/@thailandprivilegecardofficial"
                      target="_blank"
                      aria-label="Watch on YouTube"
                    >
                      <FaYoutube className={headerStyles.topHeaderSocialIcon} />
                    </Link>
                  </div>
                </div>
                <div>
                  <div className={headerStyles.topHeaderSocialIconDiv}>
                    <Link
                      href="https://www.facebook.com/thailandprivilege"
                      target="_blank"
                      aria-label="Follow on Facebook"
                    >
                      <FaFacebookF
                        className={headerStyles.topHeaderSocialIcon}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={headerStyles.headerTopDiv}>
          <div className={headerStyles.headerMainDiv}>
            <div className={headerStyles.logoAndLinks}>
              <div className={headerStyles.logoMainDiv}>
                <div className={headerStyles.logoDiv}>
                  <Image
                    src="/logo.svg"
                    alt="logo"
                    className={headerStyles.logo}
                    width={252}
                    height={21}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
              <div>
                <div className={headerStyles.links}>
                  <div className={headerStyles.linksDiv}>
                    {/* <a className={headerStyles.link_style} href="/"> */}
                    <div className={headerStyles.navLinkDiv}>
                      <Link
                        href="/home"
                        activeClassName={`active ${headerStyles.headerLinks}`}
                      >
                        Thailand Privilege
                        {/* </a> */}
                      </Link>
                    </div>
                    {pathName == "/home" ? (
                      <div className={headerStyles.active_bottomLine}></div>
                    ) : null}{" "}
                  </div>
                  <div className={headerStyles.linksDiv}>
                    <div className={headerStyles.navLinkDiv}>
                      {/* <a className={headerStyles.link_style} href="/membership"> */}
                      <Link
                        href="/membership"
                        activeClassName={`active ${headerStyles.headerLinks}`}
                      >
                        Membership Packages
                        {/* </a> */}
                      </Link>
                    </div>
                    {pathName == "/membership" ? (
                      <div className={headerStyles.active_bottomLine}></div>
                    ) : null}{" "}
                  </div>
                  <div className={headerStyles.linksDiv}>
                    <div className={headerStyles.navLinkDiv}>
                      {/* <a className={headerStyles.link_style} href="/medical"> */}
                      <Link
                        href="/medical"
                        activeClassName={`active ${headerStyles.headerLinks}`}
                      >
                        MedPark Hospital
                        {/* </a> */}
                      </Link>
                    </div>
                    {pathName == "/medical" ? (
                      <div className={headerStyles.active_bottomLine}></div>
                    ) : null}
                  </div>
                  <div className={headerStyles.linksDiv}>
                    <div className={headerStyles.navLinkDiv}>
                      {/* <a className={headerStyles.link_style} href="/medical"> */}
                      <Link
                        href="/bangkok-hospital"
                        activeClassName={`active ${headerStyles.headerLinks}`}
                      >
                        Bangkok Hospital
                        {/* </a> */}
                      </Link>
                    </div>
                    {pathName == "/bangkok-hospital" ? (
                      <div className={headerStyles.active_bottomLine}></div>
                    ) : null}
                  </div>
                  <div
                    className={`${headerStyles.linksDiv} ${headerStyles.toursDropDown}`}
                  >
                    {/* <a className={headerStyles.link_style} href="/tours&Hotels"> */}
                    <div
                      className={headerStyles.navLinkDiv}
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <Link
                        href="/hotels-tours"
                        activeClassName={`active ${headerStyles.headerLinks}`}
                      >
                        Hotels & Tours
                      </Link>
                    </div>
                    {pathName == "/hotels-tours" ? (
                      <div className={headerStyles.active_bottomLine}></div>
                    ) : null}
                    {dropdownOpen ? (
                      <div
                        className={headerStyles.headerDropdown}
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                      >
                        <div className={headerStyles.tours_bottomLine}></div>

                        <ul className={headerStyles.headerSubDivUl}>
                          <li className={headerStyles.headerSubDiv}>
                            <Link
                              href="https://www.thailandprivilege.co.th/privileges/stay"
                              target="_blank"
                            >
                              Stay
                            </Link>
                          </li>
                          <li className={headerStyles.headerSubDiv}>
                            <Link
                              href="https://www.thailandprivilege.co.th/privileges/travel"
                              target="_blank"
                            >
                              Travel
                            </Link>
                          </li>
                          <li className={headerStyles.headerSubDiv}>
                            <Link
                              href="https://www.thailandprivilege.co.th/privileges/leisure"
                              target="_blank"
                            >
                              Leisure
                            </Link>
                          </li>
                          <li className={headerStyles.headerSubDiv}>
                            <Link
                              href="https://www.thailandprivilege.co.th/privileges/health-well-being"
                              target="_blank"
                            >
                              Health & Well-Being
                            </Link>
                          </li>
                          <li className={headerStyles.headerSubDiv}>
                            <Link
                              href="https://www.thailandprivilege.co.th/privileges/wealth"
                              target="_blank"
                            >
                              Wealth
                            </Link>
                          </li>
                        </ul>
                      </div>
                    ) : null}
                    {/* </a> */}
                  </div>
                  <div className={headerStyles.linksDiv}>
                    <div className={headerStyles.navLinkDiv}>
                      {/* <a className={headerStyles.link_style} href="/about"> */}
                      <Link
                        href="/about"
                        activeClassName={`active ${headerStyles.headerLinks}`}
                      >
                        About Us
                        {/* </a> */}
                      </Link>
                    </div>
                    {pathName == "/about" ? (
                      <div className={headerStyles.active_bottomLine}></div>
                    ) : null}
                  </div>
                  <div className={headerStyles.linksDiv}>
                    {/* <a className={headerStyles.link_style} href="/contact"> */}
                    <div className={headerStyles.navLinkDiv}>
                      <Link
                        href="/contact"
                        activeClassName={`active ${headerStyles.headerLinks}`}
                      >
                        Contact
                        {/* </a> */}
                      </Link>
                    </div>
                    {pathName == "/contact" ? (
                      <div className={headerStyles.active_bottomLine}></div>
                    ) : null}
                  </div>
                  {/* <div
                    className={`${headerStyles.linksDiv} ${headerStyles.headerBtnDiv}`}
                  >
                    <a
                      className={`${headerStyles.link_style} ${headerStyles.headerBtn}`}
                      href="/"
                    >
                      Get Membership
                    </a>
                  </div> */}
                  <div
                    className={`${headerStyles.linksDiv} ${headerStyles.headerBtnDiv}`}
                  >
                    <Link
                      href="/membership"
                      className={`${headerStyles.link_style} ${headerStyles.headerBtn}`}
                    >
                      Get Membership
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className={headerStyles.thirdSection}>
              <div className={headerStyles.headerSearchIconDiv}>
                <CiSearch className={headerStyles.headerSearchIcon} />
              </div>
              <div className={headerStyles.headerIconDiv}>
                <CiUser className={headerStyles.headerIcon} />
              </div>
            </div> */}
          </div>
          <div className={headerStyles.responsiveDiv}>
            {isOpen && <div className={headerStyles.headerDrawerBackground} />}

            <div
              className={`${headerStyles.openButton} ${
                isOpen ? headerStyles.hamburgerMenuDiv : ""
              } `}
              onClick={toggleDrawer}
            >
              <HiOutlineMenuAlt2 />
            </div>
            <div className={headerStyles.logoMainDiv}>
              <div className={headerStyles.logoDiv}>
                <Image
                  src="/logo.svg"
                  alt="logo"
                  className={headerStyles.logo}
                  width={252}
                  height={21}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
            {/* <div className={headerStyles.res_thirdSection}> */}
            {/* <div className={headerStyles.res_headerSearchIconDiv}>
              <CiSearch className={headerStyles.res_headerSearchIcon} />
            </div>
            <div className={headerStyles.res_headerIconDiv}>
              <CiUser className={headerStyles.res_headerIcon} />
            </div> */}
            {/* </div> */}
            <div
              className={`${headerStyles.headerDrawer} ${
                isOpen ? headerStyles.open : ""
              }`}
            >
              <div className={headerStyles.headerDrawerContent}>
                <div>
                  <div className={headerStyles.links}>
                    <div className={headerStyles.linksDiv}>
                      <Link
                        href="/home"
                        className={headerStyles.link_style}
                        onClick={handleLinkClick}
                      >
                        Thailand Privilege
                      </Link>
                    </div>
                    <div className={headerStyles.linksDiv}>
                      <Link
                        href="/membership"
                        className={headerStyles.link_style}
                        onClick={handleLinkClick}
                      >
                        Membership Packages
                      </Link>
                    </div>
                    <div className={headerStyles.linksDiv}>
                      <Link
                        href="/medical"
                        className={headerStyles.link_style}
                        onClick={handleLinkClick}
                      >
                        MedPark Hospital
                      </Link>
                    </div>
                    <div className={headerStyles.linksDiv}>
                      <Link
                        href="/bangkok-hospital"
                        className={headerStyles.link_style}
                        onClick={handleLinkClick}
                      >
                        Bangkok hospital
                      </Link>
                    </div>
                    <div className={headerStyles.linksDiv}>
                      <Link
                        href="/hotels-tours"
                        className={headerStyles.link_style}
                        onClick={handleLinkClick}
                      >
                        Hotels & Tours
                      </Link>
                    </div>
                    <div className={headerStyles.linksDiv}>
                      <Link
                        href="/about"
                        className={headerStyles.link_style}
                        onClick={handleLinkClick}
                      >
                        About Us
                      </Link>
                    </div>
                    <div className={headerStyles.linksDiv}>
                      <Link
                        href="/contact"
                        className={headerStyles.link_style}
                        onClick={handleLinkClick}
                      >
                        Contact
                      </Link>
                    </div>
                    {/* <div
                    className={`${headerStyles.linksDiv} ${headerStyles.headerBtnDiv}`}
                  >
                    <a
                      className={`${headerStyles.link_style} ${headerStyles.headerBtn}`}
                      href="/"
                    >
                      Get Membership
                    </a>
                  </div> */}
                    <div
                      className={`${headerStyles.linksDiv} ${headerStyles.headerBtnDiv}`}
                    >
                      <Link
                        href="/membership"
                        className={`${headerStyles.link_style} ${headerStyles.headerBtn}`}
                        onClick={handleLinkClick}
                      >
                        Get Membership
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  onClick={toggleDrawer}
                  className={headerStyles.closeButton}
                >
                  <RiCloseLine />
                </div>
              </div>
            </div>
            {/* <div className={headerStyles.thirdSection}>
              <div className={headerStyles.headerSearchIconDiv}>
                <IoSearchCircleSharp
                  className={headerStyles.headerSearchIcon}
                />
              </div>
              <div className={headerStyles.headerIconDiv}>
                <FaUserCircle className={headerStyles.headerIcon} />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
