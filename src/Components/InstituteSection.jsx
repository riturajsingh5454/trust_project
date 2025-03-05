import React from "react";

const InstituteSection = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
        <div className="flex flex-col items-center">
          <img
            src="/images/school.png"
            alt="Sanskrit School"
            className="h-32 mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">
            स्वामी अभ्यानंद संस्कृत विद्यालय
          </h2>
          <p className="text-gray-600 mt-2 max-w-lg">
            स्वामी अभ्यानंद वेद पाठशाला के अंतर्गत 3 आचार्य एवं 21 विद्यार्थी
            वर्तमान में शुक्लयजुर्वेद, व्याकरण व आधुनिक शिक्षा भी प्राप्त करते
            हैं। साथ ही साथ स्वामी जी के प्रवचनों को पुस्तक रूप में प्रकाशित
            किया जाता है, जिसमें लगभग 30 पुस्तकें प्रकाशित हो चुकी हैं।
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src="/images/goshala.png" alt="Goshala" className="h-32 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">
            स्वामी अभ्यानंद गोशाला समिति
          </h2>
          <p className="text-gray-600 mt-2 max-w-lg">
            गौ रक्षा मानव समाज के लिए आवश्यक है। भगवान श्रीकृष्ण स्वयं गोपाल और
            गोविंदा के रूप में जाने जाते हैं और वृंदावन में गाय चराते थे। केवल
            गायों का पालन ही प्रकृतिक और समृद्ध जीवन की ओर ले जा सकता है। अतः
            हमारी गोशाला में गौसंरक्षण एवं संवर्धन किया जाता है।
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src="/images/library.png" alt="Library" className="h-32 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">
            स्वामी अभ्यानंद पुस्तकालय
          </h2>
          <p className="text-gray-600 mt-2 max-w-lg">
            स्वामी अभ्यानंद पुस्तकालय अंतर्गत, हमारे सद्गुरुदेव भगवान के
            प्रवचनों का संकलन किया जाता है। अभी तक स्वामी जी के प्रवचनों को
            पुस्तक रूप में प्रकाशित करने की प्रक्रिया में 30 पुस्तकें प्रकाशित
            की जा चुकी हैं।
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/images/satsang.png"
            alt="Satsang"
            className="h-32 mb-4 rounded-lg shadow-lg"
          />
          <h2 className="text-2xl font-bold text-gray-800">दैनिक सत्संग</h2>
          <p className="text-gray-600 mt-2 max-w-lg">
            इसका कार्य शुद्ध भक्तजनों की उन्नति के लिए एक शुद्ध और आध्यात्मिक
            वातावरण उत्पन्न करना है। यहाँ प्रातः एवं सायं भगवान संकीर्तन एवं कथा
            वाचन किया जाता है।
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstituteSection;
