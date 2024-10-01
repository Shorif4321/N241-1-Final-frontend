import React from "react";
import footerBg from "../../../assets/images/footer-bg 1 1.png";

const Footer = () => {
  return (
    <div
      style={{ background: `url(${footerBg})`, backgroundSize: "cover" }}
      className="p-10"
    >
      <footer>
        <div className="footer justify-between">
          <nav>
            <h6 className="footer-title ">SERVICES</h6>
            <a className="link link-hover">Emergency Checkup</a>
            <a className="link link-hover">Monthly Checkup</a>
            <a className="link link-hover">Weekly Checkup</a>
            <a className="link link-hover">Deep Checkup</a>
          </nav>
          <nav>
            <h6 className="footer-title">ORAL HEALTH</h6>
            <a className="link link-hover">Fluoride Treatment</a>
            <a className="link link-hover">Cavity Filling</a>
            <a className="link link-hover">Teath Whitening</a>
          </nav>
          <nav>
            <h6 className="footer-title">OUR ADDRESS</h6>
            <a className="link link-hover">New York - 101010 Hudson</a>
          </nav>
        </div>
      </footer>

      <div className="text-center mt-20">
        <p>Copyright 2022 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
