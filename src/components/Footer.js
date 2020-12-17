import React from "react";
import { Row, Col } from "react-bootstrap";
import Logo from "./widgets/Logo";
const Footer = () => {
  return (
    <div class="footer-div">
      <Row md={12} style={{ justifyContent: "center", paddingTop: "0.5rem" }}>
        <Logo />
      </Row>
      <p style={{ textAlign: "center", color: "white" }}>
        &#169; All rights reserved
      </p>
      <Row>
        <Col>
          <hr style={{ marginLeft: "30%", marginRight: "15%" }}></hr>
        </Col>
        <Col>
          <hr style={{ marginRight: "30%", marginLeft: "15%" }}></hr>
        </Col>
      </Row>
      <div>
        <Row className="mt-3 pb-2" style={{ justifyContent: "center" }}>
          <Col md={2}>
            <Row>
              <p style={footerHeadStyle}>Useful Links</p>
            </Row>
            <Row>
              <p style={footerLinkStyle}>About InstaDriver</p>
            </Row>
            <Row>
              <p style={footerLinkStyle}>
                Verified Search (For Employers & Drivers)
              </p>
            </Row>

            <Row>
              <p style={footerLinkStyle}>Top Ad Feature (For Drivers)</p>
            </Row>
          </Col>
          <Col md={2}>
            <Row>
              <p style={footerHeadStyle}>Useful links</p>
            </Row>
            <Row>
              <p style={footerLinkStyle}>Driver Sign In</p>
            </Row>
            <Row>
              <p style={footerLinkStyle}>Driver Sign Up</p>
            </Row>
          </Col>
          <Col md={2}>
            <Row>
              <p style={footerHeadStyle}>Useful links</p>
            </Row>
            <Row>
              <p style={footerLinkStyle}>FAQ</p>
            </Row>
            <Row>
              <p style={footerLinkStyle}>Contact Us</p>
            </Row>
            <Row>
              <p style={footerLinkStyle}>Terms & Conditions</p>
            </Row>
          </Col>

          <Col md={2}>
            <Row>
              <p style={footerHeadStyle}>Social media</p>
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <Col md={3}>
                <div style={logoDiv}>
                  <i
                    style={{ color: "#375599" }}
                    class="fab fa-facebook-f fa-2x"
                  ></i>
                </div>
              </Col>
              <Col md={3}>
                <div style={logoDiv}>
                  <i
                    style={{ color: "#1d9cec" }}
                    class="fab fa-twitter  fa-2x"
                  ></i>
                </div>
              </Col>
              <Col md={3}>
                <div style={logoDiv}>
                  <i
                    style={{ color: "#f60100" }}
                    class="fab fa-youtube fa-2x"
                  ></i>
                </div>
              </Col>
              <Col md={3}>
                <div style={logoDiv}>
                  <i
                    style={{ color: "#761fb2" }}
                    class="fab fa-instagram fa-2x"
                  ></i>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={2}>
            <Row>
              <p style={footerHeadStyle}>Contact info</p>
            </Row>
            <Row>
              <p style={footerLinkStyle}>saysomething@instadriver.co</p>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

const footerLinkStyle = {
  color: "gray",
  marginBottom: "3px",
  marginRight: "auto",
  marginLeft: "auto",
  cursor: "pointer",
};
const footerHeadStyle = {
  fontWeight: "bold",
  color: "white",
  marginBottom: "5px",
  marginLeft: "auto",
  marginRight: "auto",
};
const logoDiv = {
  borderRadius: "3px",
  width: "2.5rem",
  backgroundColor: "white",
  textAlign: "center",
  padding: "1px",
  cursor:"pointer"
};

export default Footer;
