import React, { useState, useContext } from "react";
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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

const PaymentMethod = () => {
  const navigate = useNavigate();
  const { prokash_user, login, logout } = useContext(AuthContext);
  const [oldPasswordShow, setOldPasswordShow] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPasswordShow, setNewPasswordShow] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const invoiceId = queryParams.get("invoice");
  const amount = queryParams.get("amount");

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

    if (!oldPassword.trim()) {
      handleSnakbarOpen("Please enter old password", "error");
      document.getElementById("oldPassword").focus();
      return (isError = true);
    }
    if (!newPassword.trim()) {
      handleSnakbarOpen("Please enter new password", "error");
      document.getElementById("newPassword").focus();
      return (isError = true);
    }
    if (newPassword.trim().length < 6) {
      handleSnakbarOpen(
        "The password field must be at least 6 characters.",
        "error"
      );
      document.getElementById("newPassword").focus();
      return (isError = true);
    }
    if (!confirmPassword.trim()) {
      handleSnakbarOpen("Please enter confirm password", "error");
      document.getElementById("confirmPassword").focus();
      return (isError = true);
    }
    if (newPassword.trim() !== confirmPassword.trim()) {
      handleSnakbarOpen(
        "Your new password and confirm password is not same",
        "error"
      );
      document.getElementById("confirmPassword").focus();
      return (isError = true);
    }

    return isError;
  };

  const onSubmit = async (e) => {
    console.log("onSubmit");
    e.preventDefault();
    setErrors({});
    let err = false;

    if (err) {
      return;
    } else {
      setLoading(true);
      try {
        let data = {
          order_id: invoiceId,
          payment_method: "bkash",
        };

        let response = await axios({
          url: "/api/payment",
          method: "post",
          data: data,
          headers: {
            Authorization: `Bearer ${prokash_user.token}`,
          },
        });

        if (response?.status > 199 && response?.status < 300) {
          // handleSnakbarOpen("Successfull", "success");
          window.location.href = response.data.data.payment_url;
          // payment_url
        }
      } catch (error) {
        console.log("error", error);
        setLoading(false);
        if (error?.response?.status === 401) {
          handleSnakbarOpen("Your session is out", "error");
          logout();
          return;
        }
        if (error?.response?.status === 500) {
          handleSnakbarOpen(error?.response?.statusText, "error");
        } else {
          setErrors(error.response.data.errors);
        }
      }
      setLoading(false);
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
          <img
            src="/logo.svg"
            alt=""
            // style={{ display: "block", margin: "auto", maxWidth: "155px" }}
            className="form_logo_style"
          />
          <br />
          <Typography
            variant="h5"
            component="div"
            sx={{
              marginBottom: "30px",
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
            }}
          >
            Payment Method
          </Typography>
          <Box sx={{ marginBottom: "30px" }}>
            <img src="/Bkash.svg" width="65%" />
          </Box>

          <Button
            variant="contained"
            disableElevation
            fullWidth
            style={{ marginBottom: "30px", minHeight: "48px" }}
            disabled={loading}
            onClick={onSubmit}
            className="contained_buttton"
            type="submit"
          >
            {loading === false && "Tk. " + amount + " Pay Now"}
            <PulseLoader
              color={"#353b48"}
              loading={loading}
              size={10}
              speedMultiplier={0.5}
            />{" "}
          </Button>
        </Box>
      </Grid>
    </div>
  );
};

export default PaymentMethod;
