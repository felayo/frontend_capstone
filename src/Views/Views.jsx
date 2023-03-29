import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Index";
import BookingPage from "../pages/Reservations/Index";

const Views = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route exact path="/bookings" element={<BookingPage />}/>
    </Routes>
  );
};

export default Views;
