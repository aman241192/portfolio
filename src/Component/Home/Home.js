import React from "react";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import { Box } from "@mui/material";
import About from "../About/About";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import { useSelector } from "react-redux";
const Home = () => {
  const currPg = useSelector((state) => state.counter.currentPage);

  return (
    <Box sx={{ width: "100%", backgroundColor: "#F8F8F8" }}>
      {currPg == "Home" ? (
        <PersonalInfo />
      ) : currPg == "About" ? (
        <About />
      ) : (
        <Portfolio />
      )}
    </Box>
  );
};

export default Home;
