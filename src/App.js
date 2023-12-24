import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Component/Sidebar/Sidebar";
import Home from "./Component/Home/Home";
import { Box, Container, Stack } from "@mui/material";
import Header from "./Component/Header/Header";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const theme = useSelector((state) => state.counter.theme);
  const toggle = useSelector((state) => state.counter.toggleBar);
  const matches = useMediaQuery("(max-width:992px)");

  // const [toggleBtn, settoggleBtn] = useState("");

  // useEffect(() => {
  //   return () => {
  //     settoggleBtn(toggle);
  //   };
  // }, [toggle]);

  return (
    <>
      <Box sx={{ padding: "0px 20px" }}>
        <Header />

        <div className="container">
          <div className="containerFlex">
            <Box className="sideBar_outer">
              <Sidebar />
            </Box>
            <Home />
          </div>
        </div>
      </Box>
    </>
  );
}

export default App;
