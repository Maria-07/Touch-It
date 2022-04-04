import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import "./SingleReview.css";

const SingleReview = ({ reviews }) => {
  const { name, review, rating, date } = reviews;
  return (
    <div className="review-box p-10 m-2">
      <p className="my-3">
        <span className=" text-2xl font-semibold text-teal-800">
          {name}'s review :{" "}
        </span>
        {review}
      </p>
      <span className="mt-2 mb-6 text-sm text-left text-gray-600">
        Date : {date}
      </span>
      <p className=" mt-10 font-semibold">Ratings : {rating}</p>
      <div className="mt-5">
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
