import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
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
      <div className="mt-10">
        <Rating
          initialRating={rating}
          emptySymbol={<FontAwesomeIcon icon={faStar} />}
          fullSymbol={
            <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
          }
          readonly
        ></Rating>
      </div>
    </div>
  );
};

export default SingleReview;
