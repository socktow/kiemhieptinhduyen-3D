import React from "react";
import Hero from "../Layouts/MainLayout/Homepage/Hero";
import Download from "../Layouts/MainLayout/Homepage/Download";
import NewFeed from "../Layouts/MainLayout/Homepage/NewFeed";
import InfoGuide from "../Layouts/MainLayout/Homepage/InfoGuide";
// Nhập tệp CSS vào đây
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-container max-w-full w-full">
      <Hero>
        <div>
          <Download />
          <NewFeed />
          <InfoGuide />
        </div>
      </Hero>
    </div>
  );
};

export default Landing;
