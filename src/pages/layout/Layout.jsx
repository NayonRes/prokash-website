import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Header from "../../compoments/Header";
import Navigation from "../Navigation";
import Footer from "../../compoments/Footer";

const Layout = () => {
  const navigate = useNavigate();
  const { prokash_user, logout, login } = useContext(AuthContext);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const handleClickSignUpOpen = () => {
    if (prokash_user.token) {
      return navigate("/create-campaign");
    }
    setSignUpOpen(true);
  };

  const handleSignUpClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setSignUpOpen(false);
    }
  };
  return (
    <div>
      {" "}
      <Header
        signUpOpen={signUpOpen}
        setSignUpOpen={setSignUpOpen}
        handleClickSignUpOpen={handleClickSignUpOpen}
        handleSignUpClose={handleSignUpClose}
      />
      <div>
        <Navigation
          signUpOpen={signUpOpen}
          setSignUpOpen={setSignUpOpen}
          handleClickSignUpOpen={handleClickSignUpOpen}
          handleSignUpClose={handleSignUpClose}
        />
      </div>
      <div>
        <Footer />{" "}
      </div>
    </div>
  );
};

export default Layout;
