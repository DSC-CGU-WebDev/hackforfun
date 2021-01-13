import React from 'react'
import '../css/faqs.css'
import './faqs.js'

function Faqs() {
    const items = document.querySelectorAll(".accordion a");

    function toggleAccordion() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("active");
    }

    items.forEach((item) => item.addEventListener("click", toggleAccordion));
    return (
        <div className="body" id='faqs'>
            <div className="faqs_container">
                <h2 className="heading">Frequently Asked Questions</h2>
                <div className="accordion">
                    <div className="accordion-item">
                        <a>What is this workshop for?</a>
                        <div className="content">
                            <p>This workshop is a secure step to the future of the world with the Knowledge of Ethical Hacking with no boundary of knowledge and a great experience of Hands-on Skills.</p>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <a>What will you gain from this workshop?</a>
                        <div className="content">
                            <p>Experience with Interest, Knowledge with Skill, Development with Quality.</p>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <a>How many days will this workshop go on?</a>
                        <div className="content">
                            <p>This event is for 12 days, with 6 days of innovative sessions and one day break for your practice after every session.</p>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <a>Are we going to receive any swag post this event?</a>
                        <div className="content">
                            <p>We beleive technical events are for grasping knowledge as much we can. Moreover, we wil provide you all participation certificate after attending all the session which will be live on youtube.           </p>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <a>Any prerequisite?</a>
                        <div className="content">
                            <p>This course doesn't have any prerequisite what we require the most is your zeal to learn new things.</p>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <a>What are we going to learn</a>
                        <div className="content">
                            <p>These are a few topics we weill be covering overall</p>
                            <ul>
                                <li> Introduction to Ethical Hacking</li>
                                <li> Scanning Networks</li>
                                <li>WIFI Hacking And IOT</li>
                                <li> Web Exploitation</li>
                                <li>Forensics</li>
                                <li>Phishing and Modern Threads</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs
