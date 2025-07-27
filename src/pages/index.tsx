import React, { useState } from 'react';
import Step1_PersonalInfo from './Step1_PersonalInfo';
import Step2_VehicleInfo from './Step2_VehicleInfo';
import Step3_Coverage from './Step3_Coverage';
import Step4_Review from './Step4_Review';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const steps = [
  { id: 1, label: 'Personal Info' },
  { id: 2, label: 'Vehicle Info' },
  { id: 3, label: 'Coverage' },
  { id: 4, label: 'Review' },
];

const QuoteWizard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    vehicleUse: '',
    coverage: '',
  });

  const next = () => setStep((prev) => Math.min(prev + 1, steps.length));
  const back = () => setStep((prev) => Math.max(prev - 1, 1));

  const updateForm = (newData: any) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const calculatePrice = () => {
    let base = 500;
    const year = parseInt(formData.vehicleYear);
    if (!isNaN(year)) {
      const age = new Date().getFullYear() - year;
      base += age * 20;
    }

    if (formData.vehicleUse === 'Commercial') base += 300;
    if (formData.vehicleUse === 'Personal') base += 100;

    if (formData.coverage === 'Comprehensive') base += 500;
    if (formData.coverage === 'Third Party') base += 200;

    return base;
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1_PersonalInfo next={next} update={updateForm} data={formData} />;
      case 2:
        return <Step2_VehicleInfo next={next} back={back} update={updateForm} data={formData} />;
      case 3:
        return <Step3_Coverage next={next} back={back} update={updateForm} data={formData} />;
      case 4:
        return <Step4_Review back={back} data={formData} price={calculatePrice()} />;
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Card className="p-6 rounded-2xl shadow-lg bg-white flex flex-col">
          {/* APP NAME at the very top */}
          <h1 className="text-center text-3xl font-extrabold mb-4">
            <span className="text-green-600">Motor</span>
            <span className="text-red-600"> Insurance</span>{' '}
            <span className="text-green-700">Quoter</span>
          </h1>

          {/* Logo below app name */}
          <div className="flex justify-center mb-6">
            <img
              src="/logo.png"  //
              alt="Motor Insurance Quoter Logo"
              className="h-16 w-auto"
            />
          </div>

          {/* Step numbers navigation */}
          <nav aria-label="Progress" className="mb-6 flex justify-between">
            {steps.map(({ id, label }) => (
              <div key={id} className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center
                    ${
                      id === step
                        ? 'bg-green-600 text-white'
                        : id < step
                        ? 'bg-green-200 text-green-700'
                        : 'bg-gray-200 text-gray-400'
                    } font-semibold`}
                >
                  {id}
                </div>
                <span
                  className={`mt-2 text-sm font-medium 
                    ${
                      id === step
                        ? 'text-green-700'
                        : id < step
                        ? 'text-green-600'
                        : 'text-gray-400'
                    }`}
                >
                  {label}
                </span>
              </div>
            ))}
          </nav>

          {/* Step content */}
          <div className="flex-grow">{renderStep()}</div>

          {/* Progress bar at bottom */}
          <div className="mt-8">
            <Progress
              value={(step / steps.length) * 100}
              className="h-2 rounded-full"
              style={{ backgroundColor: '#f0fdf4' }}
            />
          </div>
        </Card>
      </div>
    </main>
  );
};

export default QuoteWizard;
