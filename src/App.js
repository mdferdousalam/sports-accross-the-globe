// import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import InformationTab from "./components/InformationTab/InformationTab";
import Question1 from "./components/Question1/Question1";
import Question2 from "./components/Question2/Question2";
import Question3 from "./components/Question3/Question3";
import Sports from "./components/Sports/Sports";

function App() {
  const [sports, setSports] = useState([]);
  const [duration, setDuration] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setSports(data));
  });

  const handelTime = (spotrsTime) => {
    const newPlayTime = [...duration, spotrsTime];
    setDuration(newPlayTime);
    addedButton(sports.id);
  };

  const addedButton = (id) => {};

  return (
    <div className="grid grid-cols-4 ">
      <div className="col-span-4 lg:col-span-3 bg-sky-300">
        <Header></Header>
        <Sports sports={sports} handelTime={handelTime}></Sports>
      </div>
      <div className="col-span-4 lg:col-span-1 bg-slate-300">
        <InformationTab duration={duration}></InformationTab>
      </div>
      <div className="col-span-4 lg:col-span-3 bg-sky-300">
        <Question1></Question1>
      </div>
      <div className="col-span-4 lg:col-span-3 bg-sky-300">
        <Question2></Question2>
      </div>
      <div className="col-span-4 lg:col-span-3 bg-sky-300">
        <Question3></Question3>
      </div>
    </div>
  );
}

export default App;
