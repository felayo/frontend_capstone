import React from "react";
import { Grid, Typography, Container, Box } from "@mui/material";
import AboutLittleLemonImage from "../../Assets/img/Mario and Adrian A.jpg";

const About = () => {
  return (
    <Container>
      <Grid container pt={5}>
        <Grid item xs={6}>
          <Typography
            variant="h3"
            component="div"
            gutterBottom
            fontWeight="fontWeightBold">
            Little Lemon
            <Typography>Chicago</Typography>
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias
            eos sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam recusandae alias error harum maxime adipisci amet laborum.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" justifyContent="flex-end" objectPosition="50px 50px">
            <Box component="img" src={AboutLittleLemonImage} alt="About Little Lemon" width="70%" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
