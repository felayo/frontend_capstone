import React, { useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import localISOTime from "./localISOTime";
import GuestsErrorMessage from "./GuestsErrorMessage";

const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
  const [date, setDate] = useState("");

  const [guests, setGuests] = useState({ value: "", isTouched: false });

  const [time, setTime] = useState(availableTimes[0]);

  const [occassion, setOccassion] = useState("Anniversary");

  const getIsFormValid = () => {
    return date && time && guests.value !== "";
  };

  const clearForm = () => {
    setDate("");
    setTime(availableTimes[0]);
    setGuests({ value: "", isTouched: false });
    setOccassion("");
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (getIsFormValid()) {
      if (window.submitAPI(date)) {
        submitForm(date, time);
      }
      clearForm();
    }
  }
  return (
    <>
      <Stack component="form" spacing={2} mb={5} onSubmit={handleSubmit}>
        <Box display="flex" justifyContent="center">
          <TextField
            required
            label="Date"
            focused
            sx={{ m: 1, width: "30ch" }}
            type="date"
            value={date}
            inputProps={{ min: localISOTime()}}
            onChange={(e) => setDate(e.target.value)}
          />
          <TextField
            select
            focused
            required
            label="Time"
            defaultValue="17.00"
            SelectProps={{
              native: true,
            }}
            onChange={(e) => setTime(e.target.value)}
            sx={{ m: 1, width: "30ch" }}>
            {availableTimes.map((option, index) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })}
          </TextField>
        </Box>
        <Box display="flex" justifyContent="center">
          <TextField
            required
            label="Number of Guest"
            type="number"
            placeholder="1"
            focused
            inputProps={{ min: 1, max: 10 }}
            sx={{ m: 1, width: "62ch" }}
            value={guests.value}
            onChange={(e) => {
              setGuests({ ...guests, value: e.target.value });
            }}
            onBlur={() => {
              setGuests({ ...guests, isTouched: true });
            }}
          />
        </Box>
        {guests.isTouched && guests.value.length < 1 ? (
          <GuestsErrorMessage />
        ) : null}

        <Box display="flex" justifyContent="center">
          <TextField
            required
            select
            value={occassion}
            label="Occassion"
            SelectProps={{
              native: true,
            }}
            sx={{ m: 1, width: "62ch" }}
            onChange={(event) => {
              setOccassion(event.target.value);
            }}>
            <option value="None">None</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
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
    </>
  );
};

export default BookingForm;
