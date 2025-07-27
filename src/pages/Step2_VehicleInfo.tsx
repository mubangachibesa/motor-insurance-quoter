import React, { useState } from 'react';

type Props = {
  next: () => void;
  back: () => void;
  update: (data: Partial<any>) => void;
};

const Step2_VehicleInfo = ({ next, back, update }: Props) => {
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [vehicleUse, setVehicleUse] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    update({ vehicleMake, vehicleModel, vehicleYear, vehicleUse });
    next();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Vehicle Make"
        value={vehicleMake}
        onChange={(e) => setVehicleMake(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-xl"
      />
      <input
        type="text"
        placeholder="Vehicle Model"
        value={vehicleModel}
        onChange={(e) => setVehicleModel(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-xl"
      />
      <input
        type="number"
        placeholder="Vehicle Year"
        value={vehicleYear}
        onChange={(e) => setVehicleYear(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-xl"
      />
      <select
        value={vehicleUse}
        onChange={(e) => setVehicleUse(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-xl"
      >
        <option value="">Select Vehicle Use</option>
        <option value="Personal">Personal</option>
        <option value="Commercial">Commercial</option>
      </select>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={back}
          className="bg-gray-300 px-6 py-2 rounded-xl hover:bg-gray-400"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Step2_VehicleInfo;
