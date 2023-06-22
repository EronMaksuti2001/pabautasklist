import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes , Route, Link, useParams } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import OptionPage from './components/OptionPage';


const data = [
  {id: '1', name: "Post 1"},
  {id: '2', name: "Post 2"},
  {id: '3', name: "Post 3"},
  {id: '4', name: "Post 4"},
  {id: '5', name: "Post 5"},
];

function App() {
  const [step, setStep] = useState(1);
  const [totalSteps, setTotalSteps] = useState(2); 

  return (
    <Router>
      <Header step={step } totalSteps={totalSteps} />
      <Routes>
        <Route path="/" element={<LandingPage data={data} setStep={setStep}/>} />
        <Route path="/:postId" element={<OptionPage data={data} setStep={setStep}/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
