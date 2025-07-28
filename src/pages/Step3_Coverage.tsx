import React from 'react';
import { Button } from '@/components/ui/button';

type Props = {
  next: () => void;
  back: () => void;
  update: (data: any) => void;
  data: any;
};

const Step3_Coverage = ({ next, back, update, data }: Props) => {
  const selectCoverage = (coverage: string) => {
    update({ coverage });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Select Coverage</h2>

      <div className="grid grid-cols-1 gap-4">
        <div
          className={`border p-4 rounded-lg cursor-pointer ${
            data.coverage === 'Comprehensive'
              ? 'border-green-600 bg-green-50'
              : 'border-gray-300'
          }`}
          onClick={() => selectCoverage('Comprehensive')}
        >
          <h3 className="text-lg font-bold">Comprehensive Coverage</h3>
          <p className="text-sm text-gray-600">+500 ZMW</p>
          <p className="text-sm text-gray-500">
            Full protection including theft, fire, and damages.
          </p>
        </div>

        <div
          className={`border p-4 rounded-lg cursor-pointer ${
            data.coverage === 'Third Party'
              ? 'border-green-600 bg-green-50'
              : 'border-gray-300'
          }`}
          onClick={() => selectCoverage('Third Party')}
        >
          <h3 className="text-lg font-bold">Third Party Coverage</h3>
          <p className="text-sm text-gray-600">+200 ZMW</p>
          <p className="text-sm text-gray-500">
            Basic protection for damages to others only.
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <Button onClick={back} variant="outline">
          Back
        </Button>

        <Button
          onClick={next}
          disabled={!data.coverage}
          className="bg-green-600 text-white"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step3_Coverage;
