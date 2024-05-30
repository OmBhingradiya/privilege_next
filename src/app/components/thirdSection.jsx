import React, { useState } from "react";
import styles from "./../styles/thirdSection.module.css";
import Link from "next/link";
import Image from "next/image";

// const textWithImages = [
//   { text: <p className={styles.privileges_text}>STAY</p>, image: "./stay.webp" },
//   {
//     text: <p className={styles.privileges_text}>TRAVEL</p>,
//     image: "./travel.webp",
//   },
//   {
//     text: <p className={styles.privileges_text}>LEISURE</p>,
//     image: "./LEISURE.webp",
//   },
//   {
//     text: (
//       <p className={styles.privileges_text}>
//         HEALTH{" "}
//         <span
//           style={{
//             fontFamily: "Playfair Display, sans-serif",
//           }}
//         >
//           &
//         </span>{" "}
//         WELL-BEING
//       </p>
//     ),
//     image: "./helth-welbing.webp",
//   },
//   {
//     text: <p className={styles.privileges_text}>WEALTH</p>,
//     image: "./wealth.webp",
//   },
// ];
// const ThirdSection = () => {
//   const [hoveredText, setHoveredText] = useState(null);
//   const [backgroundImage, setBackgroundImage] = useState(
//     textWithImages[0].image
//   );

//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });

//     window.addEventListener("mousemove", setFromEvent);

//     return () => window.removeEventListener("mousemove", setFromEvent);
//   }, []);

//   const handleTextHover = (text) => {
//     if (text !== hoveredText) {
//       setHoveredText(text);
//       setBackgroundImage(
//         textWithImages.find((item) => item.text === text)?.image ||
//           textWithImages[0].image
//       );
//     }
//   };

//   return (
//     <div
//       className={styles.image_gallery}
//       style={{
//         backgroundImage: `linear-gradient(0deg, rgb(0 0 0 / 70%), rgb(0 0 0 / 50%)), url(${backgroundImage})`,
//       }}
//     >
//       <div className={styles.inner_container}>
//         <div
//           className={styles.customCursor}
//           style={{ left: position.x, top: position.y }}
//         >
//           <span>+</span>
//         </div>
//         <p className={styles.privileges_heading}>PRIVILEGES</p>
//         <hr className={styles.privileges_hr} />
//         {textWithImages.length > 0 &&
//           textWithImages.map((item, index) => {
//             return (
//               <div
//                 key={index}
//                 className={styles.gallery_item}
//                 onMouseEnter={() => handleTextHover(item.text)}
//               >
//                 {item.text}
//                 {/* <p className={styles.privileges_text}>{item.text}</p> */}
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// };

