import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
  Container,
} from "@mui/material";

const availableTimes = [
  {
    value: "9:00",
    label: "Breakfast",
  },
  {
    value: "14:00",
    label: "Launch",
  },
  {
    value: "20:00",
    label: "Dinner",
  },
];

const occassionOption = [
  {
    id: 1,
    label: "Birthday",
  },
  {
    id: 2,
    label: "Anniversary",
  },
];

const BookingForm = () => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [guests, setGuests] = useState(0);
  const [occassion, setOccassion] = useState();

 
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(occassion);
    //clearForm();
    };
    
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
      <Stack component="form" spacing={2} mb={5} onSubmit={handleSubmit}>
        <Box display="flex" justifyContent="center">
          <TextField
            required
            label="Date"
            focused
            sx={{ m: 1, width: "30ch" }}
            type="date"
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
          <TextField
            select
            required
            label="Time"
            defaultValue="Breakfast"
            selected
            sx={{ m: 1, width: "30ch" }}
            onChange={(event) => {
              setTime(event.target.value);
            }}>
            {availableTimes.map((option) => (
              <MenuItem key={option.value} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box display="flex" justifyContent="center">
          <TextField
            required
            label="Number of Guest"
            type="number"
            placeholder="1"
            focused
            sx={{ m: 1, width: "62ch" }}
            onChange={(event) => {
              setGuests(event.target.value);
            }}
          />
        </Box>
        <Box display="flex" justifyContent="center">
          <TextField
            required
            select
            label="Occassion"
            defaultValue="Birthday"
            selected
            sx={{ m: 1, width: "62ch" }}
            onChange={(event) => {
              setOccassion(event.target.value);
            }}>
            {occassionOption.map((option) => (
              <MenuItem key={option.id} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            type="submit"
            sx={{ m: 1, width: "68ch" }}>
            Make Your reservation
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default BookingForm;
