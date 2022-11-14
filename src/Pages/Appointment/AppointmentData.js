import { format } from "date-fns/esm";
import React, { useEffect, useState } from "react";
import AppointmentOptions from "./AppointmentOptions";
import AppointmentModal from "./Modal/AppointmentModal";

const AppointmentData = ({ selectedDate, setSelectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [appointmentModalData, setAppointmentModalData] = useState(null);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  console.log(appointmentOptions);
  return (
    <section>
      <p className="text-center">
        you've selected {format(selectedDate, "PP")}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {appointmentOptions.map((option) => (
          <AppointmentOptions
            key={option.id}
            option={option}
            setAppointmentModalData={setAppointmentModalData}
          ></AppointmentOptions>
        ))}
      </div>
      {appointmentModalData && (
        <AppointmentModal
          appointmentModalData={appointmentModalData}
        ></AppointmentModal>
      )}
    </section>
  );
};

export default AppointmentData;
