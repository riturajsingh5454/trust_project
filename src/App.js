import React, { useState } from "react";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Hero2 from "./Components/Hero2";
import InstituteSection from "./Components/InstituteSection";
import BlogSection from "./Components/BlogSection";
import VideoSection from "./Components/VideoSection";
import GoshalaSection from "./Components/GoshalaSection";
import InfoSection from "./Components/InfoSection";
import AshramSection from "./Components/AshramSection";
import Footer from "./Components/Footer";
import EventPopup from "./Components/Popup";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Header />
      <Hero />
      <Hero2 />
      <InstituteSection />
      <BlogSection />
      <VideoSection />
      <GoshalaSection />
      <InfoSection />
      <AshramSection />
      <Footer />
      <div className="bg-blue-500">
        <EventPopup />
      </div>
    </>
  );
}

export default App;
