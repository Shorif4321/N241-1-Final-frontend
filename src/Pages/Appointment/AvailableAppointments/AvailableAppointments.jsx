import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);

  const [appointmentOptions, setAppointmentOptions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/appointmentOptions")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);

  return (
    <div className="py-24">
      <div className="text-center mb-5">
        <h2 className="mb-2 text-primary font-semibold">
          Available Services on {format(selectedDate, "PP")}
        </h2>
        <h4 className="">Please select a service.</h4>
      </div>

      <div className="mt-8 mx-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>

      {/* ===== call bookin modal===== */}
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          setTreatment={setTreatment}
          treatment={treatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
