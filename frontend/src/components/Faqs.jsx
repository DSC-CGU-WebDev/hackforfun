import React from 'react'
import '../css/faqs.css'
function Faqs() {
    const items = document.querySelectorAll(".accordion p");

    function toggleAccordion() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("active");
    }

    items.forEach((item) => item.addEventListener("click", toggleAccordion));
    return (
        <div className="body" id='faqs'>
            <div className="faqs_container">
                <h1 className="heading">Frequently Asked Questions</h1>
                <div className="accordion">
                    <div className="accordion-item">
                        <p>What is this workshop for?</p>
                        <div className="content">
                            This workshop is a secure step to the future of the world with the Knowledge of Ethical Hacking with no boundary of knowledge and a great experience of Hands-on Skills.
                        </div>
                    </div>
                    <div className="accordion-item">
                        <p>What will you gain from this workshop?</p>
                        <div className="content">
                            Experience with Interest, Knowledge with Skill, Development with Quality.
                        </div>
                    </div>
                    <div className="accordion-item">
                        <p>How many days will this workshop go on?</p>
                        <div className="content">
                            This event is for 12 days, with 6 days of innovative sessions and one day break for your practice after every session.
                        </div>
                    </div>
                    <div className="accordion-item">
                        <p>Are we going to receive any swag post this event?</p>
                        <div className="content">
                            We beleive technical events are for grasping knowledge as much we can. Moreover, we wil provide you all participation certificate after attending all the session which will be live on youtube.
                        </div>
                    </div>
                    <div className="accordion-item">
                        <p>Any prerequisite?</p>
                        <div className="content">
                            This course doesn't have any prerequisite what we require the most is your zeal to learn new things.
                        </div>
                    </div>
                    <div className="accordion-item">
                        <p>What are we going to learn</p>
                        <div className="content">
                            These are a few topics we weill be covering overall
                            <ul>
                                <li>Introduction to Ethical Hacking</li>
                                <li>Scanning Networks</li>
                                <li>WIFI Hacking And IOT</li>
                                <li>Web Exploitation</li>
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
