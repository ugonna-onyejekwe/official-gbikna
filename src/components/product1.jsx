import { RiExternalLinkFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import megaclus_img from "../assets/megaclus.png";

export const Product1 = () => {
  return (
    <div className="product_con megaclus">
      <div className="txt_con" data-aos="fade-right">
        <h3>megaclus</h3>
        <div className="txt">
          <p>
            MEGACLUS, social media platform for everything commerce. Ever
            wondered what social media plus commerce would look like? Signup and
            find out.
          </p>

          <p>
            Link your Olivia stores website, shopify websites, etc Convert
            chats into sales  Etc
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

      <div className="img" data-aos="fade-left">
        <img src={megaclus_img} alt="megaclus" />
      </div>
    </div>
  );
};
