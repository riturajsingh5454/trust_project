import React from "react";

const ashrams = [
  {
    name: "LUCKNOW ASHRAM",
    phone: "+91-9966578080",
    email: "info@swamiabhyanand.com",
  },
  {
    name: "MEERUT ASHRAM",
    phone: "+91-9966578080",
    email: "info@swamiabhyanand.com",
  },
  {
    name: "SITAPUR ASHRAM",
    phone: "+91-9966578080",
    email: "info@swamiabhyanand.com",
  },
  {
    name: "HARIDWAR ASHRAM",
    phone: "+91-9966578080",
    email: "info@swamiabhyanand.com",
  },
];

const AshramSection = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/3 bg-yellow-200 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <img
              src="./images/logo.png"
              alt="Logo"
              className="w-24 mb-4 rounded-full shadow-lg"
            />
            <h2 className="text-lg font-bold leading-tight text-gray-800">
              आचार्य महामंडलेश्वर <br /> स्वामी श्री अभ्यानंद सरस्वती जी
            </h2>
            <p className="text-sm mt-3 text-gray-700 leading-relaxed">
              ॥ श्री गुरवे नमः ॥ परम पूज्य महामंडलेश्वर स्वामी श्री अभ्यानंद
              सरस्वती जी महाराज का आशीर्वाद प्राप्त करें।
            </p>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pl-4">
            {ashrams.map((ashram, index) => (
              <div
                key={index}
                className="bg-yellow-200 p-6 rounded-lg shadow-xl border border-yellow-300 text-center transform "
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) -5px 0px 10px, rgba(0, 0, 0, 0.2) 5px 0px 10px",
                }}
              >
                <h3 className="text-md font-semibold text-gray-800 mb-2">
                  {ashram.name}
                </h3>
                <p className="text-sm text-gray-700 mb-1"> {ashram.phone}</p>
                <p className="text-sm text-gray-700 break-words overflow-hidden">
                  {ashram.email}
                </p>
                <button className="bg-red-500 text-white px-5 py-2 mt-3 rounded-lg hover:bg-red-600 transition duration-300 shadow-md">
                  CLICK HERE
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AshramSection;
