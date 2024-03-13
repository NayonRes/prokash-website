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
import { Box, Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import PaymentSuccess from "./PaymentSuccess";
import PaymentCancel from "./PaymentCancel";

const Payment = () => {
  const navigate = useNavigate();
  const { prokash_user, login, logout } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paymentID = queryParams.get("paymentID");
  const status = queryParams.get("status");
  return (
    <div>
      <Container maxWidth="lg" className="container">
        {/* <h4>Payment callback</h4> */}
        <PaymentSuccess />
        {/* {status === "success" ? <PaymentSuccess /> : <PaymentCancel />} */}
      </Container>
    </div>
  );
};

export default Payment;
