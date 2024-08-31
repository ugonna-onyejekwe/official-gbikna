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
          <div className="box">
            <h3>products</h3>

            <div className="con">
              <Link to="/" target="_blank">
                olivia
              </Link>
              <Link to="/" target="_blank">
                megaclus
              </Link>
            </div>
          </div>

          {/* box2 */}
          <div className="box">
            <h3>quick links</h3>

            <div className="con">
              <Link to="/">home</Link>
              <Link to="/products">products</Link>
              <Link to="/contact">contact us</Link>
            </div>
          </div>

          {/* box3 */}
          <div className="box">
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
                +1754-254-2430, +234-902-147-4294
              </p>
              <p>
                <span>
                  <MdEmail />
                </span>
                info@gbikna.com
              </p>
            </div>
          </div>

          {/* box4 */}
          <div className="box">
            <h3>socials</h3>

            <div className="con2">
              <span>
                <FaInstagram />
              </span>

              <span>
                <FaXTwitter />
              </span>

              <span>
                <FaLinkedin />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="section2">
        <p>&copy; Copyrights. Gbikna. 2024</p>
      </div>
    </footer>
  );
};
