import React, { useState } from 'react';
import { ProgressBar } from './components/ProgressBar';
import Step1 from './pages/Step1_PersonalInfo';
import Step2 from './pages/Step2_VehicleInfo';
import Step3 from './pages/Step3_Coverage';
import Step4 from './pages/Step4_Review';

function App() {
  const [step, setStep] = useState(0);

  const next = () => setStep((prev) => Math.min(prev + 1, 3));
  const back = () => setStep((prev) => Math.max(prev - 1, 0));

  const renderStep = () => {
    switch (step) {
      case 0: return <Step1 next={next} />;
      case 1: return <Step2 next={next} back={back} />;
      case 2: return <Step3 next={next} back={back} />;
      case 3: return <Step4 back={back} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Get Your Motor Insurance Quote</h1>
      <ProgressBar currentStep={step} />
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        {renderStep()}
      </div>
    </div>
  );
}

export default App;

