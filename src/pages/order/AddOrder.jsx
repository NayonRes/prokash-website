import React, { useState, useEffect, useContext } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSnackbar } from "notistack";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";
import { AuthContext } from "../../context/AuthContext";
import { getDataWithToken } from "../../services/GetDataService";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import MySlider from "./MySlider";

const AddOrder = () => {
  const theme = useTheme();
  const { prokash_user, logout } = useContext(AuthContext);
  //============================

  // ================================
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <React.Fragment>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "80vh", mb: 5 }}
      >
        <Box
          sx={{
            padding: { xs: "30px", sm: "50px" },
            background: "#fbfbfb",
            borderRadius: "10px",
            // textAlign: "center",
            width: { xs: "300px", sm: "400px" },
            border: { xs: "0px solid #f4f4f4", sm: "1px solid #f4f4f4" },
            // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
          // onSubmit={handleSubmit}
        >
          {/* <Typography
            variant="h5"
            component="div"
            style={{ marginBottom: "10px", textAlign: "center" }}
          >
            Create Campaign
          </Typography> */}
          <MySlider />

          {/* <Button
            variant="contained"
            disableElevation
            fullWidth
            style={{
              marginBottom: "30px",
              minHeight: "37px",
              marginTop: "18px",
            }}
            disabled={loading}
            // onClick={onSubmit}
            type="submit"
          >
            {loading === false && "Create & Add Another"}
            <PulseLoader
              color={"#353b48"}
              loading={loading}
              size={10}
              speedMultiplier={0.5}
            />{" "}
          </Button> */}
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default AddOrder;
