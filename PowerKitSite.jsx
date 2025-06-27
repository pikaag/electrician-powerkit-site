
import { useState } from "react";

export default function PowerKitSite() {
  const [email, setEmail] = useState("");

  const handleBuy = () => {
    window.location.href = "https://drive.google.com/uc?export=download&id=1Xr3qoqgljoiamv7cJcg2_MLo3GbIyMkL";
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-3xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-center">Electrician PowerKit</h1>
        <p className="text-center text-lg text-gray-300">
          All-in-one digital toolbox for electricians in Germany, Austria, and Switzerland.
        </p>

        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Included in the Pack:</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Invoice & Quote Templates (EN + DE)</li>
            <li>Wire Size Calculator (Excel)</li>
            <li>Residential Wiring Diagram</li>
            <li>CE Compliance Checklist</li>
            <li>Pricing Guide for Germany</li>
            <li>Completion Certificate Template</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Get the PowerKit for just €39</h2>
          <button
            onClick={handleBuy}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full font-semibold text-lg"
          >
            Download Now
          </button>
        </div>

        <p className="text-center text-sm text-gray-500">
          Instant download. No subscriptions. No bullshit.
        </p>
      </div>
    </div>
  );
}
