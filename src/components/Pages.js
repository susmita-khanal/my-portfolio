import React from "react";
import "./Pages.css";
import { BsBuilding } from "react-icons/bs";
import { RiBuildingLine } from "react-icons/ri";
import { MdOutlineEditNote } from "react-icons/md";

const Pages = () => {
    return (
        <>
            <div className="clients">
                <div className="client-top">
                    <h2 className="top-title">Offerings to my clients</h2>
                    <p className="top-para">
                        If you are looking at blank cassettes on the web, you
                        may be very confused at the difference in price. You may
                        see some for as low as $.17 each.
                    </p>
                </div>
                <div className="client-box">
                    <div className="client-box-div">
                        <div className="client-box-icon">
                            <BsBuilding />
                        </div>
                        <div className="client-box-title">Architecture</div>
                        <div className="client-box-paragraph">
                            If you are looking at blank cassettes on the web,
                            you may be very confused at the difference in price.
                            You may see some for as low as $17 each.
                        </div>
                    </div>
                    <div className="client-box-div">
                        <div className="client-box-icon">
                            <RiBuildingLine />
                        </div>
                        <div className="client-box-title">Interior Design</div>
                        <div className="client-box-paragraph">
                            If you are looking at blank cassettes on the web,
                            you may be very confused at the difference in price.
                            You may see some for as low as $17 each.
                        </div>
                    </div>
                    <div className="client-box-div">
                        <div className="client-box-icon">
                            <MdOutlineEditNote />
                        </div>
                        <div className="client-box-title">Concept-Design</div>
                        <div className="client-box-paragraph">
                            If you are looking at blank cassettes on the web,
                            you may be very confused at the difference in price.
                            You may see some for as low as $17 each.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pages;
