import React, { useContext } from "react";
import { format } from "date-fns/esm";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
const AppointmentModal = ({
  appointmentModalData,
  selectedDate,
  setAppointmentModalData,
  refetch,
}) => {
  const { user } = useContext(AuthContext);
  const { name, slots, price } = appointmentModalData;
  const date = format(selectedDate, "PP");
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const slot = form.slot.value;
    const patientName = form.name.value;
    const number = form.number.value;
    const email = form.email.value;
    const submittedData = {
      patientName: patientName,
      treatment: name,
      price: price,
      slot: slot,
      number: number,
      appointmentDate: date,
      email: email,
    };
    console.log(submittedData);
    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(submittedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setAppointmentModalData(null);
          toast.success("Booking confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
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
              defaultValue={user?.displayName}
              name="name"
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
              disabled
            />
            <input
              name="number"
              type="number"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <input
              defaultValue={user?.email}
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              disabled
            />
            <button className="btn w-full">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;
