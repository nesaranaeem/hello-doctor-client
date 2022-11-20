import React from "react";
const AppointmentOptions = ({ option, setAppointmentModalData }) => {
  const { name, slots } = option;

  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-secondary text-2xl font-bold">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="appointment-modal"
            onClick={() => setAppointmentModalData(option)}
            className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
