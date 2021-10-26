import React from "react";
import About from "./About";
import Pages from "./Pages";
import Blog from "./Blog";
import Testimonials from "./Testimonials";
import "./Home.css";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiFillCalendar } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
    return (
        <>
            <div className="whole-container">
                <div className="home">
                    <div className="home-box-area">
                        <div className="my-image">
                            <img
                                src="images/myProfile.jpg"
                                alt="susmita khanal"
                            />
                        </div>
                        <div className="my-info">
                            <h1>Susmita Khanal</h1>
                            <p>
                                You will begin to realise why this exercise is
                                called the Dickens Pattern (with reference to
                                the ghost showing Scrooge some different
                                futures)
                            </p>
                            <div className="my-contact-info">
                                <div>
                                    <AiFillCalendar className="my-contact-info-icon" />
                                    <span>4 Aug,1998</span>
                                </div>
                                <div>
                                    <BiPhoneCall className="my-contact-info-icon" />
                                    <span>9845238304</span>
                                </div>
                                <div>
                                    <FaRegEnvelope className="my-contact-info-icon" />
                                    <span>susmu98@gmail.com</span>
                                </div>
                                <div>
                                    <AiOutlineHome className="my-contact-info-icon" />
                                    <span>Bardaghat,Nawalparasi</span>
                                </div>
                            </div>
                            <div className="my-info-icons">
                                <div className="social-icon">
                                    {" "}
                                    <FaFacebookF />
                                </div>
                                <div className="social-icon">
                                    {" "}
                                    <BsTwitter />
                                </div>
                                <div className="social-icon">
                                    {" "}
                                    <FaLinkedinIn />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <About />
            <div className="education-experiences">
                <div className="top-part">
                    <div className="experience">My Experiences</div>
                    <div className="education">My Education</div>
                </div>
                <div className="verticlecomponent-mobile">
                    {" "}
                    <VerticalTimeline className="verticleComponent">
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            style={{ width: 300 }}
                            contentStyle={{
                                // marginLeft: "220px",
                                background:
                                    "linear-gradient(to right,rgb(121, 122, 255)30%,rgb(135, 232, 255)90%)",
                                color: "#fff",
                            }}
                            date="August-4 to present"
                            iconStyle={{
                                background: "rgb(121, 122, 255)",
                                color: "#fff",
                                height: "10px",
                                width: "10px",
                                marginLeft: "15px",
                            }}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Junior Web Developer
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                Asterdio.inc
                            </h4>
                            <p>React Js, Typescript</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            // style={{ width: 300 }}
                            date="March 4 (2020 - 2021)"
                            iconStyle={{
                                background:
                                    "linear-gradient(to right,rgb(121, 122, 255)30%,rgb(135, 232, 255)90%)",
                                color: "#fff",
                                height: "10px",
                                width: "10px",

                                marginLeft: "15px",
                            }}
                            contentStyle={{
                                background:
                                    "linear-gradient(to right,rgb(121, 122, 255)30%,rgb(135, 232, 255)90%)",
                                color: "#fff",
                            }}
                        >
                            <h3 className="vertical-timeline-element-title">
                                wordPress
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                Lalitpur
                            </h4>
                            <p>Insight Technology</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            style={{ width: 300 }}
                            date="2020 - 2021"
                            iconStyle={{
                                background:
                                    "linear-gradient(to right,rgb(121, 122, 255)30%,rgb(135, 232, 255)90%)",
                                color: "#fff",
                                height: "10px",
                                width: "10px",
                                marginLeft: "213px",
                                marginLeft: "15px",
                            }}
                            contentStyle={{
                                // marginLeft: "220px",
                                background:
                                    "linear-gradient(to right,rgb(121, 122, 255)30%,rgb(135, 232, 255)90%)",
                                color: "#fff",
                            }}
                        >
                            <h3 className="vertical-timeline-element-title">
                                wordPress
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                Intern
                            </h4>
                            <p>Insight Technology</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2006 - 2008"
                            style={{ width: 300 }}
                            iconStyle={{
                                background: "rgb(121, 122, 255)",
                                color: "#fff",
                                height: "10px",
                                width: "10px",
                                marginLeft: "15px",
                            }}
                            contentStyle={{
                                // position: "absolute",
                                // marginRight: "-220px",
                                background:
                                    "linear-gradient(to right,rgb(121, 122, 255)30%,rgb(135, 232, 255)90%)",
                                color: "#fff",
                            }}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Web Designer
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                San Francisco, CA
                            </h4>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
                <div className="verticle-big">
                    <VerticalTimeline className="verticleComponent">
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            style={{ width: 700 }}
                            contentStyle={{
                                marginLeft: "220px",
                                background:
                                    "linear-gradient(to right,rgb(121, 122, 255)30%,rgb(135, 232, 255)90%)",
                                color: "#fff",
                            }}
                            date="August-4 to present"
                            iconStyle={{
                                background: "rgb(121, 122, 255)",
                                color: "#fff",
                                height: "10px",
                                width: "10px",
                                marginLeft: "213px",
                            }}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Junior Web Developer
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                Asterdio.inc
                            </h4>
                            <p>React Js, Typescript</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            style={{ width: 700 }}
                            date="March 4 (2020 - 2021)"
                            iconStyle={{
                                background:
                                    "linear-gradient(to right,rgb(121, 122, 255)30%,rgb(135, 232, 255)90%)",
                                color: "#fff",
                                height: "10px",
                                width: "10px",
                                marginLeft: "213px",
                                // marginLeft: "15px",
                            }}
                            contentStyle={{
                                marginRight: "-220px",
                                marginLeft: "420px",
                                background:
                                    "linear-gradient(to right,rgb(121, 122, 255)30%,rgb(135, 232, 255)90%)",
                                color: "#fff",
                            }}
                        >
                            <h3 className="vertical-timeline-element-title">
                                wordPress
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                Lalitpur
                            </h4>
                            <p>Insight Technology</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            style={{ width: 700 }}
                            date="2020 - 2021"
                            iconStyle={{
                                background:
                                    "linear-gradient(to right,rgb(121, 122, 255)30%,rgb(135, 232, 255)90%)",
                                color: "#fff",
                                height: "10px",
                                width: "10px",
                                marginLeft: "213px",
                                // marginLeft: "15px",
                            }}
                            contentStyle={{
                                marginLeft: "220px",
                                background:
                                    "linear-gradient(to right,rgb(121, 122, 255)30%,rgb(135, 232, 255)90%)",
                                color: "#fff",
                            }}
                        >
                            <h3 className="vertical-timeline-element-title">
                                wordPress
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                Intern
                            </h4>
                            <p>Insight Technology</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2006 - 2008"
                            style={{ width: 700 }}
                            iconStyle={{
                                background: "rgb(121, 122, 255)",
                                color: "#fff",
                                height: "10px",
                                width: "10px",
                                marginLeft: "214px",
                            }}
                            contentStyle={{
                                // position: "absolute",
                                marginRight: "-220px",
                                background:
                                    "linear-gradient(to right,rgb(121, 122, 255)30%,rgb(135, 232, 255)90%)",
                                color: "#fff",
                            }}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Web Designer
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                San Francisco, CA
                            </h4>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
            <Pages />
            <Blog />
            <Testimonials />
        </>
    );
};

export default Home;
