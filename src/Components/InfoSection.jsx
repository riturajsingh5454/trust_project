import React from "react";

const sections = [
  {
    title: "ABOUT",
    description: "About Swami Abhyanand Ji",
    bgColor: "bg-orange-500",
    image: "./images/abouticon.png",
  },
  {
    title: "EVENTS",
    description: "Swami Abhyanand Ji Events",
    bgColor: "bg-red-500",
    image: "./images/eventicon.png",
  },
  {
    title: "BLOG",
    description: "Swami Abhyanand Ji Blog",
    bgColor: "bg-orange-500",
    image: "./images/blogicon.png",
  },
];

const InfoSection = () => {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`${section.bgColor} text-white text-center py-10 px-6 rounded-lg shadow-lg flex flex-col items-center`}
          >
            <img
              src={section.image}
              alt={section.title}
              className="w-16 h-16 mb-4 object-contain"
            />
            <h2 className="text-xl font-bold">{section.title}</h2>
            <p className="mt-1">{section.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
