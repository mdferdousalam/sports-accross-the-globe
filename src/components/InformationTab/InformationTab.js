import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const InformationTab = ({ duration }) => {
  //   console.log(duration);
  const toast = () => {
    return (
      <div class="toast toast-center">
        <div class="alert alert-success">
          <div>
            <span>You Have Done successfully.</span>
          </div>
        </div>
      </div>
    );
  };

  let times = 0;
  for (const duation of duration) {
    times = times + duation;
  }

  const imgUrl =
    "data:image/jpeg;base64,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";

  return (
    <div className="w-full">
      <div className="flex justify-around items-center">
        <img className=" w-2/6  ml-2 my-2 rounded-full" src={imgUrl} alt="" />
        <div className="px-2">
          <h1 className="text-3xl lg:text-xl font-medium">Md Ferdous Alam</h1>
          <p>
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            Jhenaidah, Bangladesh
          </p>
        </div>
      </div>
      <div className="flex justify-around items-center my-3 bg-slate-600 rounded-xl text-white mx-2 py-3">
        <p>
          62 <span>Kg</span>
          <br />
          Waight
        </p>
        <p>
          170 <span>cm</span>
          <br />
          Height
        </p>
        <p>
          32 <span>yrs</span>
          <br />
          Age
        </p>
      </div>
      <div>
        <h1 className="text-3xl lg:text-xl font-semibold ml-2 my-4">
          Add A Break
        </h1>
      </div>
      <div className="flex justify-around items-center my-3 bg-slate-600 rounded-xl text-white mx-2 py-3 text-xl">
        <p className="rounded-full bg-sky-400 p-1 ">10s</p>
        <p className="rounded-full bg-sky-400 p-1 ">20s</p>
        <p className="rounded-full bg-sky-400 p-1 ">30s</p>
        <p className="rounded-full bg-sky-400 p-1 ">40s</p>
        <p className="rounded-full bg-sky-400 p-1 ">50s</p>
      </div>
      <div>
        <h1 className="text-3xl lg:text-xl font-semibold ml-2 mt-12">
          Sports Details
        </h1>
      </div>
      <div>
        <h1 className="text-3xl lg:text-xl font-semibold ml-2 mt-10">
          Play Time: {times} minutes.
        </h1>
      </div>
      <div>
        <h1 className="text-3xl lg:text-xl font-semibold ml-2 my-4">
          Break Time:
        </h1>
      </div>
      <div className="flex justify-center items-center mt-20">
        <button
          onClick={() => {
            toast();
          }}
          className="bg-sky-900 text-white text-3xl rounded-xl py-2 px-7 mb-7"
        >
          Activity Completed
        </button>
      </div>
    </div>
  );
};

export default InformationTab;
