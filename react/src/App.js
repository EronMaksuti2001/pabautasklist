import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes , Route, Link, useParams } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import OptionPage from './components/OptionPage';


const data = [
  {id: '1', name: "Anti Wrinkle Treatment"},
  {id: '2', name: "Dermal Fillers"},
  {id: '3', name: "Secret RF"},
  {id: '4', name: "HarmonyCA"},
  {id: '5', name: "Profhilo"},
  {id: '6', name: "Facials"},
  {id: '7', name: "Sclerotherapy"},
  {id: '8', name: "LED"},
  {id: '9', name: "Fat Dissolve"},
  {id: '10', name: "Growth Factors"},
  {id: '11', name: "Special Package for Time clinic"},
  {id: '11', name: "Consultation"},
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
