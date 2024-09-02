import { RiExternalLinkFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import pos from "../assets/pos.jpg";

export const Product5 = () => {
  return (
    <div className="product_con olivia">
      <div className="txt_con" data-aos="fade-right">
        <h3>POS development</h3>
        <div className="txt">
          <p>
            Build certified POS applications for Android, Linux and mpos devices
          </p>
        </div>

        <div className="btn">
          <Link to="/contact">
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
        <img src={pos} alt="megaclus" />
      </div>
    </div>
  );
};
