import React from "react";
import Hero from "../Layouts/MainLayout/Homepage/Hero";
import Download from "../Layouts/MainLayout/Homepage/Download";
import NewFeed from "../Layouts/MainLayout/Homepage/NewFeed";
import InfoGuide from "../Layouts/MainLayout/Homepage/InfoGuide";
import DoGiam from "../Layouts/MainLayout/Homepage/DoGiam";
import Footer from "../Layouts/MainLayout/Homepage/Footer";
import Monphai from "../Layouts/MainLayout/Homepage/Monphai";
import Slidebar from "../Layouts/MainLayout/Homepage/Slidebar";

const Landing = () => {
  return (
    <Hero>
      <div className="fixed top-0 right-0 h-screen z-50 w-64">
        <Slidebar />
      </div>
      <div>
        <Download />
        <NewFeed />
        <InfoGuide />
        <DoGiam />
        <Monphai />
        <Footer />
      </div>
    </Hero>
  );
};

export default Landing;
