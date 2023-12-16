import { Box, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentPageAction } from "../../Slice/slice";

const Sidebar = () => {
  const menuList = useSelector((state) => state.counter.menuList);
  const dispatch = useDispatch();

  const menuHandler = (e) => {
    dispatch(currentPageAction(e.title));
  };
  return (
    <>
      <Box p="0px 30px" width={"100%"} m={"auto"}>
        <Typography variant="h5" fontWeight={900} fontSize={"30px"} mb="20px">
          Curriculum Vitae
        </Typography>

        {menuList.map((item) => (
          <ListItem counter="pointer" onClick={() => menuHandler(item)}>
            <Box width="20px" mr={"10px"}>
              <img src={item?.icon} alt={item.icon} />
            </Box>
            <Typography
              variant="h6"
              sx={{
                color: "#a9a0a0",
                cursor: "pointer",
                fontSize: "20px",
                fontWeight: "400",
                ":hover": {
                  color: "#504747",
                  fontWeight: "600",
                },
              }}
            >
              {item.title}
            </Typography>
          </ListItem>
        ))}
      </Box>
    </>
  );
};

export default Sidebar;
