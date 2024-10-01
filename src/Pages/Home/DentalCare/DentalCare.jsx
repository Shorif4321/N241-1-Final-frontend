import React from "react";
import dentalCare from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const DentalCare = () => {
  return (
    <div className="hero md:px-20 ">
      <div className="md:flex items-center">
        <div className="md:w-2/4">
          <img className="p-3 md:p-0 rounded-lg md:w-4/5 " src={dentalCare} />
        </div>

        <div className="p-4 md:p-0 md:w-2/4">
          <h1 className="text-2xl md:text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
