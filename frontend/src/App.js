import React, { useEffect, useState } from "react";
import SpeakerSection from "../src/components/speakerSection";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "./images/logo.png";
import "./css/style.css";
import bg from "./images/bg.jpg";
import Faqs from "./components/Faqs.jsx";
import Timeline from "./components/Timeline.jsx";
import Footer from "./components/Footer";
import discord from "../src/images/discord.png";
function App() {
  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,
  };

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`02/03/${year}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  var time =
    timeLeft.days === undefined
      ? "Time's up!"
      : timeLeft.days +
        "D" +
        ":" +
        timeLeft.hours +
        "H" +
        ":" +
        timeLeft.minutes +
        "M" +
        ":" +
        timeLeft.seconds +
        "S";
  console.log(timeLeft);
  return (
    <>
      <Navbar className="px-3 py-2 fixed-top" expand="lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="h4f logo" />
          </a>
          <Navbar.Toggle aria-controls="navbarSupportedContent">
            <FontAwesomeIcon icon={faBars} className="nav-toggler" />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="ml-auto mb-2 mb-lg-0">
              <li className="nav-item px-2">
                <a className="nav-link" href="/#home">
                  HOME
                </a>
              </li>
              <li className="nav-item dropdown  px-2">
                <a className="nav-link" href="/#timeline">
                  TIMELINE
                </a>
              </li>
              <li className="nav-item  px-2">
                <a className="nav-link" href="/#speakers">
                  SPEAKERS
                </a>
              </li>
              <li className="nav-item  px-2">
                <a className="nav-link" href="/#faqs">
                  FAQS
                </a>
              </li>
              <li className="nav-item  px-2">
                <a className="nav-link" href="/#footer">
                  CONTACT US
                </a>
              </li>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      {/*Speaker  Section .... */}
      <div className="banner" style={bgStyle} id="home">
        <h1>Hack For Fun</h1>
        <div id="timer">
          <div className="time">{time}</div>
        </div>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "450px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <a
            href="https://badge.hackforfun.dsccvrgu.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-badge"
          >
            Get Your Cyber Badge
          </a>
          <a
            href="https://dsccvrgu.tech/events"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-theme"
          >
            Register now
          </a>
        </div>
        <a
          href="https://discord.gg/5B9q6jS4Zh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={discord} className="btn-discord" alt="discord" />
        </a>
      </div>
      <hr className="m-0" />
      <Timeline />
      <hr className="m-0" />
      <SpeakerSection />
      <hr className="m-0" />
      <Faqs />
      <hr className="m-0" />
      <Footer />
    </>
  );
}

export default App;
