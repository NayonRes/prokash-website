import React, { useRef, useState, useContext } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Countdown from "react-countdown";
import { useSnackbar } from "notistack";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AuthContext } from "../../context/AuthContext";
import ForgotPasswordResetPassword from "./ForgotPasswordResetPassword";
import OtpInput from "react-otp-input";

import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
// const useStyles = makeStyles((theme) => ({

//   newInputStyle: {
//     background: "none",
//     minWidth: "40px",
//     minHeight: "40px",
//     fontSize: "16px",
//     borderRadius: "3px",
//     border: "1px solid #c3bebe",
//   },
//   newFocusStyle: {
//     borderRadius: "3px",
//     border: "1px solid #353b48",
//     outline: "1px solid #353b48",
//   },
// }));

const ForgotPasswordOTPVarify = ({ email, reference, setReference }) => {
  const navigate = useNavigate();
  const { login, prokash_user } = useContext(AuthContext);
  const newInputStyle = {
    background: "none",
    minWidth: "40px",
    minHeight: "40px",
    fontSize: "16px",
    borderRadius: "3px",
    border: "1px solid #c3bebe",
  };
  const newFocusStyle = {
    borderRadius: "3px",
    border: "1px solid #353b48",
    outline: "1px solid #353b48",
  };
  const [showOTPSection, setShowOTPSection] = useState(true);
  const [loading, setLoading] = useState(false);
  const [otpTimeOut, setOtpTimeOut] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [minutes, setMinutes] = useState(5);
  const [myOTP, setMyOTP] = useState({ otp: "" });
  const handleChange = (otp) => {
    setMyOTP({ otp });
  };

  const buttonref = useRef(null);

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
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = {
        // email: email,
        otp: myOTP.otp.toString(),
        reference: reference,
      };

      let response = await axios({
        url: "/api/auth/verify",
        method: "post",
        data: data,
      });

      if (response?.status > 199 && response?.status < 300) {
        // handleSnakbarOpen("Password reset successfully", "success");
        setReference(response?.data?.data?.reference);
        setShowOTPSection(false);
      }
    } catch (error) {
      console.log("error", error);
      if (error?.response?.status === 500) {
        handleSnakbarOpen(error?.response?.statusText, "error");
      } else {
        handleSnakbarOpen(error.response.data.errors.otp[0], "error");
      }

      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <React.Fragment>
      {showOTPSection ? (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ height: "100vh" }}
        >
          <div
            style={{
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
            />{" "}
            <br />
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
              {" "}
              We have sent a 6 digits varification code to {email}
            </Typography>
            {/* {otpTimeOut && (
            <React.Fragment>
              <Grid
                id="mainGrid"
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
              >
                <Grid item xs={6}>
                  <Button
                    variant="outlined"
                    disableElevation
                    fullWidth
                    style={{
                      background: "none",
                      border: "none",
                      color: "#666666",
                    }} 
                    startIcon={<ArrowBackIcon />}
                    onClick={() => navigate("/")}
                  >
                    BACk TO LOGIN
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    fullWidth
                    color="primary"
                    //   className={classes.buttonStyle}
                    // inputRef={buttonref}
                    ref={buttonref}
                    // onKeyDown={submitKeyDown}
                    type="submit"
                    onClick={resendOTP}
                    disabled={loading}
                  >
                    {loading === false && "Resend OTP"}
                    <PulseLoader
                      color={"#353b48"}
                      loading={loading}
                      size={10}
                      speedMultiplier={0.5}
                    />{" "}
                  </Button>
                </Grid>
              </Grid>
            </React.Fragment>
          )} */}
            {otpTimeOut === false && (
              <React.Fragment>
                <Grid
                  id="mainGrid"
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item xs={12}>
                    {/* <OtpInput
                      value={myOTP.otp}
                      onChange={handleChange}
                      numInputs={6}
                      isInputNum={true}
                      shouldAutoFocus={true}
                      isInputSecure={true}
                      inputStyle={newInputStyle}
                      focusStyle={newFocusStyle}
                      containerStyle={{ justifyContent: "space-between" }}
                    /> */}
                    <OtpInput
                      value={myOTP.otp}
                      onChange={handleChange}
                      numInputs={6}
                      isInputNum={true}
                      shouldAutoFocus={true}
                      isInputSecure={true}
                      // renderSeparator={<span>-</span>}
                      inputStyle={newInputStyle}
                      renderInput={(props) => (
                        <input {...props} className="demo_form_input_style" />
                      )}
                      containerStyle={{ justifyContent: "space-between" }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      disableElevation
                      variant="contained"
                      fullWidth
                      color="primary"
                      style={{ minHeight: "48px" }}
                      //   className={classes.buttonStyle}
                      // inputRef={buttonref}
                      ref={buttonref}
                      // onKeyDown={submitKeyDown}
                      type="submit"
                      className="contained_buttton"
                      onClick={onSubmit}
                      disabled={loading}
                    >
                      {loading === false && "Continue"}
                      <PulseLoader
                        color={"#834BFF"}
                        loading={loading}
                        size={10}
                        speedMultiplier={0.5}
                      />{" "}
                    </Button>
                    <br />
                    <br />
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
                  </Grid>
                </Grid>
              </React.Fragment>
            )}
          </div>
        </Grid>
      ) : (
        <ForgotPasswordResetPassword
          email={email}
          otp={myOTP.otp}
          reference={reference}
        />
      )}
    </React.Fragment>
  );
};

export default ForgotPasswordOTPVarify;
