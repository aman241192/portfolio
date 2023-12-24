import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import aman_khare_cv from "../../assets/aman_khare_cv.pdf";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";

import "./about.css";

const About = () => {
  const personalInfo = useSelector((state) => state.counter.personalInfo);

  return (
    <div>
      <Container>
        <h2 variant="h2">About Me</h2>

        {personalInfo.map((item) => (
          <Box>
            <Box borderBottom={"2px solid gray"} pb="20px" mb={"10px"}>
              <Typography variant="h5" fontSize={"25px"} mb="5px">
                {item.name}
              </Typography>
              <Typography variant="h6" fontSize={"20px"}>
                {item.position}
              </Typography>
            </Box>

            <p className="description"> {item.aboutDescription}</p>

            <Stack
              spacing={"15px"}
              borderTop={"2px solid gray"}
              pt="20px"
              mt={"20px"}
            >
              <Stack direction="row" alignItems={"center"} spacing={"20px"}>
                <BiLogoGmail fontSize={"20px"} />
                <Typography className="description">{item.email}</Typography>
              </Stack>

              <Stack direction="row" alignItems={"center"} spacing={"20px"}>
                <FaGithub fontSize={"20px"} />
                <Typography className="description">{item.git}</Typography>
              </Stack>
            </Stack>

            <Stack
              direction={"row"}
              spacing={"15px"}
              borderTop={"2px solid gray"}
              pt="20px"
              mt={"20px"}
              mb="30px"
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
