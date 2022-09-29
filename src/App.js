// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import InformationTab from "./components/InformationTab/InformationTab";
import Question1 from "./components/Question1/Question1";
import Question2 from "./components/Question2/Question2";
import Question3 from "./components/Question3/Question3";
import Sports from "./components/Sports/Sports";

function App() {
  return (
    <div className="grid grid-cols-4 bg-sky-300">
      <div className="col-span-4 lg:col-span-3">
        <Header></Header>
        <Sports></Sports>
      </div>
      <div className="col-span-4 lg:col-span-1 bg-slate-300">
        <InformationTab></InformationTab>
      </div>
      <div className="col-span-4">
        <Question1></Question1>
      </div>
      <div className="col-span-4">
        <Question2></Question2>
      </div>
      <div className="col-span-4">
        <Question3></Question3>
      </div>
    </div>
  );
}

export default App;
