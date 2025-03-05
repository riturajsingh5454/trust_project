import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const events = [
  {
    startDate: "2023-05-17",
    endDate: "2023-05-23",
    speaker: "स्वामी अभियानंद सरस्वती जी महाराज",
    location: "गाजियाबाद",
  },
];

const EventPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-1/2 right-5 transform -translate-y-1/2">
      {/* Popup Button */}
      <div
        className="bg-green-500 shadow-lg px-4 py-2 rounded-lg cursor-pointer flex items-center space-x-2 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-bold">LATEST EVENTS</div>
        <div>नवीनतम कार्यक्रम</div>
        <FaChevronDown
          className={`transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="mt-2 bg-white shadow-md rounded-md p-3 w-80">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">प्रारंभ तिथि</th>
                <th className="border border-gray-300 p-2">समाप्ति तिथि</th>
                <th className="border border-gray-300 p-2">वक्ता</th>
                <th className="border border-gray-300 p-2">स्थान</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-2">
                    {event.startDate}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {event.endDate}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {event.speaker}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {event.location}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EventPopup;
