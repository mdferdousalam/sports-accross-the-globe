import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import React from "react";
const Header = () => {
  return (
    <div className="   md:mt-7 lg:my-9  pl-5 text-white bg-orange-600 md:bg-cyan-400 lg:bg-blue-500">
      <h1 className="sm:text-4xl font-bold sm:py-7 md:py-9 ">
        <FontAwesomeIcon icon={faBasketball}></FontAwesomeIcon> Sports Across
        The Globe
      </h1>
      <p className="sm:text-3xl sm:py-7  font-medium">Choose your sports</p>
    </div>
  );
};

export default Header;
