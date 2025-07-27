import React from 'react';

const steps = ['Personal Info', 'Vehicle Info', 'Coverage', 'Review'];

export const ProgressBar = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="flex justify-between items-center w-full max-w-4xl mx-auto mb-8 px-4">
      {steps.map((step, index) => (
        <div key={index} className="flex-1 text-center">
          <div
            className={`w-8 h-8 mx-auto rounded-full text-white text-sm flex items-center justify-center
            ${index <= currentStep ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            {index + 1}
          </div>
          <p className="text-xs mt-2">{step}</p>
        </div>
      ))}
    </div>
  );
};
