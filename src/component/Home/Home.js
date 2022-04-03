import React from "react";
import "./Home.css";

const Home = () => {
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
          <button className="py-3 px-6 text-white ">More Details</button>
        </div>
        <div>
          <img className="head-image" src="smartHome.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
