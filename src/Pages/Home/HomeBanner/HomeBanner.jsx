import React from "react";
import chair from "../../../assets/images/chair 1.png";
import bannerBg from "../../../assets/images/bg.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const HomeBanner = () => {
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
        <div>
          <h1 className="text-2xl md:text-5xl font-bold">
            Your New Smile Starts Here
          </h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <PrimaryButton>GET STarted</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
