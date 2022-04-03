import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="container-full p-5 mb-5 text-lg">
        <ul className="flex justify-center header-nav">
          <li>
            <CustomLink to={"/home"}>Home</CustomLink>
          </li>
          <li>
            <CustomLink to={"/review"}>Review</CustomLink>
          </li>
          <li>
            <CustomLink to={"/dashBoard"}>Dashboard</CustomLink>
          </li>
          <li>
            <CustomLink to={"/Blogs"}>Blogs</CustomLink>
          </li>
          <li>
            <CustomLink to={"/about"}>About Us</CustomLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
