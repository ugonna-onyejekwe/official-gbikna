import { ImCheckmark } from "react-icons/im";
import { RiExternalLinkFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import crypto from "../assets/core.png";

export const Product3 = () => {
  return (
    <div className="product_con olivia">
      <div className="txt_con" data-aos="fade-left">
        <h3>Crypto checkout</h3>

        <ul className="list_con">
          <li>
            <span className="check_mark">
              <ImCheckmark />
            </span>
            Enable customers to pay with crypto
          </li>
          <li>
            <span className="check_mark">
              <ImCheckmark />
            </span>
            We support over 90 different crypto currencies
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

      <div className="img" data-aos="fade-right">
        <img src={crypto} alt="megaclus" />
      </div>
    </div>
  );
};
