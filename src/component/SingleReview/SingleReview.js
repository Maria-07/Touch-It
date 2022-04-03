import React from "react";
import "./SingleReview.css";

const SingleReview = ({ reviews }) => {
  const { name, review, rating } = reviews;
  return (
    <div className="review-box p-10">
      <p className="my-3">
        <span className=" text-2xl font-semibold text-teal-800">
          {name}'s review :{" "}
        </span>
        {review}
      </p>
      <p className=" font-semibold">Ratings : {rating}</p>
    </div>
  );
};

export default SingleReview;
