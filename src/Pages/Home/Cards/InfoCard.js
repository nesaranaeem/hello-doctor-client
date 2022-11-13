import React from "react";

const InfoCard = ({ card }) => {
  const { id, name, description, icon, bgClass } = card;
  return (
    <div className={`card p-6 md:card-side ${bgClass} shadow-xl`}>
      <figure>
        <img src={icon} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
