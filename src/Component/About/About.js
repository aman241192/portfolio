import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import aman_khare_cv from "../../assets/aman_khare_cv.pdf";

const About = () => {
  const personalInfo = useSelector((state) => state.counter.personalInfo);

  return (
    <div>
      <Container sx={{ marginTop: "100px" }}>
        <Typography variant="h4" fontSize={"30px"} fontWeight={600} mb="20px">
          About Me
        </Typography>

        {personalInfo.map((item) => (
          <Box>
            <Box borderBottom={"2px solid gray"} pb="20px" mb={"20px"}>
              <Typography variant="h5">{item.name}</Typography>
              <Typography variant="h6">{item.position}</Typography>
            </Box>

            <Typography variant="p">{item.aboutDescription} </Typography>

            <Stack
              direction={"row"}
              spacing={"15px"}
              borderTop={"2px solid gray"}
              pt="20px"
              mt={"20px"}
            >
              <Typography>Email:</Typography>
              <Typography>{item.email}</Typography>
            </Stack>

            <Stack
              direction={"row"}
              spacing={"15px"}
              borderTop={"2px solid gray"}
              pt="20px"
              mt={"20px"}
              mb="20px"
            >
              <Typography>Phone:</Typography>
              <Typography>{item.phone}</Typography>
            </Stack>

            <Button variant="contained" href={aman_khare_cv} target="_blank">
              Download Cv
            </Button>
          </Box>
        ))}
      </Container>
    </div>
  );
};

export default About;
