import React from "react";

const Sportcart = (props) => {
  const { img, name, time, body, Age } = props.sport;
  const { handelTime } = props;
  return (
    <div className="border-0 rounded ">
      <img className="w-full h-1/3 md:h-2/6  mb-2 p-5 " src={img} alt="" />
      <div className=" ">
        <p className="font-medium text-3xl pl-5 ">{name}</p>
        <p className="text-xl mt-3  text-justify px-5">{body}</p>
        <p className="text-xl mt-4 pl-5">For Age: {Age}</p>
        <p className="text-xl my-2 pl-5">Time required: {time} minutes</p>
      </div>
      <div className="flex justify-center py-7">
        <button
          onClick={() => {
            handelTime(time);
          }}
          className="p-4 rounded border text-white text-xl font-medium  w-4/5   bg-teal-500 md:bg-blue-900 lg:bg-violet-600"
        >
          Add to list
        </button>
      </div>
    </div>
  );
};

export default Sportcart;
