import React from 'react';
import { Routes,Route } from 'react-router';
import CountdownPage from './components/CountdownPage';
import SetCountdownPage from './components/SetCountdownPage';

function App() {
  return (
    <Routes>
        <Route path="/" element={<SetCountdownPage/>} />
        <Route path="/countdown" element={<CountdownPage/>} />
    </Routes>
  );
}

export default App;
