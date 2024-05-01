import React, { useEffect } from "react";
import styles from "./../../styles/tours&hotels/hotelSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

const HotelSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  const demoData = [
    {
      hotelImageUrl: "./tours&hotel/hotel_1.png",
      title: "silavadee resort",
      text: "SATHORN ROAD, 1.8 KM, 20 MINUTE WALK OR 7 MINUTE DRIVE",
      description:
        "Silavadee is luxury with a breathtaking view. A total of 80 rooms, infinity-edge pool villas and pool villa suites are built on the cliff of Laem Nan beach, the most beauteous and exclusive beach on Samui island. Tucked away from the busy world yet only a short drive from it all. The perfect combination of the magnificent land-sea and skyscape with our renowned high level of personal services is what makes Silavadee Pool Spa Resort Samui romantic and special.",
    },
    {
      hotelImageUrl: "./tours&hotel/hotel_2.png",
      title: "the beach samui",
      text: "SATHORN ROAD, 1.8 KM, 20 MINUTE WALK OR 7 MINUTE DRIVE",
      description:
        "Travellers, wander lusters and wellness-seekers alike are invited to experience The Beach Samui, an award-winning all-suite boutique hotel, set on a coral-strewn beach in a traditional fishing village, with far-reaching views across southern Koh Samui’s archipelago, the perfect base from which to explore this virgin coast, while experiencing life as a local.",
    },
    {
      hotelImageUrl: "./tours&hotel/hotel_3.png",
      title: "dusit",
      text: "SATHORN ROAD, 1.8 KM, 20 MINUTE WALK OR 7 MINUTE DRIVE",
      description:
        "With a heartfelt belief and commitment to introducing Thai hospitality to the world, we offer guests a uniquely special stay in high-style surroundings and a personalised  approach to service. Our portfolio of brands offers distinctive experiences, all united by service that is warm, attentive and above all, gracious.",
    },
  ];
  const data = [
    {
      hotelImageUrl: "/tours&hotel/hotel/1.png",
      title: "SILAVADEE RESORT",
      text: "SATHORN ROAD, 1.8 KM, 20 MINUTE WALK OR 7 MINUTE DRIVE",
      description:
        "Silavadee is luxury with a breathtaking view. A total of 80 rooms, infinity-edge pool villas and pool villa suites are built on the cliff of Laem Nan beach, the most beauteous and exclusive beach on Samui island. Tucked away from the busy world yet only a short drive from it all. The perfect combination of the magnificent land-sea and skyscape with our renowned high level of personal services is what makes Silavadee Pool Spa Resort Samui romantic and special.",

      link: "https://www.silavadeeresort.com",
    },
    {
      hotelImageUrl: "/tours&hotel/hotel/2.png",
      title: "THE BEACH SAMUI",
      text: "SATHORN ROAD, 1.8 KM, 20 MINUTE WALK OR 7 MINUTE DRIVE",
      description:
        "Silavadee is luxury with a breathtaking view. A total of 80 rooms, infinity-edge pool villas and pool villa suites are built on the cliff of Laem Nan beach, the most beauteous and exclusive beach on Samui island. Tucked away from the busy world yet only a short drive from it all. The perfect combination of the magnificent land-sea and skyscape with our renowned high level of personal services is what makes Silavadee Pool Spa Resort Samui romantic and special.",
      link: "https://www.thebeachsamui.com",
    },
    {
      hotelImageUrl: "/tours&hotel/hotel/3.png",
      title: "DUSIT",
      text: "SATHORN ROAD, 1.8 KM, 20 MINUTE WALK OR 7 MINUTE DRIVE",
      description:
        "With a heartfelt belief and commitment to introducing Thai hospitality to the world, we offer guests a uniquely special stay in high-style surroundings and a personalised approach to service. Our portfolio of brands offers distinctive experiences, all united by service that is warm, attentive and above all, gracious.",
      link: "https://www.dusit.com",
    },
    {
      hotelImageUrl: "/tours&hotel/hotel/4.png",
      title: "S HOTELS RESORTS",
      text: "SATHORN ROAD, 1.8 KM, 20 MINUTE WALK OR 7 MINUTE DRIVE",
      description:
        "SHR has a unique portfolio of properties in desirable global tourism destinations. In 2023, S Hotels & Resorts owns a total of 38 hotels with a total of 4,552 keys in top destinations such as The Republic of Maldives, The Republic of Fiji, The Republic of Mauritius, The United Kingdom, and Thailand, all of which are attracting diverse numbers of tourists worldwide.",
      link: "https://www.shotelsresorts.com",
    },
    {
      hotelImageUrl: "/tours&hotel/hotel/5.png",
      title: "SAII RESORTS",
      text: "SATHORN ROAD, 1.8 KM, 20 MINUTE WALK OR 7 MINUTE DRIVE",
      description: `SAii, a sustainable lifestyle resort brand, offers global experience seekers down-to-earth luxury and curated journey in key destinations in Asia Pacific and the Indian Ocean.
        Nestled on Bangtao Beach, signature Thai hospitality, sensory aesthetics and sublime dining experiences combine to provide postcard-perfect memories in the heart of Phuket's Laguna, with its bounty of natural, cultural and culinary attractions.`,
      link: "https://www.saiiresorts.com",
    },
    {
      hotelImageUrl: "/tours&hotel/hotel/6.png",
      title: "FRASERS HOSPITALITY",
      text: "SATHORN ROAD, 1.8 KM, 20 MINUTE WALK OR 7 MINUTE DRIVE",
      description:
        "At Frasers Hospitality, the difference lies in the way we care. Underlying our award-winning service is an innate sense of empathy, and a strong intuition for what our guests need. With our attention to detail coupled with the comfort and luxury of our properties, we deliver a memorable experience which our guests keep coming back for.",
      link: "https://www.frasershospitality.com/en/locations",
    },
    {
      hotelImageUrl: "/tours&hotel/hotel/7.png",
      title: "ONE HOSPITALITY",
      text: "SATHORN ROAD, 1.8 KM, 20 MINUTE WALK OR 7 MINUTE DRIVE",
      description:
        "The goal of O.N.E. is to create unique, big city experiences through the medium of food, drink, and design. We live, sleep, eat, and breathe hospitality and can't wait to serve you. A scratch Italian kitchen in downtown York featuring housemade pasta, craft cocktails, and a state of the art wine-by-the-ounce tasting system boasting 30 different wines.",
      link: "https://www.onehospitality.group/catering",
    },
    {
      hotelImageUrl: "/tours&hotel/hotel/8.png",
      title: "CENTARA HOTELS RESORTS",
      text: "SATHORN ROAD, 1.8 KM, 20 MINUTE WALK OR 7 MINUTE DRIVE",
      description:
        "Discover stary-driven hospitality dedicated to creating personal moments and enduring memories in iconic destinations. From vibrant cities to tranquil escapes, every property evokes and inspires stories old and new; and each embraces a distinct personality inspired by the spirit of its destination. A journey to personalised luxury. A relaxing, meaningful escape where stories are written. Centara Reserve is an invitation to discover a rare destination's unique local culture, genuine hospitality and remarkable nature.",
      link: "https://www.centarahotelsresorts.com",
    },
    {
      hotelImageUrl: "/tours&hotel/hotel/9.png",
      title: "MONTARA HOSPITALITY",
      text: "SATHORN ROAD, 1.8 KM, 20 MINUTE WALK OR 7 MINUTE DRIVE",
      description:
        "A luxury boutique hotel steeped in history providing tailor-made holiday experiences Step away from the hustle and bustle of Bangkok and find in this top boutique hotel a place of relaxation and serenity accompanied by our own personal brand of attention and service, tailor-made to every guest who steps through our doors.",
      link: "https://www.montarahospitality.com/live/praya-palazzo",
    },
    {
      hotelImageUrl: "/tours&hotel/hotel/10.png",
      title: "TRISARA",
      text: "SATHORN ROAD, 1.8 KM, 20 MINUTE WALK OR 7 MINUTE DRIVE",
      description:
        "On a secluded cove nesting in the tropical hills of northwestern Phuket, a stroll on the shores of the crisp blue Andaman Sea inspired a vision. Here, among centuries-old ficus trees and breezy coconut and fishtail palms, we envisioned a place where land and sea come together, where culture and heritage can flourish and anchor life’s journey. This is our version of Trisara – a garden in the third heaven.",
      link: "https://trisara.com",
    },
    {
      hotelImageUrl: "/tours&hotel/hotel/11.png",
      title: "Modena by Fraser Suites",
      text: "SATHORN ROAD, 1.8 KM, 20 MINUTE WALK OR 7 MINUTE DRIVE",
      description:
        "Located in Bangkok’s newest office complex, FYI Center, Modena by Fraser is a collection of affordable, fully serviced residences that challenge conventional travel accommodation. There is a complete range of facilities such as well-equipped kitchenettes, spacious living areas, Clique Corners for surfing fun, all-day dining, children’s play areas and gyms that never close.",
      link: "https://www.frasershospitality.com/en/thailand/bangkok/modena-by-fraser-bangkok/?utm_source=google,+facebook&utm_medium=cpc,+banner&utm_campaign=Happy+Easter+Egg",
    },
    {
      hotelImageUrl: "/tours&hotel/hotel/12.png",
      title: "AETAS Lumpini",
      text: "SATHORN ROAD, 1.8 KM, 20 MINUTE WALK OR 7 MINUTE DRIVE",
      description: `Discover Bangkok's urban retreat, AETAS Lumpini Hotel. Located just 2 minutes from MRT Lumpini, our hotel provides unparalleled convenience. Experience genuine hospitality from our dedicated staff, converting your stay into a true "home away from home."
        Enjoy a variety of tasty dining options, including pork-free choices. Your ideal retreat awaits at AETAS Lumpini, where comfort meets convenience in the heart of the city.`,
      link: "https://lumpini.aetashotels.com",
    },
    {
      hotelImageUrl: "/tours&hotel/hotel/13.png",
      title: "SO Bangkok",
      text: "SATHORN ROAD, 1.8 KM, 20 MINUTE WALK OR 7 MINUTE DRIVE",
      description:
        "In a city where anything is possible, SO/ Bangkok hotel is everything to everyone, whether you’re in Bangkok for business or leisure, party or spa, or a little bit of everything. Join us for a SO fabulous voyage in one of Luxury 5 Star Hotels Bangkok has seen and experienced the vibrant Thai capital as you’ve never done before.",
      link: "https://www.so-bangkok.com/",
    },
    {
      hotelImageUrl: "/tours&hotel/hotel/15.png",
      title: "RUNESU",
      text: "SATHORN ROAD, 1.8 KM, 20 MINUTE WALK OR 7 MINUTE DRIVE",
      description:
        "emphasizes the essence of Japanese living, including the incorporation of materials imported from Japan. For example, bathrooms with a new system where the floor can dry quickly and the use of nanotechnology tiles with special properties to absorb odors, and moisture. And Runesu function, storage under the floor. with a 60 cm space height, you no longer need to fit everything into your bedroom’s wardrobe.",
      link: "https://www.runesuthonglor5.com",
    },
    {
      hotelImageUrl: "/tours&hotel/hotel/14.png",
      title: "AT EASE",
      text: "SATHORN ROAD, 1.8 KM, 20 MINUTE WALK OR 7 MINUTE DRIVE",
      description:
        "AT EASE Saladaeng is a well-established cozy residence managed by AETAS Hotels & Residences. AT EASE is located right in Bangkok's Central Business District.  Situated on the popular Saladaeng Road, it is well connected to other major roads such as Satorn, Silom, and the Rama 4. The nearest subway station (MRT - Silom) is a mere 7-minute stroll from the lobby.",
      link: "https://www.stayatease.com/",
    },
  ];
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div className={styles.main_heading} data-aos="fade-down">
            <h2>HOTEL</h2>
          </div>
          <hr className={styles.main_hr} data-aos="fade-down" />
          <p className={styles.main_text} data-aos="fade-down">
            We represent many 3-5-star hotels in Thailand, providing free
            consultation, personalized guidance, and hotel bookings based on
            your budget. Please contact us before making a reservation.
          </p>
          <div className={styles.hotel_main_container_demo}>
            {data.length &&
              data.map((item, index) => {
                return (
                  <div className={styles.hotel_box_demo} key={index}>
                    <div>
                      <div className={styles.hotel_image_demo}>
                        <Image
                          src={item.hotelImageUrl}
                          alt={item.text}
                          width={442}
                          height={356}
                          layout="responsive"
                        />
                      </div>
                      <div className={styles.hotel_desc_demo}>
                        <h2>{item.title}</h2>
                        {/* <p>{item.text}</p> */}
                        <p>{item.description}</p>
                      </div>
                    </div>
                    <div className={styles.apply_button_demo}>
                      {/* <button className={styles.button_demo}>Book Now</button> */}
                      <button className={styles.btn}>
                        <Link
                          href={item.link}
                          aria-label={`Read more about ${item.description}`}
                          target="_blank"
                        >
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
                        </Link>
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
          {/* <div className={styles.hotel_main_container}>
            {data.length &&
              data.map((item, index) => {
                return (
                  <div
                    className={styles.hotel_box}
                    key={index}
                    // data-aos="fade-down"
                  >
                    <div>
                      <div className={styles.hotel_image}>
                        <img
                          src={item.hotelImageUrl}
                          alt={item.text}
                          style={{ width: "100%" }}
                        />
                      </div>
                      <div className={styles.hotel_desc}>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                    <div className={styles.apply_button}>
                      <Link
                        // href=""
                        className={styles.button}
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HotelSection;
