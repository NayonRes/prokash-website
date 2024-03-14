import React from "react";
import Chip from "@mui/material/Chip";
import { Box, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";

const Budget = ({
  amount,
  setAmount,
  promotion_period,
  setPromotion_period,
}) => {
  const theme = useTheme();

  const handleChange = (event) => {
    setPromotion_period(event.target.value);
  };
  function valuetext(value) {
    // setAmount(1);
    setAmount(value);
    return `${value}°C`;
  }

  const serviceTimeGenerate = () => {
    switch (amount) {
      case 1000:
        return 5;
      case 1500:
        return 7;
      case 2000:
        return 10;
      case 2500:
        return 12;
      case 3000:
        return 15;
      case 3500:
        return 17;
      case 4000:
        return 20;
      case 4500:
        return 22;
      case 5000:
        return 25;
      case 5500:
        return 27;
      case 6000:
        return 30;
      case 6500:
        return 32;
      case 7000:
        return 35;
      case 7500:
        return 37;
      case 8000:
        return 40;
      case 8500:
        return 42;
      case 9000:
        return 45;
      case 9500:
        return 47;
      case 10000:
        return 50;

      default:
        break;
    }
  };
  return (
    <div>
      {" "}
      <Typography
        variant="medium"
        color="text.main"
        sx={{
          mt: 1,
          mb: 4,
          textAlign: "center",
          fontSize: "20px",
          fontWeight: 500,
        }}
      >
        Select Your Budget
      </Typography>
      <Box sx={{ px: 4 }}>
        <Slider
          sx={{
            "& .MuiSlider-valueLabel": {
              background: theme.palette.primary.main,
              color: "#fff",
            },
          }}
          aria-label="Temperature"
          defaultValue={1000}
          getAriaValueText={valuetext}
          valueLabelDisplay="on"
          shiftStep={30}
          step={500}
          marks
          min={1}
          max={10000}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography
            variant="body2"
            // onClick={() => valuetext(`${1000}°C`)}
            // sx={{ cursor: "pointer" }}
          >
            TK. 1000
          </Typography>
          <Typography
            variant="body2"
            // onClick={() => valuetext(`${10000}°C`)}
            // sx={{ cursor: "pointer" }}
          >
            TK. 10000
          </Typography>
        </Box>
      </Box>
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Chip
          sx={{
            borderRadius: "8px",
            px: 2,
            py: 3,
            fontSize: "20px",
            fontWeight: 500,
            color: theme.palette.text.light,
            border: `1px solid ${theme.palette.text.light}`,
          }}
          label={`Tk. ${amount}`}
          variant="outlined"
        />
      </Box>
      <Typography
        variant="medium"
        color="text.main"
        sx={{
          mt: 1,
          mb: 3,
          textAlign: "center",
          fontSize: "20px",
          fontWeight: 500,
        }}
      >
        Select Your Boosting Period
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <FormControl fullWidth sx={{ width: 120 }}>
          {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
          <Select
            MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
            sx={
              {
                // "& .MuiPopover-paper-MuiMenu-paper": {
                //   maxHeight: "180px !important",
                // },
                //   "& .MuiOutlinedInput-input": {
                //     // color: "#718096",
                //     padding: "7px 14px",
                //   },
              }
            }
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={promotion_period}
            //   label="Age"
            onChange={handleChange}
          >
            {[...Array(serviceTimeGenerate()).keys()].map((item, i) => (
              <MenuItem value={i + 1}>
                {i + 1} {i < 1 ? "Day" : "Days"}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default Budget;
