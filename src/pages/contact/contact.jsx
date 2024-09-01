import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { MdLocalPhone, MdOutlineMarkEmailUnread } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import "./contact.scss";
import { useFormik } from "formik";
import { ContactFormValidation } from "../../components/validationSchema";
import { useEffect, useState } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [apiMessage, setApiMessage] = useState({
    message: "",
    type: "",
  });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
    }, 4000);
  }, [isActive]);

  // submit handler
  const onSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api-staging.olivia-stores.com/api/olivia/external-use/contactus/gbikna",
        {
          email: values.email,
          name: values.name,
          phoneNumber: values.phoneNumber,
          message: values.message,
        }
      );

      values.email = "";
      values.phoneNumber = "";
      values.name = "";
      values.message = "";

      setApiMessage({
        message: "Mesaage sent successfully",
        type: "success",
      });
      setIsActive(true);
    } catch (error) {
      if (!error?.response) {
        setApiMessage({
          message: "Server not responding. Check internet",
          type: "error",
        });
        setIsActive(true);
      } else {
        console.log(error);
      }
    }
    setLoading(false);
  };

  // formik
  const { errors, handleChange, touched, handleSubmit, values } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: ContactFormValidation,
    onSubmit,
  });

  return (
    <div className="contact_page">
      {/* header */}
      <div className="header">
        <div className="wrapper">
          <div className="container">
            <h2>contact us</h2>
            <p>
              Reach out to our dedicated team for inquiries, support, or
              partnership opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* main */}

      <div className="main_wrapper">
        <div className="container">
          <div className="txt_con" data-aos="fade-right">
            <div className="info_box">
              <div className="box">
                <span>
                  <SlLocationPin />
                </span>

                <div className="txt">
                  <h4>address</h4>
                  <p>
                    800 N King Street Suite 304 2236 Wilmington, DE 19801 United
                    States
                  </p>
                </div>
              </div>

              {/* box2 */}

              <div className="box">
                <span>
                  <MdLocalPhone />
                </span>

                <div className="txt">
                  <h4>phone Number</h4>
                  <p>+1-754-254-2430, +234-902-147-4294</p>
                </div>
              </div>

              {/* box3 */}

              <div className="box">
                <span>
                  <MdOutlineMarkEmailUnread />
                </span>

                <div className="txt">
                  <h4>email</h4>
                  <p>info@gbikna.com</p>
                </div>
              </div>
            </div>

            <div className="work_hours">
              <h4>working hours</h4>
              <p>monday - friday: 8:00am - 5:30pm WAT</p>
            </div>

            <div className="socials_con">
              <h4>follow us </h4>
              <div className="con">
                <Link to={"/"} target="_blank">
                  <FaXTwitter />
                </Link>

                <Link to={"/"} target="_blank">
                  <IoLogoLinkedin />
                </Link>

                <Link to={"/"} target="_blank">
                  <FaSquareFacebook />
                </Link>
              </div>
            </div>
          </div>

          <div className="form_section" data-aos="fade-left">
            <h4>leave a message</h4>

            <form onSubmit={handleSubmit}>
              <div className="col">
                <div className="input_con">
                  <div className="input">
                    <input
                      type="text"
                      placeholder="Your name"
                      value={values.name}
                      onChange={handleChange("name")}
                    />
                  </div>
                  {errors && touched.name && (
                    <p className="err">{errors.name}</p>
                  )}{" "}
                </div>

                <div className="input_con">
                  <div className="input">
                    <input
                      type="email"
                      placeholder="Your email"
                      value={values.email}
                      onChange={handleChange("email")}
                    />
                  </div>
                  {errors && touched.email && (
                    <p className="err">{errors.email}</p>
                  )}{" "}
                </div>
              </div>

              <div className="input_con">
                <div className="input">
                  <input
                    type="number"
                    value={values.phoneNumber}
                    placeholder="Your phone number"
                    onChange={handleChange("phoneNumber")}
                  />
                </div>
                {errors && touched.phoneNumber && (
                  <p className="err">{errors.phoneNumber}</p>
                )}{" "}
              </div>
              <div className="input_con">
                <div className="input">
                  <textarea
                    placeholder="Your message"
                    value={values.message}
                    onChange={handleChange("message")}
                  ></textarea>
                </div>

                {errors && touched.message && (
                  <p className="err">{errors.message}</p>
                )}
              </div>

              <div className="btn">
                <button>
                  {loading ? (
                    <BeatLoader color="#fff" size={6} />
                  ) : (
                    "Send message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {isActive && (
        <div className={`api_message_con ${apiMessage.type}`}>
          <p className={apiMessage.type}>{apiMessage.message}</p>
        </div>
      )}
    </div>
  );
};
