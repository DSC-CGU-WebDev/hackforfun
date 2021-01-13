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

  const timerComponents = [];
  var time =
    timeLeft.days +
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

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}
      </span>
    );
  });

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
        <a href="/" className="btn btn-theme">
          Apply Now
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
