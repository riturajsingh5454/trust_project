import React from "react";

const Hero2 = () => {
  return (
    <section className="bg-gray-100 text-center py-2 px-3">
      <div className="flex justify-center">
        <img src="./images/logo.png" alt="Guru Logo" className="h-18 mb-4" />
      </div>

      <h1 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4">
        परम पूज्य आचार्य महामंडलेश्वर स्वामी अभ्यानन्द सरस्वती जी महाराज
      </h1>

      <p className="text-gray-800 max-w-3xl mx-auto text-xl leading-relaxed">
        ‘आचार्य मां विज्ञानीयात’ गुरु को मेरा रूप ही जानो अर्थात गुरु और भगवान
        में कोई भेद नहीं है। जो गुरु-वचनों में दृढ़ विश्वास रखता है, गुरुदेव
        जिसपर प्रसन्न रहते हैं, उसे कोई विधा नहीं घेरती। गुरु माता-पिता-पति सब
        हैं, उनके बिना संसार में कहीं गति नहीं! गुरु सर्वशक्तिसम्पन्न और
        बाँछाकल्पतरु हैं।
      </p>

      <div className="mt-6">
        <button className="h-16 px-6 py-2 border border-red-500 text-red-500 font-bold rounded-md hover:bg-red-500 hover:text-white transition">
          Know More..
        </button>
      </div>

      <div className="flex justify-center mt-8">
        <img src="/images/logo.png" alt="Guru Logo" className="h-18" />
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mt-6">हमारे बारे में</h2>
    </section>
  );
};

export default Hero2;
