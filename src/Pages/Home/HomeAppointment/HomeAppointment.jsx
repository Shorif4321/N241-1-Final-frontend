import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointmentBg from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const HomeAppointment = () => {
  return (
    <div
      style={{ background: `url(${appointmentBg})`, backgroundSize: "cover" }}
      className=" mt-5 md:mt-[290px]"
    >
      <div className="hero">
        <div className="hero-content p-0 flex-col lg:flex-row">
          <img
            src={doctor}
            className="hidden md:block -mt-40 lg:w-1/2 rounded-lg"
          />

          <div className="text-white p-10 md:pe-10">
            <h3 className="text-primary mb-5 font-semibold">Appointment</h3>
            <h1 className="text-2xl md:text-5xl font-bold">
              Make an appointment Today
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAppointment;
