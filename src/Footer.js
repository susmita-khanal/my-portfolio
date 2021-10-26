import React from "react";
import { BsSuitHeart } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { SiFirefoxbrowser } from "react-icons/si";
import { BiBeenHere } from "react-icons/bi";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-left">
                    <h4>About-Me</h4>
                    <p className="footer-para1">
                        Do you want to be even more successful? Learn to love
                        learning and growth. The more effort you put into
                        improving your skills,
                    </p>
                    <p className="footer-para2">
                        Copyright ©2021 All rights reserved | This template is
                        made with <BsSuitHeart />
                        by
                    </p>
                    <p className="colorlib">Colorlib</p>
                </div>
                <div className="footer-middle">
                    <h4>News Letter</h4>
                    <p>Stay updated with our latest trends</p>
                    <div>
                        <input type="text" placeholder="enter email address" />
                        <AiOutlineArrowRight />
                    </div>
                </div>
                <div className="footer-right">
                    <h4>Follow Me</h4>
                    <p>let us be social</p>
                    <div className="footer-icon">
                        <FaFacebookF />
                        <BsTwitter />
                        <SiFirefoxbrowser />
                        <BiBeenHere />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
