import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Home.css";
import SingleReview from "../SingleReview/SingleReview";
import useReviews from "../../Hooks/useReviews";
import { Link } from "react-router-dom";

const Home = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <div className="container mx-auto">
      <div className="head grid md:grid-cols-2 gap-4">
        <div className="header ml-10 my-5 text-left">
          <h1 className=" text-4xl font-semibold">
            MAKE YOUR HOME<span> SMARTER.</span>
          </h1>
          <h6 className="my-2 font-medium">
            Control your home environment from the palm of your hand with
            TouchIT
          </h6>
          <p className="my-10 w-5/6">
            Every editorial product is independently selected, though we may be
            compensated or receive an affiliate commission if you buy something
            through our links. Ratings and prices are accurate and items are in
            stock as of time of publication.
          </p>
          <button className="py-3 px-6 text-white ">
            More Details
            <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
          </button>
        </div>
        <div>
          <img className="head-image" src="smartHome.png" alt="" />
        </div>
      </div>

      {/* Review part  */}

      <div className="Review-Container mb-32">
        <h1 className="text-4xl font-semibold">Customer Review</h1>

        <div className="reviews-container grid md:grid-cols-3 my-12 gap-10">
          {reviews.map(
            (review) =>
              review.index < 3 && (
                <SingleReview key={review.id} reviews={review}></SingleReview>
              )
          )}
        </div>

        <button className="py-3 px-8 text-white">
          <Link to={"/review"}>See More Reviews</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
