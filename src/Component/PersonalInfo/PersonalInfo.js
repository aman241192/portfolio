import React from "react";
import Typewriter from "typewriter-effect";
import photo from "../../assets/images/photo.jpeg";
import { Box, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { TbMailFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";

const PersonalInfo = () => {
  const position = useSelector((state) => state.counter.position);
  const objective = useSelector((state) => state.counter.objective);

  return (
    <Stack
      maxWidth={"1020px"}
      width={"100%"}
      direction={"row"}
      alignItems={"center"}
      margin="100px auto 0"
      p="50px"
      m="auto"
      spacing={"40px"}
      height={"100vh"}
    >
      <Box
        width="300px"
        height="300px"
        border="7px solid #dadada"
        overflow="hidden"
        borderRadius="30% 70% 70% 30% / 30% 30% 70% 70% "
      >
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
          maxWidth: "580px",
          width: "100%",
          "& .Typewriter__wrapper": {
            fontSize: "30px",
            width: "100%",
            fontWeight: "500",
          },
          "& .Typewriter__cursor": {
            fontSize: "30px",
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "45px",
            fontWeight: "600",
            // color: "#a9a0a0",
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
        <Typography variant="h6" color="#a9a0a0" fontSize="18px" mt="15px">
          {objective}
        </Typography>

        <Stack direction={"row"} mt="20px" spacing={"20px"}>
          <Box
            sx={{
              width: "45px",
              height: "45px",
              padding: "10px",
              background: "transparent",
              display: "grid",
              placeItems: "center",
              borderRadius: "50%",
              "&:hover": { background: "#cdcdcd" },
            }}
          >
            <TbMailFilled fontSize={"25px"} cursor={"pointer"} />
          </Box>

          <Box
            sx={{
              width: "45px",
              height: "45px",
              padding: "10px",
              background: "transparent",
              display: "grid",
              placeItems: "center",
              borderRadius: "50%",
              "&:hover": { background: "#cdcdcd" },
            }}
          >
            <FaLinkedinIn fontSize={"25px"} cursor={"pointer"} />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default PersonalInfo;
