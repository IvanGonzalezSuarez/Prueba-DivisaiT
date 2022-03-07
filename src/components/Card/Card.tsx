import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

interface CardProps {
  card: any;
}

export const Card = ({ card }: CardProps) => {
  return (
    <div className="Card">
      <div className="box">
        <div className="content">
          <h3>{card.address.locality}</h3>
          <h3>{card.address["postal-code"]}</h3>
          <h3>{card.address["street-address"]}</h3>
          <a
            href={
              "https://www.google.com/maps/search/?api=1&query=" +
              card.location.latitude +
              "%2C" +
              card.location.longitude
            }
            target="blank"
          >
            Directions
          </a>
        </div>
      </div>
    </div>
  );
};
