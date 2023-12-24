import { Box, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useSelector } from "react-redux";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    // backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    // backgroundColor: "#868587",
    // backgroundColor: "#3c9fff",
    backgroundColor: "#dea94f",
  },
}));

const Skills = () => {
  const skills = useSelector((state) => state.counter.skills);

  return (
    <div>
      <h2>Skills</h2>
      <Box className="">
        {skills.map((item) => (
          <Box mb="20px">
            <Typography variant="h5" mb="10px">
              {item.title}
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <BorderLinearProgress variant="determinate" value={item.value} />
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Skills;
