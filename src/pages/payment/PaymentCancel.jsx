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
import Avatar from "@mui/material/Avatar";
import CloseIcon from "@mui/icons-material/Close";

const PaymentCancel = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const { prokash_user, login, logout } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
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
          url: "/api/payment/execute",
          method: "post",
          data: data,
          headers: {
            Authorization: `Bearer ${prokash_user.token}`,
          },
        });

        if (response?.status > 199 && response?.status < 300) {
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
  useEffect(() => {
    onSubmit();
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
          }}
        >
       
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
            Please try again. <br />
            Or contact to our support team.
          </Typography>

          <Button
            variant="text"
            color="info"
            component={Link}
            to="/"
            disableElevation
            fullWidth
            style={{ marginBottom: "30px", minHeight: "48px" }}
            className="contained_buttton"
          >
            <ArrowBackIcon />
            &nbsp; Back to Home Page
          </Button>
        </Box>
      </Grid>
    </div>
  );
};

export default PaymentCancel;
