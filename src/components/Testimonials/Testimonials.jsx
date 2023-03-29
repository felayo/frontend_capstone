import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Card,
  CardContent,
  Rating,
  Avatar,
} from "@mui/material";

const Testimonials = () => {
  const [value, setValue] = useState(5);
  return (
    <Box
      component="section"
      mt={6}
      sx={{ backgroundColor: "#edefee", minHeight: "350px" }}>
      <Container>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          pt={10}
          pb={3}
          sx={{ color: "#333", textAlign: "center" }}>
          Testimonials
        </Typography>
        <Grid container spacing={10} pb={10}>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 400 }}>
              <CardContent>
                <Rating name="read-only" value={value} readOnly />
                <Box display="flex" justifyContent="space-between" pt={1}>
                  <Avatar sx={{ width: 54, height: 54, bgcolor: "#ee9972" }}>
                    {" "}
                    AF{" "}
                  </Avatar>
                  <Typography variant="h6" display="flex" alignItems="center">
                    Ayorinde F.
                  </Typography>
                </Box>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="text.secondary"
                  pt={2}>
                  Lizards are a widespread group of squate rept, with over
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 400 }}>
              <CardContent>
                <Rating name="read-only" value={value} readOnly />
                <Box display="flex" justifyContent="space-between" pt={1}>
                  <Avatar sx={{ width: 54, height: 54, bgcolor: "#495e57" }}>
                    {" "}
                    MA{" "}
                  </Avatar>
                  <Typography variant="h6" display="flex" alignItems="center">
                    Mary A.
                  </Typography>
                </Box>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="text.secondary"
                  pt={2}>
                  Lizards are a widespread group of squate rept, with over
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 400 }}>
              <CardContent>
                <Rating name="read-only" value={value} readOnly />
                <Box display="flex" justifyContent="space-between" pt={1}>
                  <Avatar sx={{ width: 54, height: 54, bgcolor: "#f4ce14" }}>
                    {" "}
                    OF{" "}
                  </Avatar>
                  <Typography variant="h6" display="flex" alignItems="center">
                    Olusoji F.
                  </Typography>
                </Box>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="text.secondary"
                  pt={2}>
                  Lizards are a widespread group of squate rept, with over
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 400 }}>
              <CardContent>
                <Rating name="read-only" value={value} readOnly />
                <Box display="flex" justifyContent="space-between" pt={1}>
                  <Avatar sx={{ width: 54, height: 54, bgcolor: "#333" }}>
                    {" "}
                    TO{" "}
                  </Avatar>
                  <Typography variant="h6" display="flex" alignItems="center">
                    Tobi O.
                  </Typography>
                </Box>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="text.secondary"
                  pt={2}>
                  Lizards are a widespread group of squate rept, with over
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
