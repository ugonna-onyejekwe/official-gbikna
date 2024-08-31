import { ImCheckmark } from "react-icons/im";
import { RiExternalLinkFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import olivia_img from "../assets/megaclus.png";

export const Product4 = () => {
  return (
    <div className="product_con olivia">
      <div className="txt_con" data-aos="fade-left">
        <h3>Core banking Application</h3>
        <div className="txt">
          <p>
            Better alternative to mifos. Closed sourced and secured. Multibranch
            and Best for digital microfinance and commercial banks.
          </p>
        </div>

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
        <img src={olivia_img} alt="megaclus" />
      </div>
    </div>
  );
};
