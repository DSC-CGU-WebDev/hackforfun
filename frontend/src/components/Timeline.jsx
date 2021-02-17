import React from 'react'
import '../css/timeline.css'
import day_1 from '../images/day-1.jpg'
import day_2 from '../images/day-2.jpg'
import day_3 from '../images/day-3.jpg'
import day_4 from '../images/day-4.jpg'
import day_5 from '../images/day-5.jpg'
import day_6 from '../images/day-6.jpg'

function Timeline() {
    var items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                if (!items[i].classList.contains("in-view")) {
                    items[i].classList.add("in-view");
                }
            } else if (items[i].classList.contains("in-view")) {
                items[i].classList.remove("in-view");
            }
        }
    }

    window.addEventListener("load", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

    return (
        <div className='timeline_body' id='timeline' >
            <section className="timeline">
                <h1 className="heading"> Timeline</h1>
                <ul>
                    <li>
                        <a href="https://www.youtube.com/watch?v=1qDpqasGv90" target="_blank" rel="noopener noreferrer">
                            <div className="container">
                                <time>Day-1</time>
                                <img className="img" src={day_1} alt='hackforfun' />
                                <div className="text">
                                    <p>Introduction To Ethical Hacking</p>
                                    <p> 5:00 – 7:00 PM</p>
                                    <p>February 3, Wednesday</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=vroYg5MBVQo" target="_blank" rel="noopener noreferrer">
                            <div className="container">
                                <time>Day-2</time>
                                <img className="img" src={day_2} alt='hackforfun' />
                                <div className="text">
                                    <p>Scanning Network</p>
                                    <p>5:00 – 7:00 PM </p>
                                    <p>February 5, Friday</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=DJcZPMq_rMI" target="_blank" rel="noopener noreferrer">
                            <div className="container">
                                <time>Day-3</time>
                                <img className="img" src={day_3} alt='hackforfun' />
                                <div className="text">
                                    <p>WIFI Hacking And IOT </p>
                                    <p>5:00 – 7:00 PM</p>
                                    <p>February 7, Sunday </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=b0JYl7SXBTc" target="_blank" rel="noopener noreferrer">
                            <div className="container">
                                <time>Day-4</time>
                                <img className="img" src={day_4} alt='hackforfun' />
                                <div className="text">
                                    <p>  Web Exploitation</p>
                                    <p>5:00 – 7:00 PM </p>
                                    <p> February 9, Tuesday </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=dzaOitHnuQw" target="_blank" rel="noopener noreferrer">
                            <div className="container">
                                <time>Day-5</time>
                                <img className="img" src={day_5} alt='hackforfun' />
                                <div className="text">
                                    <p>Web Exploitation And Forensics </p>
                                    <p>5:00 – 7:00 PM</p>
                                    <p>February 11, Thursday</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=SIoCXOxsvVE" target="_blank" rel="noopener noreferrer">
                            <div className="container">
                                <time>Day-6</time>
                                <img className="img" src={day_6} alt='hackforfun' />
                                <div className="text">
                                    <p>Phishing, Modern Threats and Android Forensics</p>
                                    <p>5:00 – 7:00 PM</p>
                                    <p>February 13, Saturday</p>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>
        </div >
    )
}

export default Timeline
