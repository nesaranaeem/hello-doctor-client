import React, { useState } from "react";
import AppointmentData from "./AppointmentData";
import AppointmentHero from "./AppointmentHero";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <>
      <AppointmentHero
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppointmentHero>
      <AppointmentData
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppointmentData>
    </>
  );
};

export default Appointment;
