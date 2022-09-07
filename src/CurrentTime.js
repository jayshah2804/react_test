import React, { useState } from "react";

const TimeCmp = () => {
  var today = new Date();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const [currentTime, setCurrentTime] = useState(false);
  setInterval(() => {
    setCurrentTime((prev) => !prev);
  }, 1000);
  return <div>{time}</div>;
};

export default TimeCmp;
