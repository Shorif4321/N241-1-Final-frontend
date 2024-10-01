import React from "react";

const Review = ({ review }) => {
  const { location, reviewText, img, name } = review;
  return (
    <div>
      <div className="card shadow-xl">
        <div className="card-body items-center text-center">
          <p className="text-left">{reviewText}</p>
        </div>

        <div className="flex items-center px-7 py-3">
          <img
            src={img}
            alt="Shoes"
            className="w-16 rounded-full ring ring-primary  p-[2px]"
          />

          <div className="ms-4">
            <h2 className="font-bold">{name}</h2>
            <h2>{location}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
