import React from "react";

const BlogSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 text-center">
      <div className="flex flex-col items-center mb-8">
        <img src="/images/logo.png" alt="Blog Logo" className="h-12 mb-2" />
        <h2 className="text-3xl font-bold text-gray-800">
          Latest From Our Blog
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="flex justify-center">
          <img
            src="./images/BS-leftimage.jpeg"
            alt="Blog"
            className="rounded-lg shadow-lg w-full max-w-lg"
          />
        </div>

        <div className="flex flex-col justify-center text-left">
          <ul className="space-y-7">
            <li className="flex items-center">
              <img
                src="/images/goshala.png"
                alt="Goshala"
                className="h-6 w-6 mr-2"
              />
              <span className="text-gray-700 text-lg">गोशाला</span>
            </li>
            <li className="flex items-center">
              <img
                src="/images/school.png"
                alt="Sanskrit School"
                className="h-6 w-6 mr-2"
              />
              <span className="text-gray-700 text-lg">संस्कृत विद्यालय</span>
            </li>
            <li className="flex items-center">
              <img
                src="/images/library.png"
                alt="Library"
                className="h-6 w-6 mr-2"
              />
              <span className="text-gray-700 text-lg">संस्कृत पुस्तकालय</span>
            </li>
            <li className="flex items-center">
              <img
                src="/images/satsang.png"
                alt="Satsang"
                className="h-6 w-6 mr-2"
              />
              <span className="text-gray-700 text-lg">सत्संग</span>
            </li>
            <li className="flex items-center">
              <img
                src="/images/bhagwatarti.png"
                alt="Arti"
                className="h-6 w-6 mr-2"
              />
              <span className="text-gray-700 text-lg">भगवत आरती</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-9">
        <button className="h-16 px-6 py-2 border border-red-500 text-red-500 font-bold rounded-md hover:bg-red-500 hover:text-white transition">
          Read More
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
