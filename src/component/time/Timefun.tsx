import  { useState } from "react";
import "./Time.css";
const Timefun = () => {
  let [newtime, setnewtime] = useState();

  const updatetime = () => {
    let timee: any = new Date().toLocaleTimeString();

    setnewtime(timee);
  };

  setInterval(updatetime,1)

  return (
    <>
      <h2 className="time"> current time is {newtime}</h2>
      <button className="time" type="button" onClick={updatetime}>
        okkkkkkkkkkk
      </button>
    </>
  );
};

export default Timefun;
