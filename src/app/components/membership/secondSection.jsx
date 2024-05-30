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
                  src="/membership/img/1.webp"
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
                  src="/membership/img/2.webp"
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
                  src="/membership/img/3.webp"
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
                  src="/membership/img/5.webp"
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
                  src="/membership/img/4.webp"
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
                  src="/membership/img/6.webp"
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
                  src="/membership/img/7.webp"
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
                  src="/membership/img/8.webp"
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
                  src="/membership/img/9.webp"
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
                  src="/membership/img/20.webp"
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
                  src="/membership/img/10.webp"
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
                  src="/membership/img/12.webp"
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
                  src="/membership/img/11.webp"
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
                  src="/membership/img/19.webp"
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
                  src="/membership/img/13.webp"
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
                  src="/membership/img/14.webp"
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
                  src="/membership/img/15.webp"
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
                  src="/membership/img/16.webp"
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
                  src="/membership/img/18.webp"
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
                  src="/membership/img/17.webp"
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
