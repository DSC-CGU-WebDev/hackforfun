import React from "react";
import Speaker from "./speaker";
import "../css/speakerSection.css";

const GuestSpeaker = () => {
  return (
    <div className="speakersArea" id="speakers">
      <div className="speakersArea_header">
        <h1 className="heading">Guest Speaker</h1>
      </div>
      <div className="speakersArea_body">
        <div className="speakersArea_body_right">
          <Speaker
            name="Dheeraj Madhukar"
            designation="TechnoLegends (CEO)"
            org="Professional security researcher, trainer and bug bounty hunter"
            photourl="https://avatars.githubusercontent.com/u/9442273?s=460&u=7d44bd6ffa4c2f2529031df4000b2712a65d1b54&v=4"
            linkedin="https://www.linkedin.com/mwlite/in/dheerajtechnolegends"
            facebook="https://m.facebook.com/profile.php?id=100002123554534"
            twitter="https://mobile.twitter.com/Dheerajmadhukar"
          />
        </div>
      </div>
    </div>
  );
};

export default GuestSpeaker;
