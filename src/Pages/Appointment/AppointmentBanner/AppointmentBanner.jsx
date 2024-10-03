import React, { useState } from "react";
import chair from "../../../assets/images/chair 1.png";
import bannerBg from "../../../assets/images/bg.png";
import "react-day-picker/style.css";

import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div
      style={{
        background: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" hero px-2 md:py-20"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} />
        <div className="shadow-2xl bg-base-100 rounded-lg p-5 mr-5">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            footer={
              selectedDate
                ? `Selected: ${selectedDate.toLocaleDateString()}`
                : "Pick a day."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
