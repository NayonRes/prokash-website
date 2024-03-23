import React, { useState, useContext, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { useSnackbar } from "notistack";
import { AuthContext } from "../../context/AuthContext";
import PulseLoader from "react-spinners/PulseLoader";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import Avatar from "@mui/material/Avatar";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const { prokash_user, login, logout } = useContext(AuthContext);
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paymentID = queryParams.get("paymentID");
  const status = queryParams.get("status");

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
    // e.preventDefault();
    setErrors({});
    let err = false;
    setPaymentStatus(false);
    if (err) {
      return;
    } else {
      setLoading(true);
      try {
        let data = {
          //   old_password: oldPassword,
          //   password: newPassword,
          //   password_confirm: confirmPassword,
          gateway_payment_id: paymentID,
        };
        let response = await axios({
          url: "/api/customer/payment/execute",
          method: "post",
          data: data,
          headers: {
            Authorization: `Bearer ${prokash_user.token}`,
          },
        });

        if (response?.status > 199 && response?.status < 300) {
          setPaymentStatus(true);
          setLoading(false);
          //   handleSnakbarOpen("Password reset successfully", "success");
          //   login({});
          //   navigate("/");
        }
      } catch (error) {
        console.log("error", error);
        setLoading(false);
        if (error?.response?.status === 401) {
          logout();
          handleSnakbarOpen("Your session is out", "error");
          return;
        }
        if (error?.response?.status === 500) {
          // handleSnakbarOpen(error?.response?.statusText, "error");
          setErrors(error.response.data.message);
        } else {
          setErrors(error.response.data.message);
        }
      }
      setLoading(false);
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    // console.log("status", status);
    if (status === "success") {
      onSubmit();
    }
  }, [paymentID]);
  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "80vh" }}
      >
        <Box
          sx={{
            padding: "50px",
            background: "#fff",
            borderRadius: "10px",
            textAlign: "center",
            width: "400px",
            border: { xs: "0px solid #f4f4f4", sm: "1px solid #f4f4f4" },
            // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
        >
          {/* <img
            src="/logo.svg"
            alt=""
            // style={{ display: "block", margin: "auto", maxWidth: "155px" }}
            className="form_logo_style"
          /> */}

          {loading ? (
            <Typography
              variant="base"
              color="text.light"
              sx={{
                mb: 1,
                display: "block",
                marginBottom: "30px",
                fontSize: "24px",
              }}
            >
              verifying{" "}
              <PulseLoader
                color={"#353b48"}
                loading={true}
                size={10}
                speedMultiplier={0.5}
              />
            </Typography>
          ) : (
            <>
              {paymentStatus ? (
                <>
                  <Box sx={{ textAlign: "center" }}>
                    <Avatar
                      sx={{
                        bgcolor: theme.palette.success.main,
                        width: 60,
                        height: 60,
                        margin: "auto",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22.9848 3.5564C16.8626 6.96214 14.5419 7.60419 9.40152 15.8545C9.22137 16.1437 8.80995 16.1781 8.58142 15.9255C7.22002 14.4204 5.48773 13.1345 1.06402 12.8685C5.6099 14.6315 6.88561 17.201 8.59396 19.7915C8.79569 20.0974 9.2474 20.0752 9.42887 19.7569C14.4188 11.0036 14.718 9.07434 22.9848 3.5564Z"
                          fill="#fff"
                        />
                      </svg>
                    </Avatar>
                  </Box>
                  <br />
                  <Typography
                    variant="h5"
                    component="div"
                    color="success.main"
                    sx={{
                      marginBottom: "10px",
                      fontSize: { xs: "1.2rem", sm: "1.5rem" },
                    }}
                  >
                    Payment Successfully Done!!!
                  </Typography>
                  <Typography
                    variant="base"
                    color="text.light"
                    sx={{ mb: 1, display: "block", marginBottom: "30px" }}
                  >
                    We have sent you a confirmation email.
                  </Typography>

                  <Box sx={{ marginBottom: "30px" }}>
                    <Typography
                      variant="base"
                      color="text.main"
                      sx={{ mb: 1, display: "block", fontWeight: 500 }}
                    >
                      {" "}
                      Payment Method: Bkash
                    </Typography>
                    {/* <Typography
                      variant="base"
                      color="text.main"
                      sx={{ mb: 1, display: "block", fontWeight: 500 }}
                    >
                      {" "}
                      Payment ID: {paymentID}
                    </Typography> */}
                  </Box>
                  <Button
                    variant="contained"
                    color="info"
                    component={Link}
                    to="/campaign-list"
                    disableElevation
                    style={{ marginBottom: "30px", minHeight: "48px" }}
                    // onClick={onSubmit}
                    className="contained_buttton"
                    // type="submit"
                  >
                    <ListAltOutlinedIcon />
                    &nbsp; Campaign List
                  </Button>
                </>
              ) : (
                <>
                  <Box sx={{ textAlign: "center" }}>
                    <Avatar
                      sx={{
                        bgcolor: theme.palette.error.main,
                        width: 60,
                        height: 60,
                        margin: "auto",
                      }}
                    >
                      <CloseIcon style={{ color: "#fff" }} />
                    </Avatar>
                  </Box>
                  <br />
                  <Typography
                    variant="h5"
                    component="div"
                    color="error.main"
                    sx={{
                      marginBottom: "30px",
                      fontSize: { xs: "1.2rem", sm: "1.5rem" },
                    }}
                  >
                    Payment Failed
                  </Typography>
                  <Typography
                    variant="base"
                    color="text.light"
                    sx={{ mb: 1, display: "block", marginBottom: "30px" }}
                  >
                    {errors}
                  </Typography>
                </>
              )}

              <Button
                variant="text"
                color="info"
                component={Link}
                to="/"
                disableElevation
                fullWidth
                style={{ marginBottom: "30px", minHeight: "48px" }}
                // onClick={onSubmit}
                className="contained_buttton"
                // type="submit"
              >
                <ArrowBackIcon />
                &nbsp; Back to Home Page
              </Button>
            </>
          )}
        </Box>
      </Grid>
    </div>
  );
};

export default PaymentSuccess;
