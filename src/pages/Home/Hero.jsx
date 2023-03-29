import React from "react";
import { Box, Grid, Typography, Container, Button } from "@mui/material";
import RestaurantImage from "../../Assets/img/restauranfood.jpg";

const Hero = () => {
  return (
    <Box
      component="main"
      sx={{ backgroundColor: "#495e57", minHeight: "300px" }}>
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <Typography
              variant="h3"
              component="div"
              gutterBottom
              fontWeight="fontWeightBold"
              sx={{ color: "#f4ce14", paddingTop: 4 }}>
              Little Lemon
              <Typography color="#fff">Chicago</Typography>
            </Typography>
            <Typography gutterBottom variant="body2" color="#fff">
              Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
              Maxime mollitia, molestiae quas vel sint commodi <br />{" "}
              repudiandae consequuntur voluptatum laborum numquam
            </Typography>
            <Button
              sx={{ marginTop: 4, backgroundColor: "#f4ce14", color: "#333" }}
              variant="contained"
              href="#contained-buttons">
              Reserve a table
            </Button>
          </Grid>
          <Grid item xs={6} display="flex" justifyContent="flex-end">
            <Box
              component="img"
              src={RestaurantImage}
              alt="restaurant"
              sx={{ height: 300, width: 300, position: "absolute", top: "100px", borderRadius: '5%' }}></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
