import React from "react";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import { Box } from "@mui/material";
import About from "../About/About";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import { useSelector } from "react-redux";
const Home = () => {
  const currPg = useSelector((state) => state.counter.currentPage);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#272727",
        padding: "30px",
        borderRadius: "10px",
        border: "1px solid white",
      }}
    >
      {currPg == "Home" ? (
        <PersonalInfo />
      ) : currPg == "About" ? (
        <About />
      ) : currPg == "Projects" ? (
        <Portfolio />
      ) : currPg == "Skills" ? (
        <Skills />
      ) : (
        <Education />
      )}
    </Box>
  );
};

export default Home;
