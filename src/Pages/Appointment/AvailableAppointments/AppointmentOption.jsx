import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-primary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Please try another day"} </p>
        <p className="mt-0 mb-3">
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Availble
        </p>
        <label
          htmlFor="booking-modal"
          className="btn btn-primary bg-gradient-to-l from-primary to-secondary uppercase text-white"
          onClick={() => setTreatment(appointmentOption)}
        >
          Book Appointment
        </label>
      </div>
    </div>
  );
};

export default AppointmentOption;
