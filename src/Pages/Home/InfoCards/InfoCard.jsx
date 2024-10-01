import React from "react";

const InfoCard = ({ card }) => {
  const { name, bgClass, icon, description } = card;
  return (
    <div className={`px-6 text-white card card-side ${bgClass}`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
