import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/footer.css";
import {
    faLinkedin,
    faFacebook,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer id='footer'>
            <div id="footer-container">
                <div className="content">
                    <h1>Locate Us</h1>
                    <div className="map-responsive z-2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.9519226406846!2d85.73354961425309!3d20.2193187864424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a8fa59ac3c81%3A0xc81fc475faa77274!2sC.%20V.%20Raman%20Global%20University!5e0!3m2!1sen!2sin!4v1599297494906!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            aria-hidden="false" title="map"
                        ></iframe>
                    </div>
                </div>
                <div id="quick-links" className="content z-2">
                    <h1>Quick links</h1>
                    <ul>
                        <li>
                            <a href="https://dsccvrgu.tech/events" target='_blank' rel='noopener noreferrer'>Upcoming events</a>
                        </li>
                        <li>
                            <a href="https://dsccvrgu.tech/team" target='_blank' rel='noopener noreferrer'>Team</a>
                        </li>
                        <li>
                            <a href="https://docs.google.com/document/d/1oYqXeOgFACpqryMnQUtEE4Ez1cBGBq65f7E0bu-iYgA/edit?usp=sharing" target='_blank' rel='noopener noreferrer'>Code of Conduct</a>
                        </li>
                        <li>
                            <a href="https://developers.google.com/community-guidelines" target='_blank' rel='noopener noreferrer'>Community Guidelines</a>
                        </li>
                        <li>
                            <a href="https://dsccvrgu.tech" target='_blank' rel='noopener noreferrer'>DSC CVRGU</a>
                        </li>
                    </ul>
                </div>
                <div id="contact" className="content">
                    <h1>Contact us</h1>
                    <p>Phone: 79924 65784</p>
                    <p>Phone: 82495 77644</p>
                    <a href="mailto:lead@dsccvrgu.tech">Email: lead@dsccvrgu.tech</a>
                    <div id="social">
                        <a href="https://www.linkedin.com/company/69065757" className="z-2">
                            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                        </a>
                        <a href="https://www.facebook.com/dsccvrgu/" className="z-2">
                            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                        </a>
                        <a href="https://twitter.com/DCvrgu" className="z-2">
                            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/dsccvrgu/" className="z-2">
                            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div id="copyright" className="py-4">
                <h5>&copy; 2021 Developer Student Clubs CVRGU</h5>
            </div>
        </footer>
    );
}
export default Footer