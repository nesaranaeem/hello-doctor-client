import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns/esm";
import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading/Loading";
import AppointmentOptions from "./AppointmentOptions";
import AppointmentModal from "./Modal/AppointmentModal";

const AppointmentData = ({ selectedDate, setSelectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [appointmentModalData, setAppointmentModalData] = useState(null);
  const date = format(selectedDate, "PP");
  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:3000/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section>
      <p className="text-center">
        you've selected {format(selectedDate, "PP")}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {appointmentOptions.map((option) => (
          <AppointmentOptions
            key={option._id}
            option={option}
            setAppointmentModalData={setAppointmentModalData}
          ></AppointmentOptions>
        ))}
      </div>
      {appointmentModalData && (
        <AppointmentModal
          appointmentModalData={appointmentModalData}
          selectedDate={selectedDate}
          setAppointmentModalData={setAppointmentModalData}
          refetch={refetch}
        ></AppointmentModal>
      )}
    </section>
  );
};

export default AppointmentData;
