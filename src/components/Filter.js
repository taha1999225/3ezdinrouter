import React from "react";
import ReactStars from "react-rating-stars-component";

const Filter = ({ settext }) => {
  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movie"
          onChange={(e) => settext(e.target.value)}
        />
      </div>
      <ReactStars edit={true} count={5} size={24} activeColor="#ffd700" />{" "}
    </div>
  );
};

export default Filter;
