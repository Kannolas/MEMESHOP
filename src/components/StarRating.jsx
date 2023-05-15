import React from "react";
import star from "../imgs/star.png"

function StarRating({ stars }) {
  const starArray = [];
  for (let i = 0; i < stars; i++) {
    starArray.push(<img src={star} alt="star" />);
  }
  return <div className="starArray">{starArray}</div>;
}

export default StarRating;