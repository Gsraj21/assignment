import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Import CSS file

function SetCountdownPage() {
  const [dateTime, setDateTime] = useState('');
  const navigate = useNavigate();

  const handleStartCountdown = () => {
    const targetDate = new Date(dateTime).getTime();
    localStorage.setItem('targetDate', targetDate);
    navigate('/countdown');
  };

  return (
    <div className="container">
      <h2>Select Date and Time for the countdown timer</h2>
      <input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
      <button onClick={handleStartCountdown}>Start Countdown</button>
    </div>
  );
}

export default SetCountdownPage;
