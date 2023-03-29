import React from "react";
import { Grid, Typography, Container, Button, Box } from "@mui/material";
import Card from "../../components/Card/Card";

const Hightlights = () => {
  return (
    <Container>
        <Grid container sx={{ marginTop: 7 }}>
          <Grid item xs={8}>
            <Typography variant="h3">This weeks specials</Typography>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" justifyContent="flex-end">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#f4ce14",
                  color: "#333333",
                  textTransform: "capitalize",
                }}>
                Online Menu
              </Button>
            </Box>
          </Grid>
        </Grid>

      {/* Card Section*/}
      <Card />
    </Container>
  );
};

export default Hightlights;
