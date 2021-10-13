import React, { useEffect, useState } from "react";
import CounterDetails from "./CounterDetails";
import "./Counter.css"

function Counter() {

  const calculateTimeLeft = () => {

    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-12-1`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    /* if (!timeLeft[interval]) {
      return;
    } */

    timerComponents.push(
      <span>
        {timeLeft[interval]}
      </span>
    );
  });

  return (
    <div className="counterContainer">
      <div className="counterContainer__title">FALTAN</div>
      <div className="counterContainer__counter">
        { timerComponents.length ? <CounterDetails timeLeft={timeLeft} /> : <span>Time's up!</span>}
      </div>
    </div>
  );
}

export default Counter;
