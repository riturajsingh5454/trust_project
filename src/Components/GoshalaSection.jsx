import React from "react";

const GoshalaSection = () => {
  const sections = [
    {
      title: "स्वामी अभयानंद गौशाला समिति",
      description:
        "गौ रक्षा मानव समाज के लिए आवश्यक है। यहाँ तक कि स्वयं भगवान कृष्ण भी कहते हैं कि गायेँ उन्हें विशेष रूप से प्रिय हैं। वे गोपाल और गोविंद के रूप में जाने जाते हैं।",
      image: "/images/goshala2.jpg",
    },
    {
      title: "स्वामी अभयानंद संस्कृत विद्यालय",
      description:
        "स्वामी अभयानंद वेद पाठशाला के अंतर्गत संस्कृत विद्यालय संचालित है, जहाँ विद्यार्थी वैदिक शिक्षा प्राप्त कर रहे हैं।",
      image: "/images/sanskrit3.jpg",
    },
  ];

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {sections.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-2xl">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-lg w-full h-64 object-cover"
            />
            <h2 className="text-2xl font-bold mt-4 text-gray-800">
              {item.title}
            </h2>
            <p className="text-gray-700 mt-2">{item.description}</p>

            <div className="flex justify-center items-center mt-4">
              <button className=" flex items-center h-16 px-6 py-2 border border-red-500 text-red-500 font-bold rounded-md hover:bg-red-500 hover:text-white transition">
                और पढ़ें
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GoshalaSection;
