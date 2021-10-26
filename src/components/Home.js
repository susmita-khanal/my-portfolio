import React from "react";
import About from "./About";
import "./Home.css";
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
            </div>
        </>
    );
};

export default Home;
