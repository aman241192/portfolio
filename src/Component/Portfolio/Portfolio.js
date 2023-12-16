import { Box, Card, Container, Stack, Typography } from "@mui/material";
import React from "react";
import timer from "../../assets/images/timer.png";
import { useSelector } from "react-redux";
// import time from '../../assets/images/timer.png'
const Portfolio = () => {
  const portfolio = useSelector((state) => state.counter.portfolio);

  return (
    <div>
      <Box mt="50px">
        <Container>
          <Typography variant="h5" mb="50px">
            Creative Portfolio
          </Typography>

          <Stack
            spacing={"20px"}
            direction={"row"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
          >
            {portfolio.map((item) => (
              <Card maxWidth="400px" width="100%">
                <a href={item.link} target="_blank">
                  <img
                    src={item?.image}
                    alt={item?.image}
                    style={{ width: "350px", height: "200px" }}
                  />
                </a>
                <Typography variant="h6" textAlign="center" mb="20px">
                  {item.title}
                </Typography>
              </Card>
            ))}
          </Stack>
        </Container>
      </Box>{" "}
    </div>
  );
};

export default Portfolio;