const ThirdSection = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [imgText, setImgText] = useState("STAY");
  const [hoverZoomIn, setHoverZoomIn] = useState(false);
  // const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedText, setSelectedText] = useState(null);

  // useEffect(() => {
  //   const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });

  //   window.addEventListener("mousemove", setFromEvent);

  //   return () => window.removeEventListener("mousemove", setFromEvent);
  // }, []);

  const data = [
    {
      text: <p className={styles.privileges_text}>STAY</p>,
      title: "STAY",
      img: "/home/stay.webp",
      imgClass: "styles.zoomin",
      alt: "Long-Term Residence",
      textDescri:
        "Indulge in Exclusive Accommodations and Real Estate Opportunities",
      link: "https://www.thailandprivilege.co.th/privileges/stay",
    },
    {
      text: <p className={styles.privileges_text}>TRAVEL</p>,
      title: "TRAVEL",
      img: "/home/travel.webp",
      imgClass: "styles.zoomin",
      alt: "Thailand Tour",
      textDescri: "Unforgettable Thai Experiences with Exceptional Privileges",
      link: "https://www.thailandprivilege.co.th/privileges/travel",
    },
    {
      text: <p className={styles.privileges_text}>LEISURE</p>,
      title: "LEISURE",
      img: "/home/LEISURE.webp",
      imgClass: "styles.zoomin",
      alt: "Golden Visa Thailand",
      textDescri: "Experience VIP Travel and Discover the Wonders of Thailand",
      link: "https://www.thailandprivilege.co.th/privileges/leisure",
    },
    {
      text: (
        <p className={styles.privileges_text}>
          HEALTH{" "}
          <span
            style={{
              fontFamily: "Playfair Display, sans-serif",
            }}
          >
            &
          </span>{" "}
          WELL-BEING
        </p>
      ),
      alt: "Citizenship By Investment",
      title: "HEALTH & WELL-BEING",
      img: "/home/helth-welbing.webp",
      imgClass: "styles.zoomin",
      textDescri: "Prioritize Your Health with Premier Thai Wellness Services",
      link: "https://www.thailandprivilege.co.th/privileges/health-well-being",
    },
    {
      text: <p className={styles.privileges_text}>WEALTH</p>,
      title: "WEALTH",
      img: "/home/wealth.webp",
      imgClass: "styles.zoomin",
      textDescri: "Expert Wealth and Investment Guidance in Thailand",
      alt: "Privilege Card Members",
      link: "https://www.thailandprivilege.co.th/privileges/wealth",
    },
  ];

  const mobileViewData = [
    {
      imgUrl: "/home/privileges-stay-respon.webp",
      title: <p className={styles.mobPrivHead}>STAY</p>,
      desc: "Indulge in Exclusive Accommodations and Real Estate Opportunities",
      link: "https://www.thailandprivilege.co.th/privileges/stay",
      alt: "Long-Term Residence",
    },
    {
      imgUrl: "/home/privileges-travel-respon.webp",
      title: <p className={styles.mobPrivHead}>TRAVEL</p>,
      desc: "Unforgettable Thai Experiences with Exceptional Privileges",
      link: "https://www.thailandprivilege.co.th/privileges/travel",
      alt: "Thailand Tour",
    },
    {
      imgUrl: "/home/privileges-leisure-respon.webp",
      title: <p className={styles.mobPrivHead}>LEISURE</p>,
      desc: "Experience VIP Travel and Discover the Wonders of Thailand",
      link: "https://www.thailandprivilege.co.th/privileges/leisure",
      alt: "Golden Visa Thailand",
    },
    {
      imgUrl: "/home/privileges-health-respon.webp",
      title: (
        <p className={styles.mobPrivHead}>
          HEALTH{" "}
          <span
            style={{
              fontFamily: "Playfair Display, sans-serif",
            }}
          >
            &
          </span>{" "}
          WELL-BEING
        </p>
      ),
      alt: "Citizenship By Investment",
      desc: "Prioritize Your Health with Premier Thai Wellness Services",
      link: "https://www.thailandprivilege.co.th/privileges/health-well-being",
    },
    {
      imgUrl: "/home/privileges-wealth-respon.webp",
      title: <p className={styles.mobPrivHead}>WEALTH</p>,
      desc: "Expert Wealth and Investment Guidance in Thailand",
      link: "https://www.thailandprivilege.co.th/privileges/wealth",
      alt: "Privilege Card Members",
    },
  ];

  return (
    <>
      <div className={styles.desktopPrivMainDiv}>
        <div className={styles.image_gallery}>
          <div className={styles.inner_container}>
            {/* <div
              className={styles.customCursor}
              style={{ left: position.x, top: position.y }}
            >
              <span>+</span>
            </div> */}
            <div className={styles.imageTextMainDiv}>
              <div className={styles.textDescriMainDiv}>
                <div className={styles.textDescriMainInnerDiv}>
                  <div>
                    <p className={styles.privileges_heading}>PRIVILEGES</p>

                    <div className={styles.contactInfoDivider}></div>
                  </div>
                  {data.length > 0 &&
                    data.map((e, i) => {
                      return (
                        <div key={i}>
                          <div
                            // key={i}
                            className={styles.textDescriSubDiv}
                            onMouseOver={() => {
                              setImgText(e.title);
                              setHoverIndex(i);
                              if (selectedText !== e.title) {
                                setHoverZoomIn(true);
                                setSelectedText(e.title);
                              }
                            }}
                            onMouseOut={() => {
                              setHoverZoomIn(false);
                              setHoverIndex(null);
                            }}
                          >
                            <div className={styles.textTitleDiv}>
                              <div
                                // className={styles.privileges_text}
                                className={styles.navLinkDiv}
                              >
                                <Link href={e.link} target="_blank">
                                  {e.text}
                                </Link>
                              </div>
                            </div>
                            <div className={styles.textDescriDiv}>
                              <div className={styles.textDescriInnerDiv}>
                                <p
                                  className={styles.textDescription}
                                  style={{ opacity: hoverIndex == i ? 1 : 0 }}
                                >
                                  {e.textDescri}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className={styles.imagecontainer}>
                {data
                  .filter((e) => e.title == imgText)
                  .map((e, i) => {
                    return (
                      <Image
                        key={i}
                        src={e.img}
                        alt={e.alt}
                        // className={styles.zoomin}
                        className={`${hoverZoomIn ? `${styles.zoomin}` : ""} ${
                          styles.changingImg
                        }`}
                        width={1900}
                        height={850}
                        // style={{
                        //   width: "100%",
                        //   height: "auto",
                        // }}
                        layout="responsive"
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================MOBILE VIEW====================================== */}
      <div className={styles.mobPrivMainDiv}>
        {mobileViewData.length > 0 &&
          mobileViewData.map((item, index) => {
            return (
              <div className={styles.navLinkDiv} key={index}>
                <div
                  key={index}
                  className={styles.mobPrivDiv}
                  style={{
                    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)), url(${item.imgUrl})`,
                  }}
                >
                  <Link href={item.link} target="_blank">
                    <div className={styles.mobPrivSubDiv}>
                      <div className={styles.mobPrivHeadDiv}>{item.title}</div>
                      <div className={styles.mobPrivParaDiv}>
                        <p className={styles.mobPrivPara}>{item.desc}</p>
                      </div>
                    </div>
                  </Link>
                  <div
                    className={styles.customMobileCursor}
                    // style={{ left: position.x, top: position.y }}
                  >
                    <span>+</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ThirdSection;
