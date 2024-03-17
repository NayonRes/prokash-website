import { Container } from "@mui/material";
import React, { useEffect } from "react";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <Container maxWidth="lg" className="container">
        <h2 className="title_semibold_medium  center  mb40 mt40">
          Prokash Digital Marketing Platform - Terms of Service
        </h2>

        {/* <h3 className="title_semibold_medium center">WHAT WE OFFER</h3> */}
        <h3
          className="text_body_medium mb12"
          //   data-aos="fade-up"
          //   data-aos-delay="400"
          style={{ color: "#834BFF", fontWeight: 500 }}
        >
          1. Introduction
        </h3>
        <p
          className="text_body_xs_regular mb24"
          //   data-aos="fade-up"
          //   data-aos-delay="500"
          style={{ fontWeight: 400 }}
        >
          Welcome to Prokash, a digital marketing platform enabling users to
          enhance the visibility of their Facebook, Google, and YouTube
          content/products. Before availing of our services, please carefully
          review and understand the subsequent terms and conditions. By
          utilizing Prokash, you explicitly agree to adhere to these terms.
        </p>
        <h3
          className="text_body_medium mb12"
          //   data-aos="fade-up"
          //   data-aos-delay="400"
          style={{ color: "#834BFF", fontWeight: 500 }}
        >
          2. Payment Structure
        </h3>
        <p
          className="text_body_xs_regular mb24"
          //   data-aos="fade-up"
          //   data-aos-delay="500"
          style={{ fontWeight: 400 }}
        >
          Users are required to remit the total amount in Bangladeshi Taka
          (BDT), covering all service charges. The remaining balance will be
          designated for the actual marketing expenditures.
        </p>
        <h3
          className="text_body_medium mb12"
          //   data-aos="fade-up"
          //   data-aos-delay="400"
          style={{ color: "#834BFF", fontWeight: 500 }}
        >
          3. Refund Policy
        </h3>
        <p
          className="text_body_xs_regular mb24"
          //   data-aos="fade-up"
          //   data-aos-delay="500"
          style={{ fontWeight: 400 }}
        >
          Once a user initiates a boost, we do not refund the money if they
          change their mind. However, users have the flexibility to allocate the
          remaining balance for other boosts within the platform.
        </p>
        <h3
          className="text_body_medium mb12"
          //   data-aos="fade-up"
          //   data-aos-delay="400"
          style={{ color: "#834BFF", fontWeight: 500 }}
        >
          4. Issue Resolution
        </h3>
        <p
          className="text_body_xs_regular mb24"
          //   data-aos="fade-up"
          //   data-aos-delay="500"
          style={{ fontWeight: 400 }}
        >
          In the event of any issues arising from our side that impact the
          effectiveness of the boost, Prokash will initiate a refund after
          deducting any applicable bKash fees.
        </p>
        <h3
          className="text_body_medium mb12"
          //   data-aos="fade-up"
          //   data-aos-delay="400"
          style={{ color: "#834BFF", fontWeight: 500 }}
        >
          5. User Responsibilities
        </h3>
        <p
          className="text_body_xs_regular mb24"
          //   data-aos="fade-up"
          //   data-aos-delay="500"
          style={{ fontWeight: 400 }}
        >
          Users are responsible for providing accurate and up-to-date
          information for their boosted content/products. Prokash is not
          responsible for the content itself but only the marketing services
          provided.
        </p>
        <h3
          className="text_body_medium mb12"
          //   data-aos="fade-up"
          //   data-aos-delay="400"
          style={{ color: "#834BFF", fontWeight: 500 }}
        >
          6. Compliance with Policies
        </h3>
        <p
          className="text_body_xs_regular mb24"
          //   data-aos="fade-up"
          //   data-aos-delay="500"
          style={{ fontWeight: 400 }}
        >
          Users must comply with the policies and guidelines of the respective
          platforms (Facebook, Google, YouTube) while utilizing Prokash
          services.
        </p>
        <h3
          className="text_body_medium mb12"
          //   data-aos="fade-up"
          //   data-aos-delay="400"
          style={{ color: "#834BFF", fontWeight: 500 }}
        >
          7. Modification of Terms
        </h3>
        <p
          className="text_body_xs_regular mb24"
          //   data-aos="fade-up"
          //   data-aos-delay="500"
          style={{ fontWeight: 400 }}
        >
          Prokash reserves the right to modify these terms at any time. Users
          will be notified of any changes, and continued use of our services
          implies acceptance of the updated terms.
        </p>
        <h3
          className="text_body_medium mb12"
          //   data-aos="fade-up"
          //   data-aos-delay="400"
          style={{ color: "#834BFF", fontWeight: 500 }}
        >
          8. Termination of Services
        </h3>
        <p
          className="text_body_xs_regular mb24"
          //   data-aos="fade-up"
          //   data-aos-delay="500"
          style={{ fontWeight: 400 }}
        >
          Prokash reserves the right to terminate services for any user found in
          violation of these terms or engaging in any fraudulent activities.
        </p>
        <p
          className="text_body_xs_regular mb40"
          //   data-aos="fade-up"
          //   data-aos-delay="500"
          style={{ fontWeight: 400 }}
        >
          By using Prokash's digital marketing platform, you acknowledge that
          you have read, understood, and agreed to these terms and conditions.
          If you have any questions, please contact our customer support.
        </p>
      </Container>
    </div>
  );
};

export default TermsOfService;
