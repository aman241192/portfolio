import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Component/Sidebar/Sidebar";
import Home from "./Component/Home/Home";
import { Box, Stack } from "@mui/material";
import Header from "./Component/Header/Header";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const theme = useSelector((state) => state.counter.theme);
  let localTheme = localStorage.getItem("theme");

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* <Header /> */}

        <Stack direction="row">
          <Stack
            backgroundColor="white"
            alignItems={"center"}
            maxWidth="460px"
            width="100%"
            height={"100vh"}
          >
            <Sidebar />
          </Stack>
          <Home />
        </Stack>
      </Box>
    </>
  );
}

export default App;
