import "./home.scss";
import { ImCheckmark } from "react-icons/im";
import finance_image from "../../assets/Dashboard.jpg";
import business_image from "../../assets/business.jpg";
import infrast_image from "../../assets/management.jpg";

import pci from "../../assets/pci-logo.png";

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
                <button className="trans_btn">contact us</button>
                <button className="trans_btn">our service</button>
              </div>

              <div className="license">
                <p>PCIDSS compliant</p>
                <img src={pci} alt="pci lpgo" />
              </div>
            </div>

            <div className="img_con">
              {/* <img src={hero} alt="hero image" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <div className="services_wrapper">
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
                  Crypto Checkout
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
              <img src={finance_image} alt="image" />
            </div>
          </div>
        </section>

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
              <img src={business_image} alt="image" />
            </div>
          </div>
        </section>

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
              <img src={infrast_image} alt="image" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
