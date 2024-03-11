import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSnackbar } from "notistack";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";
import ForgotPasswordOTPVarify from "./ForgotPasswordOTPVarify";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { Box } from "@mui/material";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSection, setEmailSection] = useState(true);
  const [reference, setReference] = useState("");
  const [otpSection, setOtpSection] = useState(false);
  const [passwordSection, setPasswordSection] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleSnakbarOpen = (msg, vrnt) => {
    let duration;
    if (vrnt === "error") {
      duration = 3000;
    } else {
      duration = 1000;
    }
    enqueueSnackbar(msg, {
      variant: vrnt,
      autoHideDuration: duration,
    });
  };

  const validation = () => {
    let isError = false;
    if (!email.trim()) {
      handleSnakbarOpen("Please enter email address", "error");
      document.getElementById("email").focus();
      return (isError = true);
    } else if (
      !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      handleSnakbarOpen("Invalid email address", "error");
      document.getElementById("email").focus();

      return (isError = true);
    }

    return isError;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let err = validation();

    if (err) {
      return;
    } else {
      setLoading(true);
      try {
        let data = {
          email,
        };
        let response = await axios({
          url: "/api/auth/forgot",
          method: "post",
          data: data,
        });

        if (response?.status > 199 && response?.status < 300) {
          handleSnakbarOpen("OPT has been in your email address", "success");
          setReference(response?.data?.data?.reference);
          setEmailSection(false);
          setOtpSection(true);
        }
      } catch (error) {
        console.log("error", error);
        if (error?.response?.status === 500) {
          handleSnakbarOpen(error?.response?.statusText, "error");
        } else {
          handleSnakbarOpen(error.response.data.messages.toString(), "error");
        }
        setLoading(false);
      }
      setLoading(false);
    }
  };

  return (
    <div>
      {emailSection && (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ height: "Calc(100vh - 96px)" }}
        >
          <Box
            onSubmit={onSubmit}
            sx={{
              padding: "50px",
              background: "#fff",
              borderRadius: "10px",
              textAlign: "center",
              maxWidth: "400px",
              border: { xs: "0px solid #f4f4f4", sm: "1px solid #f4f4f4" },
              // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
          >
            <img
              src="/logo.svg"
              alt=""
              // style={{ display: "block", margin: "auto", maxWidth: "155px" }}
              className="form_logo_style"
            />
            {/* <br /> */}
            <Typography
              variant="h5"
              component="div"
              sx={{
                marginTop: "10px",
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
              }}
            >
              Verify your identity.
            </Typography>
            <Typography
              sx={{
                marginBottom: "30px",
                fontSize: { xs: ".8rem", sm: "1rem" },
                color: "#616161",
              }}
            >
              Please enter your email address.
            </Typography>
            <TextField
              autoFocus
              id="email"
              placeholder="Email"
              fullWidth
              size="small"
              className="demo_form_input_style"
              style={{ marginBottom: "30px" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineRoundedIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              variant="contained"
              disableElevation
              fullWidth
              style={{ marginBottom: "30px", minHeight: "48px" }}
              disabled={loading}
              className="contained_buttton"
              // onClick={onSubmit}
              type="submit"
            >
              {loading === false && "Continue"}
              <PulseLoader
                color={"#834BFF"}
                loading={loading}
                size={10}
                speedMultiplier={0.5}
              />{" "}
            </Button>
            <Button
              variant="outlined"
              fullWidth
              color="primary"
              style={{ border: "none" }}
              onClick={() => navigate("/")}
              startIcon={<ArrowBackIcon />}
            >
              Back to Login
            </Button>
          </Box>
        </Grid>
      )}

      {otpSection && (
        <ForgotPasswordOTPVarify
          email={email}
          reference={reference}
          setReference={setReference}
        />
      )}
    </div>
  );
};

export default ForgotPassword;
