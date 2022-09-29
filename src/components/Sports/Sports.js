import React, { useEffect, useState } from "react";
import Sportcart from "../Sportcart/Sportcart";

const Sports = () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setSports(data));
  });

  return (
    <div className="  sm:flex-row lg:flex">
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sports.map((sport) => (
          <Sportcart key={sport.id} sport={sport}></Sportcart>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Sports;
