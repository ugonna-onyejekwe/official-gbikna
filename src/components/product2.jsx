import { ImCheckmark } from "react-icons/im";
import { RiExternalLinkFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import olivia_img from "../assets/olivia-img.png";

export const Product2 = () => {
  return (
    <div className="product_con olivia">
      <div className="txt_con" data-aos="fade-right">
        <h3>olivia</h3>
        <div className="txt">
          <p>
            Olivia is a platform built for all types of businesses to attain
            profittablity and exposure easily. Similar to Shopify, business
            owners can create and design their business website easily. It is
            easy to use. Olivia empowers entrepreneurs and businesses to reach
            their full potential, giving the flexibility and scalability you
            need to thrive in the business world. Supports goods and services,
            bookable services, digital products, etc
          </p>
        </div>
        <ul className="list_con">
          <li>
            <span className="check_mark">
              <ImCheckmark />
            </span>
            Comprehensive Order Management and Fulfillment Solutions
          </li>
          <li>
            <span className="check_mark">
              <ImCheckmark />
            </span>
            Advanced Self-Service Kiosks
          </li>
          <li>
            <span className="check_mark">
              <ImCheckmark />
            </span>
            Embedded Pos
          </li>

          <li>
            <span className="check_mark">
              <ImCheckmark />
            </span>
            Robust Payment Option
          </li>

          <li>
            <span className="check_mark">
              <ImCheckmark />
            </span>
            Checkout by crypto
          </li>

          <li>
            <span className="check_mark">
              <ImCheckmark />
            </span>
            Available in over 100+ countries
          </li>
        </ul>

        <div className="btn">
          <Link to="">
            <button>
              learn more{" "}
              <span>
                <RiExternalLinkFill />
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div className="img" data-aos="fade-left">
        <img src={olivia_img} alt="megaclus" />
      </div>
    </div>
  );
};
