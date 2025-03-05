import React from "react";

const VideoSection = () => {
  return (
    <section className="bg-gray-50 py-6 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <img
            src="/images/logo.png"
            alt="Video Icon"
            className="h-12 mx-auto mb-4"
          />
          <h2 className="text-3xl font-bold text-gray-800">वीडियो देखें</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex justify-center">
            <iframe
              className="rounded-lg shadow-lg w-full max-w-lg h-64 md:h-80"
              src="https://www.youtube.com/embed/AjP8FtHExlA?si=hX_KWrMkrif85iyd"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex flex-col justify-start">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              श्रीमद्भगवद गीता अध्याय-9 | भाग-7
            </h3>
            <p className="text-gray-700 text-lg">
              श्रीमद्भगवद्गीता अध्याय - 9 (राजविद्याराजगुह्ययोग), भाग - 7, अनंत
              श्री विभूषित महामंडलेश्वर स्वामी अभयानंद सरस्वती जी महाराज (श्री
              पंचायती अखाड़ा महानिर्वाणी) "अध्यक्ष" अखिल भारतीय संत समिति।
            </p>
            <p className="text-gray-700 text-lg mt-2">
              उत्तर प्रदेश, स्वामी अभयानंद वेद पाठशाला, पपनामऊ, अनोरा कला,
              फैज़ाबाद रोड, (लखनऊ)
            </p>
          </div>
        </div>

        <div className=" flex item-center justify-center mt-6">
          <button className="h-16 px-6 py-2 border border-red-500 text-red-500 font-bold rounded-md hover:bg-red-500 hover:text-white transition">
            सभी वीडियो देखें
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
