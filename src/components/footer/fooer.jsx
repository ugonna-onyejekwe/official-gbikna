import "./footer.scss";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer>
      <div className="section1">
        <div className="container">
          {/* box1 */}
          <div className="box contact">
            <h3>contact</h3>

            <div className="con">
              <p>
                <span>
                  <FaLocationDot />
                </span>
                800 N King Street Suite 304 2236 Wilmington, DE 19801 United
                States
              </p>
              <p>
                <span>
                  <FaPhoneAlt />
                </span>
                +1-754-254-2430, +234-902-147-4294
              </p>
              <p>
                <span>
                  <MdEmail />
                </span>
                info@gbikna.com
              </p>
            </div>
          </div>
          {/* box2 */}
          <div className="box">
            <h3>products</h3>

            <div className="con">
              <Link to="/" target="_blank">
                olivia
              </Link>
              <Link to="/" target="_blank">
                megaclus
              </Link>

              <Link to="/" target="_blank">
                POS development
              </Link>

              <Link to="/" target="_blank">
                Core banking Application
              </Link>
            </div>
          </div>

          {/* box3 */}
          <div className="box">
            <h3>quick links</h3>

            <div className="con">
              <Link to="/">home</Link>
              <Link to="/products">products</Link>
              <Link to="/contact">contact us</Link>
            </div>
          </div>

          {/* box4 */}
          <div className="box">
            <h3>socials</h3>

            <div className="con2">
              <Link to={"/"} target="_blank">
                <FaInstagram />
              </Link>

              <Link to={"/"} target="_blank">
                <FaXTwitter />
              </Link>

              <Link to={"/"} target="_blank">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section2">
        <p>&copy; Copyrights. Gbikna. 2020</p>
      </div>
    </footer>
  );
};
