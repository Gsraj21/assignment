import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Import CSS file

function CountdownPage() {
  const [timeRemaining, setTimeRemaining] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedTargetDate = localStorage.getItem('targetDate');
    if (storedTargetDate) {
      const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const targetDate = new Date(parseInt(storedTargetDate));
        const timeRemaining = targetDate - now;

        if (timeRemaining > 0) {
          const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
          setTimeRemaining({ days, hours, minutes, seconds });
        } else {
          clearInterval(countdownInterval);
          localStorage.removeItem('targetDate');
          navigate('/');
        }
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [navigate]);

  return (
    <div className="container">
      <h2>Countdown Timer</h2>
      <div className="countdown">
        <div className="time">
          <span>{timeRemaining.days}</span>
          <label>Days</label>
        </div>
        <div className="time">
          <span>{timeRemaining.hours}</span>
          <label>Hours</label>
        </div>
        <div className="time">
          <span>{timeRemaining.minutes}</span>
          <label>Minutes</label>
        </div>
        <div className="time">
          <span>{timeRemaining.seconds}</span>
          <label>Seconds</label>
        </div>
      </div>
      <button onClick={() => navigate('/')} className="cancelButton">Cancel Countdown</button>
    </div>
  );
}

export default CountdownPage;
