import React from "react";
import { BiCylinder } from "react-icons/bi";
import { BiBookAlt } from "react-icons/bi";
import { MdOutlinePersonOutline } from "react-icons/md";
import ProgressBar from "@ramonak/react-progress-bar";

import "./About.css";

const About = () => {
    return (
        <>
            <div className="about">
                <div className="about-container">
                    <div className="about-myself">
                        <h2>About Myself</h2>
                        <p>
                            inappropriate behavior is often laughed off as “boys
                            will be boys,” women face higher conduct standards
                            especially in the workplace. That’s why it’s crucial
                            that, as women, our behavior on the job is beyond
                            reproach. inappropriate behavior is often laughed.
                        </p>
                    </div>
                    <div className="myself-box">
                        <div className="box">
                            <BiCylinder className="myself-icons" />
                            <div className="num">$2.5M</div>
                            <div className="data">Total Donations</div>
                        </div>

                        <div className="box">
                            <BiBookAlt className="myself-icons" />
                            <div className="num">1465</div>
                            <div className="data">Total Projects</div>
                        </div>

                        <div className="box">
                            <MdOutlinePersonOutline className="myself-icons" />
                            <div className="num">3965</div>
                            <div className="data">Total Volunters</div>
                        </div>
                    </div>
                </div>
                <div className="rating" style={{ paddingTop: "10px" }}>
                    <div className="rating-bar">
                        <div className="skills">Html-css 90%</div>
                        <div className="bar">
                            <ProgressBar
                                completed={90}
                                className="progressbar"
                                bgColor="rgb(132, 212, 255)"
                                height="14px"
                            />
                        </div>
                    </div>
                    <div className="rating-bar">
                        <div className="skills">Javascript 70%</div>
                        <div className="bar">
                            <ProgressBar
                                completed={70}
                                className="progressbar"
                                bgColor="rgb(132, 212, 255)"
                                height="14px"
                            />
                        </div>
                    </div>
                    <div className="rating-bar">
                        <div className="skills">React 70%</div>
                        <div className="bar">
                            <ProgressBar
                                completed={70}
                                className="progressbar"
                                bgColor="rgb(132, 212, 255)"
                                height="14px"
                            />
                        </div>
                    </div>
                    <div className="rating-bar">
                        <div className="skills">WordPress 60%</div>
                        <div className="bar">
                            <ProgressBar
                                completed={60}
                                className="progressbar"
                                bgColor="rgb(132, 212, 255)"
                                height="14px"
                            />
                        </div>
                    </div>
                    <div className="rating-bar">
                        <div className="skills">Typescript 40%</div>
                        <div className="bar">
                            <ProgressBar
                                completed={70}
                                className="progressbar"
                                bgColor="rgb(132, 212, 255)"
                                height="14px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
