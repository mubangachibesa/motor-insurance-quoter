import React from 'react';

type Props = {
  back: () => void;
  data: any;
  price: number;
};

const Step4_Review = ({ back, data, price }: Props) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Review Your Quote</h2>
      <div className="bg-white shadow rounded-2xl p-6 space-y-4">
        <p><strong>Driver Name:</strong> {data.fullName}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>Vehicle Make:</strong> {data.vehicleMake}</p>
        <p><strong>Vehicle Model:</strong> {data.vehicleModel}</p>
        <p><strong>Vehicle Year:</strong> {data.vehicleYear}</p>
        <p><strong>Vehicle Use:</strong> {data.vehicleUse}</p>
        <p><strong>Coverage:</strong> {data.coverage}</p>
        <p><strong>Estimated Price:</strong> ZMW {price}</p>
      </div>
      <button
        onClick={back}
        className="bg-gray-300 px-6 py-2 rounded-xl hover:bg-gray-400"
      >
        Back
      </button>
    </div>
  );
};

export default Step4_Review;
