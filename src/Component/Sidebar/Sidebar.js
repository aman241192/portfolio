import { Box, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentPageAction } from "../../Slice/slice";
import "./sidebar.css";

const Sidebar = () => {
  const menuList = useSelector((state) => state.counter.menuList);
  const dispatch = useDispatch();

  const menuHandler = (e) => {
    dispatch(currentPageAction(e.title));
  };
  return (
    <>
      <Box
        sx={{
          background: "#272727",
          height: "100%",
          padding: "30px",
          borderRadius: "10px",
          width: "100%",
          border: "1px solid white",
        }}
      >
        <Typography
          variant="h5"
          color={"#fff"}
          fontWeight={900}
          fontSize={"30px"}
          mb="20px"
          letterSpacing={"3px"}
        >
          Curriculum Vitae
        </Typography>

        {menuList.map((item) => (
          <ListItem
            counter="pointer"
            onClick={() => menuHandler(item)}
            className="menu"
          >
            <Box className="menuImage">
              <img src={item?.icon} alt={item.icon} />
            </Box>
            <Typography variant="h6" className="titleText">
              {item.title}
            </Typography>
          </ListItem>
        ))}
      </Box>
    </>
  );
};

export default Sidebar;
