import "./home.scss";
import { ImCheckmark } from "react-icons/im";

import finance1 from "../../assets/finance1.png";
import finance4 from "../../assets/finance4.png";

import bus1 from "../../assets/bus1.png";
import bus2 from "../../assets/bus2.png";
import bus3 from "../../assets/bus3.png";
import bus4 from "../../assets/bus4.png";

import emp1 from "../../assets/emp1.jpg";
import emp2 from "../../assets/emp2.png";
import emp3 from "../../assets/emp3.png";

import pci from "../../assets/pci-logo.png";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

export const Home = () => {
  return (
    <div className="home_page">
      <section className="home_section">
        {/* HOME SECTION */}
        <div className="main_wrapper">
          <div className="container">
            <div className="txt_con">
              <h1 data-aos="fade-up">
                Staying ahead with <span> Digital Payments</span>
              </h1>
              <p data-aos="fade-up">
                We provide businesses with global, robust and scalable payment
                solutions.
              </p>

              <div className="btns" data-aos="fade-up">
                <Link to="/contact">
                  <button className="trans_btn">contact us</button>
                </Link>

                <Link to="/products">
                  <button className="trans_btn">our products</button>
                </Link>
              </div>

              <div className="license" data-aos="fade-up">
                <img src={pci} alt="pci lpgo" />
              </div>
            </div>

            <div className="img_con">
              {/* <img src={hero_img} alt="hero image" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <div className="services_wrapper">
        {/* Your Financial Partner */}
        <section className="financial_solution_section service_con">
          <div className="container">
            <div className="txt_con" data-aos="fade-left">
              <h2>Your Financial Partner</h2>

              <p>We offer the following services:</p>

              <ul className="list_con">
                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  POS and ATM Payment Application Development
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
                  Bills Payment Engine
                </li>

                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Core Banking Applications
                </li>
                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Fund Transfer Engine
                </li>
                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Agency Banking Services
                </li>
              </ul>
            </div>

            <div className="img_con" data-aos="fade-right">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000,
                }}
                speed={800}
              >
                <SwiperSlide className="img">
                  <img src={finance1} alt="image" />
                </SwiperSlide>

                <SwiperSlide className="img">
                  <img src={finance4} alt="image" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        {/*  Growing your business is our priority */}
        <section className="business_solution_section service_con">
          <div className="container">
            <div className="txt_con" data-aos="fade-right">
              <h2>Growing your business is our priority</h2>

              <p>
                Gbikna powers businesses to achieve operational excellence and
                strategic growth through enterprise solutions. We offer business
                tools and platforms to drive growth and help business make data
                driven decisions.
              </p>

              <ul className="list_con">
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
                  Data Analytics
                </li>

                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Artificial Intelligence
                </li>

                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Risk Analysis Using Artificial Intelligence
                </li>
                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Task Management Application
                </li>
              </ul>
            </div>

            <div className="img_con" data-aos="fade-left">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000,
                }}
                speed={800}
              >
                <SwiperSlide className="img">
                  <img src={bus1} alt="image" />
                </SwiperSlide>
                <SwiperSlide className="img">
                  <img src={bus2} alt="image" />
                </SwiperSlide>
                <SwiperSlide className="img">
                  <img src={bus3} alt="image" />
                </SwiperSlide>
                <SwiperSlide className="img">
                  <img src={bus4} alt="image" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        {/* Empowering Your Enterprise */}
        <section className="infrastructure_solution_section service_con">
          <div className="container">
            <div className="txt_con" data-aos="fade-left">
              <h2> Empowering Your Enterprise</h2>

              <p>
                Our team of experts deliver top-notch solution that streamline
                business processes, ensuring you stay ahead in any competitive
                landscape. With Gbikna, experience a seamless blend of
                innovation and expertise that would transform your business and
                unlock its full potential.
              </p>

              <ul className="list_con">
                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Transport Fare Solutions
                </li>

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
                  Traffic Management Solution
                </li>
              </ul>
            </div>

            <div className="img_con" data-aos="fade-right">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000,
                }}
                speed={800}
              >
                <SwiperSlide className="img">
                  <img src={emp1} alt="image" />
                </SwiperSlide>
                <SwiperSlide className="img">
                  <img src={emp2} alt="image" />
                </SwiperSlide>
                <SwiperSlide className="img">
                  <img src={emp3} alt="image" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
