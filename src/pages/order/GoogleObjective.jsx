import React, { useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { TextField, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Collapse from "@mui/material/Collapse";
import { useTheme } from "@mui/material/styles";
const GoogleObjective = ({
  promotion_objective,
  setPromotion_objective,

  link,
  setLink,
  title,
  setTitle,
  description,
  setDescription,
}) => {
  const theme = useTheme();
  const obectives = [
    {
      title: "Traffic",
      msg: "Your ads show on Google searches for businesses like yours, driving website traffic.",
    },
  ];

  const clearGoogleObjectiveItem = () => {
    setLink("");
    setTitle("");
    setDescription("");
  };
  const handleChange = (event) => {
    setPromotion_objective(event.target.value);
    clearGoogleObjectiveItem();
  };

  useEffect(() => {
    setPromotion_objective("Traffic");
  }, []);

  return (
    <div>
      <Typography
        variant="h6"
        color="text.main"
        sx={{
          //   textAlign: "center",

          fontSize: "20px",
          fontWeight: 500,
        }}
      >
        Objective
      </Typography>
      <FormControl sx={{ pl: 3, mb: 2 }}>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={promotion_objective}
          onChange={handleChange}
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: 14,
            },
            "& .MuiSvgIcon-root": {
              fontSize: 16,
            },
          }}
        >
          {obectives?.map((item, i) => (
            <FormControlLabel
              // sx={{
              //   fontSize:"13px"
              //   // color:theme.palette.text.light,
              // }}
              value={item?.title}
              control={<Radio />}
              label={item?.title}
            />
          ))}
        </RadioGroup>
      </FormControl>

      <TextField
        sx={{
          mb: 4,
        }}
        required
        fullWidth
        label="Link"
        className="demo_form_input_style2"
        variant="outlined"
        id="link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <TextField
        sx={{}}
        required
        fullWidth
        label="Title"
        className="demo_form_input_style2"
        variant="outlined"
        id="title"
        inputProps={{
          maxLength: 90,
        }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Typography
        variant="small"
        color="text.light"
        sx={{ mb: 2, textAlign: "right", display: "block" }}
      >
        {title.length}/90
      </Typography>
      <TextField
        sx={{}}
        required
        fullWidth
        label="Description"
        className="demo_form_input_style2"
        variant="outlined"
        id="description"
        inputProps={{
          maxLength: 90,
        }}
        multiline
        rows={3}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Typography
        variant="small"
        color="text.light"
        sx={{ mb: 2, textAlign: "right", display: "block" }}
      >
        {description.length}/90
      </Typography>
      <Typography
        variant="medium"
        color="text.main"
        sx={{ mt: 1, mb: 1, display: "block" }}
      >
        {obectives.find((res) => res.title === promotion_objective)?.msg}
      </Typography>
    </div>
  );
};

export default GoogleObjective;
