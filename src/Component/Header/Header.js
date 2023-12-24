import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import "./header.css";
import aman_khare_cv from "../../assets/aman_khare_cv.pdf";
import { IoMdDownload } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleAction } from "../../Slice/slice";

const Header = () => {
  const [toggle, settoggle] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(toggleAction(toggle));
    };
  }, [toggle]);
  const githubLink = "https://github.com/aman241192";
  return (
    <div>
      <div className="headerContainer">
        <Stack direction={"row"} spacing={"30px"} justifyContent={"flex-end"}>
          <a href={aman_khare_cv} target="_blank">
            <IoMdDownload className="downloadBtn" />
          </a>
          <FaGithub
            className="downloadBtn"
            onClick={() => {
              window.open(githubLink, "_blank"); //to open new page
            }}
          />
          <GiHamburgerMenu
            className=" hamburger"
            onClick={() => settoggle((prev) => !prev)}
          />
        </Stack>
      </div>
    </div>
  );
};

export default Header;
