import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { VscThreeBars } from "react-icons/vsc";
import "./Navbar.css";

const Navbar = () => {
    const [navLinkOpen, setNavLinkOpen] = useState(false);
    const handleBar = () => {
        setNavLinkOpen(!navLinkOpen);
    };
    return (
        <>
            <div className="navbar">
                <div className="navbar-logo">MEETME</div>
                <div onClick={handleBar} className="navbar-bar">
                    {navLinkOpen ? (
                        <IoMdClose className="bar-close-icon" />
                    ) : (
                        <VscThreeBars className="bar-close-icon" />
                    )}
                </div>
                {/* <div className="nav-menu"> */}
                <div className={navLinkOpen ? "nav-menu-active" : "nav-menu"}>
                    {/* <ul className="nav-links"> */}
                    <Link className="nav-links" to="/">
                        Home
                    </Link>
                    <Link className="nav-links" to="/about">
                        About
                    </Link>
                    <Link className="nav-links" to="/services">
                        Services
                    </Link>
                    <Link className="nav-links" to="/pages">
                        Pages
                    </Link>
                    <Link className="nav-links" to="/blog">
                        Blog
                    </Link>
                    <Link className="nav-links-contact" to="/contact">
                        Contact
                    </Link>
                    {/* </ul> */}
                </div>
            </div>
        </>
    );
};

export default Navbar;
