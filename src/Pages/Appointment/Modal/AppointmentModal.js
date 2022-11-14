import React from "react";
import { format } from "date-fns/esm";
const AppointmentModal = ({ appointmentModalData, selectedDate }) => {
  const { name, slots } = appointmentModalData;
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const number = form.number.value;
    const email = form.email.value;
    const submittedData = {
      name: name,
      slot: slot,
      number: number,
      email: email,
    };
    console.log(submittedData);
  };
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
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-4 py-4"
          >
            <input
              type="text"
              value={format(selectedDate, "PP")}
              className="input input-bordered w-full"
              disabled
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
            />
            <input
              name="number"
              type="number"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <button className="btn w-full">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;
