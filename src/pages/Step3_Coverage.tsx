import React from 'react';

type Props = {
  next: () => void;
  back: () => void;
  update: (data: { coverage: string }) => void;
  coverage?: string;
};

const coverages = [
  {
    key: 'Comprehensive',
    label: 'Comprehensive Coverage',
    description: 'Full protection including theft, fire, and damages.',
    priceImpact: '+500 ZMW',
  },
  {
    key: 'Third Party',
    label: 'Third Party Coverage',
    description: 'Basic protection for damages to others only.',
    priceImpact: '+200 ZMW',
  },
];

export default function Step3_Coverage({ next, back, update, coverage = '' }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Select Coverage</h2>
      <div className="flex flex-col sm:flex-row gap-6">
        {coverages.map(({ key, label, description, priceImpact }) => {
          const selected = coverage === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => update({ coverage: key })}
              className={`flex-1 border rounded-2xl p-6 text-left cursor-pointer transition
                ${
                  selected
                    ? 'border-blue-600 bg-blue-50 shadow-lg'
                    : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                }
              `}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className={`text-lg font-semibold ${selected ? 'text-blue-600' : 'text-gray-800'}`}>
                  {label}
                </h3>
                <span className={`text-sm font-medium ${selected ? 'text-blue-600' : 'text-gray-600'}`}>
                  {priceImpact}
                </span>
              </div>
              <p className="text-gray-600">{description}</p>
            </button>
          );
        })}
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={back}
          className="px-6 py-2 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
        >
          Back
        </button>
        <button
          onClick={next}
          disabled={!coverage}
          className={`px-6 py-2 rounded-xl text-white transition
            ${coverage ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-300 cursor-not-allowed'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

