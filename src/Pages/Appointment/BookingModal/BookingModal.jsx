import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "./../../../contexts/AuthProvider";
import toast from "react-hot-toast";

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { user } = useContext(AuthContext);

  const { name: treatmentName, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const number = form.number.value;
    const email = form.email.value;
    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      slot,
      number,
      email,
    };
    // console.log(booking);

    fetch("http://localhost:7000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking Confirmed Successfully!");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <form onSubmit={handleBooking} className="modal-box">
          <div className="flex justify-between">
            <h3 className="text-lg font-bold">{treatmentName}</h3>
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle  bg-accent text-white "
            >
              X
            </label>
          </div>

          <div className="mt-3 mb-5">
            <input
              type="text"
              value={date}
              disabled
              placeholder="full name"
              className="input input-bordered w-full text-black"
            />

            <select name="slot" className="select select-bordered w-full mt-4">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="full name"
              name="name"
              value={user?.displayName}
              className="input input-bordered w-full mt-4"
            />
            <input
              required
              type="number"
              name="number"
              value={user?.phone}
              placeholder="phone number"
              className="input input-bordered w-full mt-4"
            />
            <input
              type="email"
              value={user?.email}
              name="email"
              placeholder="email here"
              className="input input-bordered w-full mt-4"
            />
          </div>

          <input
            type="submit"
            value="Submit"
            className="w-full btn btn-accent"
          />
        </form>
      </div>
    </>
  );
};

export default BookingModal;
