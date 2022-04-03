import React from "react";
import useReviews from "../../Hooks/useReviews";
import SingleReview from "../SingleReview/SingleReview";

const Review = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div className="container mx-auto mb-40">
      <h1 className="text-4xl  my-16 font-semibold">Customer Review</h1>

      <div className="reviews-container grid md:grid-cols-3 my-12 gap-10">
        {reviews.map((review) => (
          <SingleReview key={review.id} reviews={review}></SingleReview>
        ))}
      </div>
    </div>
  );
};

export default Review;
