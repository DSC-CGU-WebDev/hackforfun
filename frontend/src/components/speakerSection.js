import React from "react";
import Speaker from "./speaker";
import "../css/speakerSection.css";

const SpeakerSection = () => {
  return (
    <div className="speakersArea" id="speakers">
      <div className="speakersArea_header">
        <h1 className="heading">Our Speakers</h1>
      </div>
      <div className="speakersArea_body">
        <div className="speakersArea_body_left">
          <Speaker
            name="Abhishake Banerjee"
            designation="Cyber Security Lead"
            org="DSC CVRGU"
            photourl="https://res.cloudinary.com/simi/image/upload/v1610299517/WhatsApp_Image_2021-01-08_at_12.04.58_AM_sdnluu.jpg"
            linkedin="https://www.linkedin.com/in/abhishake-banerjee-33a7301b1/"
          />
        </div>
        <div className="speakersArea_body_right">
          <Speaker
            name="Naba Ratan Patra"
            designation="Associate Cyber Security Lead"
            org="DSC CVRGU"
            photourl="https://res.cloudinary.com/simi/image/upload/v1610299517/0_to6cgc.jpg"
            linkedin="https://www.linkedin.com/in/naba-ratan-b904991a7/"
          />
        </div>
      </div>
    </div>
  );
};

export default SpeakerSection;
