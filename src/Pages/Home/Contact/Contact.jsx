import React from "react";
import appointmentBg from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Contact = () => {
  return (
    <div
      style={{ background: `url(${appointmentBg})`, backgroundSize: "cover" }}
      className=" mt-5"
    >
      <div className="hero">
        <form className="card-body">
          <div className="text-center my-5 ">
            <h2 className="mb-2 text-primary font-semibold">Contact Us</h2>
            <h4 className="text-4xl text-white">Stay connected with us</h4>
          </div>

          <div className="form-control mt-3">
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-3">
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control my-3">
            <textarea
              type="text"
              placeholder="Message"
              rows="5"
              className="textarea"
            />
          </div>

          <PrimaryButton>Get Started</PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default Contact;
