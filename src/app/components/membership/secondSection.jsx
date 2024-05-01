import React, { useEffect } from "react";
import styles from "./../../styles/membership/secondSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const SecondSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  const dummyData = [
    {
      name: "Birthday River Cruise Seasonal Gifts",
      imgUrl: "/membership/img/1.png",
    },
    {
      name: "Personalized Concierge",
      imgUrl: "/membership/img/2.png",
    },
    {
      name: "Priority Services",
      imgUrl: "/membership/img/3.png",
    },
    {
      name: "Dedicated Hotline",
      imgUrl: "/membership/img/4.png",
    },
    {
      name: "Supercar Test Drive",
      imgUrl: "/membership/img/5.png",
    },
    {
      name: "Free Domestic Flight",
      imgUrl: "/membership/img/6.png",
    },
    {
      name: "Accor Plus Hotel Membership",
      imgUrl: "/membership/img/7.png",
    },
    {
      name: "Hotel Fitness",
      imgUrl: "/membership/img/8.png",
    },
    {
      name: "Exclusive Networking Event",
      imgUrl: "/membership/img/9.png",
    },
    {
      name: "Annual Health Check",
      imgUrl: "/membership/img/10.png",
    },
  ];

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div className={styles.main_heading} data-aos="zoom-in">
            <h2>ENDLESS PRIVILEGES</h2>
          </div>
          <hr className={styles.main_hr} data-aos="zoom-in" />
          <p className={styles.main_text} data-aos="zoom-out">
            Enrolling in the Thailand Privilege Card Program is a simple and
            expedient process, offering numerous benefits.
          </p>
          <div className={styles.main_container}>
            <div className={styles.first_container}>
              <div className={styles.first_container_image}>
                <Image
                  src="/membership/img/1.png"
                  alt="Birthday River Cruise Seasonal Gifts"
                  width={420}
                  height={475}
                  layout="responsive"
                />

                <div className={styles.absolute_container}>
                  <div className={styles.absolute_div}>
                    <hr />
                    <p>Birthday River Cruise Seasonal Gifts</p>
                  </div>
                </div>
              </div>
              <div className={styles.first_container_image}>
                <Image
                  src="/membership/img/2.png"
                  alt="Personalized Concierge"
                  width={420}
                  height={475}
                  layout="responsive"
                />
                <div className={styles.absolute_container}>
                  <div className={styles.absolute_div}>
                    <hr />
                    <p>Personalized Concierge</p>
                  </div>
                </div>
              </div>
              <div className={styles.first_container_image}>
                <Image
                  src="/membership/img/3.png"
                  alt="Priority Services"
                  width={420}
                  height={475}
                  layout="responsive"
                />
                <div className={styles.absolute_container}>
                  <div className={styles.absolute_div}>
                    <hr />
                    <p>Priority Services</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.second_container}>
              <div className={styles.second_container_image}>
                <Image
                  src="/membership/img/5.png"
                  alt="Dedicated Hotline"
                  width={645}
                  height={475}
                  layout="responsive"
                />
                <div className={styles.absolute_container}>
                  <div className={styles.absolute_div}>
                    <hr />
                    <p>Dedicated Hotline</p>
                  </div>
                </div>
              </div>
              <div className={styles.second_container_image}>
                <Image
                  src="/membership/img/4.png"
                  alt="Supercar Test Drive"
                  width={645}
                  height={475}
                  layout="responsive"
                />
                <div className={styles.absolute_container}>
                  <div className={styles.absolute_div}>
                    <hr />
                    <p>Supercar Test Drive</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.first_container}>
              <div className={styles.first_container_image}>
                <Image
                  src="/membership/img/6.png"
                  alt="Free Domestic Flight"
                  width={420}
                  height={475}
                  layout="responsive"
                />
                <div className={styles.absolute_container}>
                  <div className={styles.absolute_div}>
                    <hr />
                    <p>Free Domestic Flight</p>
                  </div>
                </div>
              </div>
              <div className={styles.first_container_image}>
                <Image
                  src="/membership/img/7.png"
                  alt="Accor Plus Hotel Membership"
                  width={420}
                  height={475}
                  layout="responsive"
                />
                <div className={styles.absolute_container}>
                  <div className={styles.absolute_div}>
                    <hr />
                    <p>Accor Plus Hotel Membership</p>
                  </div>
                </div>
              </div>
              <div className={styles.first_container_image}>
                <Image
                  src="/membership/img/8.png"
                  alt="Hotel Fitness"
                  width={420}
                  height={475}
                  layout="responsive"
                />
                <div className={styles.absolute_container}>
                  <div className={styles.absolute_div}>
                    <hr />
                    <p>Hotel Fitness</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.second_container}>
              <div className={styles.second_container_image}>
                <Image
                  src="/membership/img/9.png"
                  alt="Exclusive Networking Event"
                  width={645}
                  height={475}
                  layout="responsive"
                />
                <div className={styles.absolute_container}>
                  <div className={styles.absolute_div}>
                    <hr />
                    <p>Exclusive Networking Event</p>
                  </div>
                </div>
              </div>
              <div className={styles.second_container_image}>
                <Image
                  src="/membership/img/20.png"
                  alt="Annual Health Check"
                  width={645}
                  height={475}
                  layout="responsive"
                />
                <div className={styles.absolute_container}>
                  <div className={styles.absolute_div}>
                    <hr />
                    <p>Annual Health Check</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.first_container}>
              <div className={styles.first_container_image}>
                <Image
                  src="/membership/img/10.png"
                  alt="Extraordinary Shopping Experiences"
                  width={420}
                  height={475}
                  layout="responsive"
                />
                <div className={styles.absolute_container}>
                  <div className={styles.absolute_div}>
                    <hr />
                    <p>Extraordinary Shopping Experiences</p>
                  </div>
                </div>
              </div>
              <div className={styles.first_container_image}>
                <Image
                  src="/membership/img/12.png"
                  alt="Co-working Space"
                  width={420}
                  height={475}
                  layout="responsive"
                />
                <div className={styles.absolute_container}>
                  <div className={styles.absolute_div}>
                    <hr />
                    <p>Co-working Space</p>
                  </div>
                </div>
              </div>
              <div className={styles.first_container_image}>
                <Image
                  src="/membership/img/11.png"
                  alt="Birthday Gift"
                  width={420}
                  height={475}
                  layout="responsive"
                />
                <div className={styles.absolute_container}>
                  <div className={styles.absolute_div}>
                    <hr />
                    <p>Birthday Gift</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.second_container}>
              <div className={styles.second_container_image}>
                <Image
                  src="/membership/img/19.png"
                  alt="Insurance"
                  width={645}
                  height={475}
                  layout="responsive"
                />
                <div className={styles.absolute_container}>
                  <div className={styles.absolute_div}>
                    <hr />
                    <p>Insurance</p>
                  </div>
                </div>
              </div>
              <div className={styles.second_container_image}>
                <Image
                  src="/membership/img/13.png"
                  alt="Hotel Free Night"
                  width={645}
                  height={475}
                  layout="responsive"
                />
                <div className={styles.absolute_container}>
                  <div className={styles.absolute_div}>
                    <hr />
                    <p>Hotel Free Night</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.first_container}>
              <div className={styles.first_container_image}>
                <Image
                  src="/membership/img/14.png"
                  alt="Early Bird Event Tickets"
                  width={420}
                  height={475}
                  layout="responsive"
                />
                <div className={styles.absolute_container}>
                  <div className={styles.absolute_div}>
                    <hr />
                    <p>Early Bird Event Tickets</p>
                  </div>
                </div>
              </div>
              <div className={styles.first_container_image}>
                <Image
                  src="/membership/img/15.png"
                  alt="Wealth Advisory"
                  width={420}
                  height={475}
                  layout="responsive"
                />
                <div className={styles.absolute_container}>
                  <div className={styles.absolute_div}>
                    <hr />
                    <p>Wealth Advisory</p>
                  </div>
                </div>
              </div>
              <div className={styles.first_container_image}>
                <Image
                  src="/membership/img/16.png"
                  alt="Movie VIP Seating"
                  width={420}
                  height={475}
                  layout="responsive"
                />
                <div className={styles.absolute_container}>
                  <div className={styles.absolute_div}>
                    <hr />
                    <p>Movie VIP Seating</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.second_container}>
              <div className={styles.second_container_image}>
                <Image
                  src="/membership/img/18.png"
                  alt="Seasonal Event"
                  width={645}
                  height={475}
                  layout="responsive"
                />
                <div className={styles.absolute_container}>
                  <div className={styles.absolute_div}>
                    <hr />
                    <p>Seasonal Event</p>
                  </div>
                </div>
              </div>
              <div className={styles.second_container_image}>
                <Image
                  src="/membership/img/17.png"
                  alt="Golf and spa"
                  width={645}
                  height={475}
                  layout="responsive"
                />
                <div className={styles.absolute_container}>
                  <div className={styles.absolute_div}>
                    <hr />
                    <p>
                      Golf{" "}
                      <span
                        style={{
                          fontFamily: "Playfair Display, sans-serif",
                        }}
                      >
                        &
                      </span>{" "}
                      Spa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
