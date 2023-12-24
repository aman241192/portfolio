import { Box, Typography } from "@mui/material";
import React from "react";
import "./education.css";

const Education = () => {
  return (
    <div>
      <h2>Education</h2>

      <Box className="educationContainer">
        <Typography variant="h5">
          B.Com from Lucknow University | 2012-2015.
        </Typography>
        <Typography variant="h5">Inter from I.S.C.E board | 2012</Typography>
        <Typography variant="h5">Hight School from I.S.C | 2010</Typography>
      </Box>
    </div>
  );
};

export default Education;
