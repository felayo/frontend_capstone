import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import FooterImage from "../../Assets/img/restauranfood.jpg";

const Footer = ({ links }) => {
  console.log(links);
  return (
    <Box component="section" sx={{ backgroundColor: "#edefee" }} pt={5} pb={5}>
      <Container>
        <Grid container>
          <Grid item xs={3}>
            <img src={FooterImage} alt="Footer" width="70%" />
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" component="h4" fontWeight="fontWeightBold">
              Doormat Navigation
            </Typography>
            <Box display="flex" flexDirection="column">
              {links.map((link, index) => (
                <Typography variant="body1" key={index} pb={2}>
                  {link}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" component="h4" fontWeight="fontWeightBold">
              Contact
            </Typography>
            <Box display="flex" flexDirection="column">
              <Typography variant="body1" pb={2}>
                Address: 3 Adebayo Mokuolu Str.
              </Typography>
              <Typography variant="body1" pb={2}>
                Phone: +234 703 0260 488
              </Typography>
              <Typography variant="body1" pb={2}>
                Email: ajibaye@gmail.com
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" component="h4" fontWeight="fontWeightBold">
              Social Media
            </Typography>
            <Box display="flex" flexDirection="column">
              <Typography variant="body1" pb={2}>
                Address: 3 Adebayo Mokuolu Str.
              </Typography>
              <Typography variant="body1" pb={2}>
                Phone: +234 703 0260 488
              </Typography>
              <Typography variant="body1" pb={2}>
                Email: ajibaye@gmail.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
