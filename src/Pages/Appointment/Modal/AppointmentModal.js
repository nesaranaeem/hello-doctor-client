import React from "react";
import { format } from "date-fns/esm";
const AppointmentModal = ({ appointmentModalData, selectedDate }) => {
  const { name, slots } = appointmentModalData;
  return (
    <>
      <input type="checkbox" id="appointment-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="appointment-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <div className="grid grid-cols-1 gap-4 py-4">
            <input
              type="text"
              value={format(selectedDate, "PP")}
              className="input input-bordered w-full"
              disabled
            />
            <select className="select select-bordered w-full">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <button className="btn w-full">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;
