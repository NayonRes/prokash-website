import React, { useEffect } from "react";
import { Button, Container, Grid, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <div style={{ position: "relative" }}>
        <div id="mouse-animation" className="mouse_holder">
          <div className="scroll-downs">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
          </div>
        </div>

        <Container maxWidth="lg" className="container">
          <div className="section_style3">
            <h3 className="title_semibold_medium left mb24">
              <IconButton component={Link} to="/">
                <img src="/images/back.svg" alt="back icon" />
              </IconButton>
              Terms & Conditions
            </h3>
            {/* <p className="text_body_medium left mt10 mb40" data-aos="fade-up">
              The product requirements should come first. Tell us what your
              company needs and what features are missing.
            </p> */}
            <ul className="text_body_medium bullet_color padding_left_for_MobileView">
              <li className="fw700 mb24" data-aos="fade-up">
                Access and Use of the System:
                <ol style={{ listStyleType: "lower-alpha" }}>
                  <li className="text_body_medium">
                    Must knowledges that the System is a digital payment
                    platform designed for lawful purposes only. Any unauthorized
                    use or misuse of the System is strictly prohibited.
                  </li>
                  <li className="text_body_medium ">
                    Must be of legal age and possess the legal capacity to enter
                    into this Agreement and use the System.{" "}
                  </li>
                </ol>
              </li>
              <li className="fw700 mb24" data-aos="fade-up">
                Account Registration:
                <ol style={{ listStyleType: "lower-alpha" }}>
                  <li className="text_body_medium">
                    Shall create an account on the System by providing accurate
                    and up-to-date information.
                  </li>
                  <li className="text_body_medium ">
                    Should solely be responsible for maintaining the
                    confidentiality of their account credentials and for all
                    activities occurring under their account.
                  </li>
                </ol>
              </li>
              <li className="fw700 mb24" data-aos="fade-up">
                Compliance with Laws:
                <ol style={{ listStyleType: "lower-alpha" }}>
                  <li className="text_body_medium">
                    Agrees to use the System in compliance with all applicable
                    laws, regulations, and industry standards.
                  </li>
                  <li className="text_body_medium ">
                    Shall not use the System for any illegal, fraudulent, or
                    unauthorized activities.
                  </li>
                </ol>
              </li>
              <li className="fw700 mb24" data-aos="fade-up">
                Access and Use of the System:
                <ol style={{ listStyleType: "lower-alpha" }}>
                  <li className="text_body_medium">
                    Must knowledges that the System is a digital payment
                    platform designed for lawful purposes only. Any unauthorized
                    use or misuse of the System is strictly prohibited.
                  </li>
                  <li className="text_body_medium ">
                    Must be of legal age and possess the legal capacity to enter
                    into this Agreement and use the System.
                  </li>
                </ol>
              </li>
              <li className="fw700 mb24" data-aos="fade-up">
                Account Registration:
                <ol style={{ listStyleType: "lower-alpha" }}>
                  <li className="text_body_medium">
                    Shall create an account on the System by providing accurate
                    and up-to-date information.
                  </li>
                  <li className="text_body_medium ">
                    Should solely be responsible for maintaining the
                    confidentiality of their account credentials and for all
                    activities occurring under their account.
                  </li>
                </ol>
              </li>
              <li className="fw700 mb24" data-aos="fade-up">
                Compliance with Laws:
                <ol style={{ listStyleType: "lower-alpha" }}>
                  <li className="text_body_medium">
                    Agrees to use the System in compliance with all applicable
                    laws, regulations, and industry standards.
                  </li>
                  <li className="text_body_medium ">
                    Shall not use the System for any illegal, fraudulent, or
                    unauthorized activities.
                  </li>
                </ol>
              </li>
              <li className="fw700 mb24" data-aos="fade-up">
                Payments and Fees:
                <ol style={{ listStyleType: "lower-alpha" }}>
                  <li className="text_body_medium">
                    Shall be responsible for all payments made through the
                    System, including transaction fees and any applicable
                    charges.
                  </li>
                  <li className="text_body_medium ">
                    Provider reserves the right to modify the fees and charges
                    with prior notice.
                  </li>
                </ol>
              </li>
              <li className="fw700 mb24" data-aos="fade-up">
                Intellectual Property:
                <ol style={{ listStyleType: "lower-alpha" }}>
                  <li className="text_body_medium">
                    The System, including all software, technology, trademarks,
                    and other intellectual property rights, is the exclusive
                    property of the Service Provider.{" "}
                  </li>
                  <li className="text_body_medium ">
                    Shall not use, reproduce, modify, or distribute any content
                    from the System without the Service Provider's written
                    consent.
                  </li>
                </ol>
              </li>
              <li className="fw700 mb24" data-aos="fade-up">
                Data Privacy and Security:
                <ol style={{ listStyleType: "lower-alpha" }}>
                  <li className="text_body_medium">
                    The Service Provider shall take reasonable measures to
                    protect the Client's data and maintain its confidentiality.
                  </li>
                  <li className="text_body_medium ">
                    The Client agrees to the collection, processing, and use of
                    their data as described in the Privacy Policy.
                  </li>
                </ol>
              </li>
              <li className="fw700 mb24" data-aos="fade-up">
                Termination:
                <ol style={{ listStyleType: "lower-alpha" }}>
                  <li className="text_body_medium">
                    The Service Provider may terminate or suspend the Client's
                    access to the System at any time for any reason without
                    prior notice.{" "}
                  </li>
                  <li className="text_body_medium ">
                    The Client may terminate their account by providing written
                    notice to the Service Provider.{" "}
                  </li>
                </ol>
              </li>
              <li className="fw700 mb24" data-aos="fade-up">
                Limitation of Liability:
                <ol style={{ listStyleType: "lower-alpha" }}>
                  <li className="text_body_medium">
                    The Service Provider shall not be liable for any direct,
                    indirect, incidental, special, or consequential damages
                    arising from the use or inability to use the System.
                  </li>
                  <li className="text_body_medium ">
                    The Client agrees that the total liability of the Service
                    Provider shall not exceed the fees paid by the Client for
                    using the System.
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TermsAndConditions;
