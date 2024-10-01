import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="btn btn-primary bg-gradient-to-l from-primary to-secondary uppercase text-white">
      {children}
    </button>
  );
};

export default PrimaryButton;
