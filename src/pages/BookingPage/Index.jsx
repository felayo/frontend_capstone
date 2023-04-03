import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import BookingForm from "../../components/BookingForm/BookingForm";

const BookingPage = ({ availableTimes, submitForm }) => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Typography
            variant="h4"
            component="h2"
            fontWeight="fontWeightBold"
            pt={4}
            pb={4}>
            Find a table for any occasion
          </Typography>
        </Grid>
      </Grid>
      <BookingForm availableTimes={availableTimes} submitForm={submitForm} />
    </Container>
  );
};

export default BookingPage;
