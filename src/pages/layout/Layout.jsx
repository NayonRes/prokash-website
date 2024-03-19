import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Header from "../../compoments/Header";
import Navigation from "../Navigation";
import Footer from "../../compoments/Footer";
import Checkbox from "@mui/material/Checkbox";

const Layout = () => {
  const navigate = useNavigate();
  const { prokash_user, logout, login } = useContext(AuthContext);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      // navigate("/");
      setOpen(false);
    }
  };

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
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        signUpOpen={signUpOpen}
        setSignUpOpen={setSignUpOpen}
        handleClickSignUpOpen={handleClickSignUpOpen}
        handleSignUpClose={handleSignUpClose}
      />
      <div>
        <Navigation
          open={open}
          setOpen={setOpen}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
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
