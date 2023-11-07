import React, { useState, useEffect } from 'react';

const Timer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const initialTimeLeft = calculateTimeLeft();
      setTimeLeft(initialTimeLeft);

      const countdownTimer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => {
        clearInterval(countdownTimer);
      };
    }, 2200);

    return () => {
      clearTimeout(timer);
    };
  }, [targetDate]);

  const formatTimeUnit = (unit) => String(unit).padStart(2, '0');

  return (
    <div>
      {timeLeft && (
        <div className='timerHome'>
          {timeLeft.days > 0 && (
            <div>{formatTimeUnit(timeLeft.days)} Days</div>
          )}
          <div>
            {formatTimeUnit(timeLeft.hours)} : {formatTimeUnit(timeLeft.minutes)} : {formatTimeUnit(timeLeft.seconds)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;
