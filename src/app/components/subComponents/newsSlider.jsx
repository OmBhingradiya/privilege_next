import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./../../styles/newsSection.module.css";
import { MdOutlineAccessTime } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const data = [
  {
    event: "E-News",
    time: "1 Min Read",
    imgUrl: "/home/news/enews1.png",
    description: "privilege news march 2024",
    link: "https://www.thailandprivilege.co.th/news/privilege-news-march-2024",
  },
  {
    event: "E-News",
    time: "1 Min Read",
    imgUrl: "/home/news/enews2.png",
    description: "privilege news february 2024",
    link: "https://www.thailandprivilege.co.th/news/privilege-news-february-2024",
  },
  {
    event: "E-News",
    time: "1 Min Read",
    imgUrl: "/home/news/enews3.png",
    description: "privilege news january 2024",
    link: "https://www.thailandprivilege.co.th/news/privilege-news-january-2024",
  },
  {
    event: "E-News",
    time: "1 Min Read",
    imgUrl: "/home/news/enews4.png",
    description: "privilege news december 2023",
    link: "https://www.thailandprivilege.co.th/news/privilege-news-december-2023",
  },
  {
    event: "Press",
    time: "5 Min Read",
    imgUrl: "/home/news/press2.png",
    description:
      "Thailand Privilege Card showcases 2023 outlook with record-breaking 11,846 membership",
    link: "https://www.thailandprivilege.co.th/news/thailand-privilege-card-showcases-2023-outlook-with-record-breaking-11-846-membership",
  },
  {
    event: "Press",
    time: "2 Min Read",
    imgUrl: "/home/news/press3.png",
    description: "Membership Upgrade Information",
    link: "https://www.thailandprivilege.co.th/news/membership-upgrade-information",
  },
  {
    event: "Press",
    time: "2 Min Read",
    imgUrl: "/home/news/press1.png",
    description: "Membership Application Fee of 50,000 Baht",
    link: "https://www.thailandprivilege.co.th/news/membership-application-fee-of-50-000-baht",
  },
  {
    event: "Events",
    time: "1 Min Read",
    imgUrl: "/home/news/event1.png",
    description: "Full Video Press Conference from Events",
    link: "https://www.thailandprivilege.co.th/news/video-press-conference",
  },
  {
    event: "Events",
    time: "1 Min Read",
    imgUrl: "/home/news/event2.png",
    description:
      "Thailand Privilege Card Co., Ltd. convened a meeting with GSSA",
    link: "https://www.thailandprivilege.co.th/news/thailand-privilege-card-co-ltd-convened-a-meeting-with-gssa",
  },
  {
    event: "Events",
    time: "1 Min Read",
    imgUrl: "/home/news/event3.png",
    description:
      "Navigating Your Golden Years: A Comprehensive Guide to the Retirement Visa in Thailand",
    link: "https://www.thailandprivilege.co.th/news/thailand-privilege-card-marks-20th-anniversary",
  },
];

const NewsSlider = () => {
  const [showPrevArrow, setShowPrevArrow] = useState(false);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: () => setShowPrevArrow(true),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={styles.news_section} id="news_slider">
        <Slider {...settings}>
          {data.length > 0 &&
            data.map((item, index) => {
              return (
                //Old Design
                // <div key={index} className={styles.main_newsSection}>
                //   <div className={styles.news_continent}>
                //     <div className={styles.event_time}>
                //       <div>
                //         <p className={styles.event_text}>Event</p>
                //       </div>
                //       <div className={styles.time_text}>
                //         <MdOutlineAccessTime />
                //         <p className={styles.time}>1 Hour Ago</p>
                //       </div>
                //     </div>
                //     <div className={styles.news_image}>
                //       <img
                //         src={item.imgUrl}
                //         alt="promotion image"
                //         style={{ width: "100%" }}
                //       />
                //     </div>
                //   </div>
                //   <div>
                //     <p className={styles.news_text}>
                //       Exclusive airport lounge for members now open
                //     </p>
                //     <hr className={styles.news_hr} />
                //     <div className={styles.button_container}>
                //       <button className={styles.button}>Read More</button>
                //     </div>
                //   </div>
                // </div>
                <div key={index} className={styles.main_newsSection}>
                  <div className={styles.inner_newsSection}>
                    <div className={styles.news_content}>
                      <div className={styles.news_image}>
                        <Image
                          src={item.imgUrl}
                          alt="promotion image"
                          width={420}
                          height={324}
                          // style={{
                          //   width: "100%",
                          //   height: "auto",
                          // }}
                          layout="responsive"
                        />
                      </div>
                      <div className={styles.event_time}>
                        <div>
                          <p className={styles.event_text}>{item.event}</p>
                        </div>
                        <div className={styles.time_text}>
                          <MdOutlineAccessTime />
                          <p className={styles.time}>{item.time}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.textAndButton}>
                      <p className={styles.news_text}>{item.description}</p>
                      <div className={styles.button_container}>
                        <Link
                          href={item.link}
                          target="_blank"
                          aria-label={`Read more about ${item.description}`}
                        >
                          <button className={styles.btn}>
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
                            <span>Read More</span>
                            <span
                              className={styles.visually_hidden}
                            >{`Read more about ${item.description}`}</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </>
  );
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          // background: `linear-gradient(101deg, #ac8d71 0%, #fce7cf 50.5%, #d7bea0 100%)`,
          // padding: "3px",
          // borderRadius: "50%",
          background: `url("./next.png")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${showPrevArrow ? "" : "hidden"}`}
        style={{
          ...style,
          display: "block",
          // background: `linear-gradient(101deg, #ac8d71 0%, #fce7cf 50.5%, #d7bea0 100%)`,
          // padding: "3px",
          // background: "#dfc7ab",
          // fontSize: "20px",
          // borderRadius: "50%",
          background: `url("./prev.png")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        onClick={onClick}
      />
    );
  }
};

export default NewsSlider;
