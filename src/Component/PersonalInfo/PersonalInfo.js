import React from "react";
import Typewriter from "typewriter-effect";
import photo from "../../assets/images/photo.jpeg";
import { Box, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { TbMailFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import "./personalInfo.css";
import { FaGithub } from "react-icons/fa";

const PersonalInfo = () => {
  const position = useSelector((state) => state.counter.position);
  const objective = useSelector((state) => state.counter.objective);

  const githubLink = "https://github.com/aman241192";
  const linkedIn = "https://www.linkedin.com/in/aman-khare-98583b297";
  return (
    <Stack
      maxWidth={"1020px"}
      width={"100%"}
      // direction={"row"}
      alignItems={"center"}
      margin="100px auto 0"
      p="50px"
      m="auto"
      spacing={"40px"}
      // height={"100vh"}
    >
      <Box className="userImagebox">
        <img
          src={photo}
          alt={photo}
          style={{
            filter: "grayscale(82%)",
          }}
        />
      </Box>

      <Box
        sx={{
          // maxWidth: "580px",
          maxWidth: "800px",
          width: "100%",
          "& .Typewriter__wrapper": {
            fontSize: "30px",
            width: "100%",
            color: "#fff",
            fontWeight: "500",
          },
          "& .Typewriter__cursor": {
            fontSize: "30px",
            color: "#fff",
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "45px",
            fontWeight: "600",
            color: "#fff",
            marginBottom: "15px",
          }}
        >
          Aman khare
        </Typography>

        <Typewriter
          options={{
            strings: position,
            autoStart: true,
            loop: true,
          }}
        />
        <Typography variant="h6" fontSize="18px" mt="25px" color="#fff">
          {objective}
        </Typography>

        <Stack direction={"row"} mt="20px" spacing={"20px"}>
          {/* <Box className="socailLinks"> */}
          <a href="mailto:aman.khare2411@gmail.com">
            <TbMailFilled
              fontSize={"25px"}
              cursor={"pointer"}
              className="socailLinks"
            />
          </a>
          {/* </Box> */}

          {/* <Box className="socailLinks"> */}
          <FaLinkedinIn
            className="socailLinks"
            fontSize={"25px"}
            cursor={"pointer"}
            color="#fff"
            onClick={() => {
              window.open(linkedIn, "_blank"); //to open new page
            }}
          />
          {/* </Box> */}

          <FaGithub
            className="socailLinks"
            onClick={() => {
              window.open(githubLink, "_blank"); //to open new page
            }}
          />
        </Stack>
      </Box>
    </Stack>
  );
};

export default PersonalInfo;
