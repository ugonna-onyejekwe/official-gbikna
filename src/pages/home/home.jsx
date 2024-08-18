import "./home.scss";
import about_image from "../../assets/about.jpg";
import { Link } from "react-router-dom";
import { ImCheckmark } from "react-icons/im";
import finance_image from "../../assets/finance.jpg";
import business_image from "../../assets/business.webp";
import infrast_image from "../../assets/infrast.jpg";
import { partnersInfo } from "../../components/info";

import home_img1 from "../../assets/home-img1.jpg";
import home_img2 from "../../assets/home-img2.jpg";
import home_img3 from "../../assets/home-img3.jpg";
import home_img4 from "../../assets/home-img4.jpeg";

import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

export const Home = () => {
  return (
    <div className="home_page">
      <section className="home_section">
        <div className="main_wrapper">
          <div className="container">
            <div className="txt_con">
              <h1 data-aos="fade-up">
                Integrating <span>solutions</span> for a better world
              </h1>
              <p data-aos="fade-up">
                We offer a comprehensive suite of technology solutions aimed at
                accelerating business growth around the world.
              </p>

              <div className="btns" data-aos="fade-up">
                <button className="trans_btn">contact us</button>
                <button className="trans_btn">our service</button>
              </div>
            </div>

            <div className="img_wrapper">
              <div className="img_box_con">
                <div className="img">
                  <img src={home_img1} alt="image" />
                </div>

                <div className="img">
                  <img src={home_img2} alt="image" />
                </div>

                <div className="img">
                  <img src={home_img3} alt="image" />
                </div>
                <div className="img">
                  <img src={home_img4} alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="partners_section">
          <div className="container">
            <div className="txt_con">
              <p>Our partners</p>
              <h3>That believes in us</h3>
            </div>

            <div className="swiper_wrapper">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={"auto"}
                autoplay={{
                  delay: 700,
                }}
                speed={2000}
                loop={true}
                className="swiper_con"
              >
                {partnersInfo.map((i, key) => {
                  return (
                    <SwiperSlide className="box" key={key}>
                      <img src={i.img} alt="image" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="about_section">
        <div className="container">
          <div className="txt_con" data-aos="fade-right">
            <h2>about gbikna</h2>
            <div className="txt">
              <p>
                At Gbikna, innovation is at the heart of everything we do, and
                we are passionate about shaping the future of technology. We
                understand that managing a business can be complicated, so we
                create solutions and tools that help you take control of your
                business.
              </p>

              <p>
                Our commitment goes beyond simply providing software solutions,
                we partner with businesses to understand their unique needs and
                deliver tailored solutions that promotes e-commerce and powers
                businesses to scale globally and thrive in the digital world.
              </p>
            </div>
          </div>

          <div className="img_con" data-aos="fade-left">
            <img src={about_image} alt="about image" />
          </div>
        </div>
      </section>

      <div className="services_wrapper">
        <section className="financial_solution_section service_con">
          <div className="container">
            <div className="txt_con" data-aos="fade-left">
              <small>Financial Solutions</small>
              <h2>Your Financial Partner</h2>

              <p>We offer the following services:</p>

              <ul>
                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  E-commerce services
                </li>

                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Core banking Applications
                </li>

                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  POS Application
                </li>

                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Agency Banking Services
                </li>
                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Payment Gateway
                </li>
                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Terminal Management System
                </li>
              </ul>
            </div>

            <div className="img_con" data-aos="fade-right">
              <img src={finance_image} alt="image" />
            </div>
          </div>
        </section>

        <section className="business_solution_section service_con">
          <div className="container">
            <div className="txt_con" data-aos="fade-right">
              <small>enterprise Solutions</small>
              <h2>Growing your business is our priority</h2>

              <p>
                Gbikna powers businesses to achieve operational excellence and
                strategic growth through enterprise solutions. We offer business
                tools and platforms to drive growth and help business make data
                driven decisions.
              </p>

              <ul>
                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Enterprise solutions
                </li>

                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Application development
                </li>

                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Data analytics
                </li>
                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Risk Analysis and artificial intelligence
                </li>

                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Card Switch
                </li>
                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Transportation and Traffic Management solutions
                </li>
              </ul>
            </div>

            <div className="img_con" data-aos="fade-left">
              <img src={business_image} alt="image" />
            </div>
          </div>
        </section>

        <section className="infrastructure_solution_section service_con">
          <div className="container">
            <div className="txt_con" data-aos="fade-left">
              <small>infrastructure & operations</small>
              <h2> Empowering Your Enterprise</h2>

              <p>
                Our team of experts deliver top-notch solution that streamline
                business processes, ensuring you stay ahead in any competitive
                landscape. With Gbikna, experience a seamless blend of
                innovation and expertise that would transform your business and
                unlock its full potential.
              </p>

              <ul>
                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Terminal Management System
                </li>

                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Traffic Management Solutions
                </li>
                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Business Intelligence solutions
                </li>
              </ul>
            </div>

            <div className="img_con" data-aos="fade-right">
              <img src={infrast_image} alt="image" />
            </div>
          </div>
        </section>
      </div> */}
    </div>
  );
};
