import { useState } from 'react';
import { AiFillCar, AiOutlineFilePdf } from 'react-icons/ai';
import { FaMoneyBillWave } from 'react-icons/fa';
import jsPDF from 'jspdf';

const QuotationForm = () => {
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleValue, setVehicleValue] = useState('');
  const [coverType, setCoverType] = useState('');
  const [quote, setQuote] = useState<number | null>(null);

  const calculateQuote = () => {
    let baseRate = 0;
    if (coverType === 'comprehensive') baseRate = 0.05;
    else if (coverType === 'third-party') baseRate = 0.02;

    const value = parseFloat(vehicleValue);
    setQuote(!isNaN(value) ? value * baseRate : null);
  };

  const exportPDF = () => {
    if (quote === null) return;
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Motor Insurance Quotation', 20, 20);
    doc.setFontSize(12);
    doc.text(`Vehicle Type: ${vehicleType}`, 20, 40);
    doc.text(`Vehicle Value: ZMW ${vehicleValue}`, 20, 50);
    doc.text(`Cover Type: ${coverType}`, 20, 60);
    doc.text(`Estimated Quote: ZMW ${quote.toFixed(2)}`, 20, 70);
    doc.save('insurance-quote.pdf');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex items-center justify-center">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-gray-200 p-8 transition-all">
        <h1 className="text-3xl font-semibold text-gray-800 flex items-center gap-3 mb-6">
          <AiFillCar className="text-blue-600 text-4xl" />
          Motor Insurance Quote
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Vehicle Type</label>
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select vehicle type</option>
              <option value="car">Car</option>
              <option value="truck">Truck</option>
              <option value="motorbike">Motorbike</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Vehicle Value (ZMW)</label>
            <input
              type="number"
              value={vehicleValue}
              onChange={(e) => setVehicleValue(e.target.value)}
              placeholder="Enter market value"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Cover Type</label>
            <select
              value={coverType}
              onChange={(e) => setCoverType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select cover type</option>
              <option value="comprehensive">Comprehensive</option>
              <option value="third-party">Third-Party</option>
            </select>
          </div>

          <button
            onClick={calculateQuote}
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium text-base flex items-center justify-center gap-2 transition-all"
          >
            <FaMoneyBillWave className="text-lg" />
            Get Quote
          </button>

          {quote !== null && (
            <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-xl">
              <p className="text-lg font-semibold text-blue-700">
                Estimated Quote: ZMW {quote.toFixed(2)}
              </p>
              <button
                onClick={exportPDF}
                className="mt-3 flex items-center gap-2 text-sm text-blue-600 hover:underline"
              >
                <AiOutlineFilePdf />
                Download PDF
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuotationForm;
