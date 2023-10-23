import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import TrackVisibility from "react-on-screen";
import MuiNavbar from "./MuiNavbar";
import Footer from "./Footer";
import styles from "./Contact.module.css";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const [about, setabout] = useState(true);

  const handleAboutClick = () => {
    setabout(false);
  };
  return (
    <>
      <MuiNavbar />
      <div style={{ marginTop: "200px", marginBottom: "50px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "40px",
            fontFamily: "Josefin Sans",
          }}
        >
          About Us
        </h2>
        <p
          style={{
            marginRight: "400px",
            marginLeft: "400px",
            fontSize: "20px",
            fontFamily: "Fira Mono",
          }}
        >
          Welcome to our website! We are passionate about exploring the world of
          culinary delights and showcasing the diverse cuisines from around the
          globe. Whether you're a food enthusiast or simply looking for
          recommendations on where to dine, we've got you covered.
        </p>
        <p
          style={{
            marginRight: "400px",
            marginLeft: "400px",
            fontSize: "20px",
            fontFamily: "Fira Mono",
          }}
        >
          Our mission is to provide you with information about a variety of
          international cuisines with its cultural significance. We aim to
          inspire you to embark on a gastronomic adventure and broaden your
          culinary horizons.
        </p>
        <p
          style={{
            marginRight: "400px",
            marginLeft: "400px",
            fontSize: "20px",
            fontFamily: "Fira Mono",
          }}
        >
          In addition to exploring global flavors, we also shine a spotlight on
          the vibrant food scene in Hong Kong. As a renowned culinary
          destination, Hong Kong offers a plethora of dining options, from
          street food stalls to Michelin-starred restaurants. We curate a
          selection of must-visit eateries and share insider tips to help you
          navigate the culinary landscape of this dynamic city.
        </p>
        <p
          style={{
            marginRight: "400px",
            marginLeft: "400px",
            fontSize: "20px",
            fontFamily: "Fira Mono",
          }}
        >
          Join us on this culinary journey as we celebrate the art of food,
          discover hidden gems, and savor the flavors that bring people together
          from all corners of the world.
        </p>
      </div>
      <div>
        {about && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={handleAboutClick} className={styles["btn-1"]}>
              <span className={styles["enter-span"]}>Contact Us</span>
            </button>
          </div>
        )}
      </div>
      {!about && (
        <Container>
          <Col size={12} md={6}>
            <section
              className="contact"
              id="connect"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <TrackVisibility>
                <h2
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontFamily: "Josefin Sans",
                  }}
                >
                  Contact Us
                </h2>
                <form>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        value={formDetails.firstName}
                        placeholder="First Name"
                        className="Contact-text"
                        onChange={(e) =>
                          onFormUpdate("firstName", e.target.value)
                        }
                      />
                    </Col>
                    <Col size={12} sm={6} className="fix-333">
                      <input
                        type="text"
                        value={formDetails.lasttName}
                        placeholder="Last Name"
                        onChange={(e) =>
                          onFormUpdate("lastName", e.target.value)
                        }
                      />
                    </Col>
                    <Col size={12} sm={6} className="fix-333">
                      <input
                        type="email"
                        value={formDetails.email}
                        placeholder="Email Address"
                        onChange={(e) => onFormUpdate("email", e.target.value)}
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="tel"
                        value={formDetails.phone}
                        placeholder="Phone No."
                        onChange={(e) => onFormUpdate("phone", e.target.value)}
                      />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea
                        rows="6"
                        value={formDetails.message}
                        placeholder="Message"
                        onChange={(e) =>
                          onFormUpdate("message", e.target.value)
                        }
                      ></textarea>
                      <button
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <span>Send</span>
                      </button>
                    </Col>
                  </Row>
                </form>
              </TrackVisibility>
            </section>
          </Col>
        </Container>
      )}
      <Footer />
    </>
  );
};

export default Contact;
