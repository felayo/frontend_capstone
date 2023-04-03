import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home/Index";
import BookingPage from "../pages/BookingPage/Index";
import ConfirmedBooking from "../pages/BookingPage/ConfirmedBooking";

const Views = () => {
  const navigate = useNavigate();

  function updateTimes(state, action) {
    return window.fetchAPI(new Date(action.date + "T" + action.time));
  }

  function initializeTimes() {
    return window.fetchAPI(new Date());
  }

  function submitForm(dateVal, timeVal) {
    dispatch({ date: dateVal, time: timeVal });
    navigate("/reservations/ConfirmedBooking");
  }

  const [state, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        exact
        path="/bookings"
        element={<BookingPage availableTimes={state} submitForm={submitForm} />}
      />
      <Route
          path="/reservations/ConfirmedBooking"
          element={<ConfirmedBooking />}
        />
    </Routes>
  );
};

export default Views;
