import React from "react";
import "./style.scss"
import cover from "../../../assets/images/section-cover.jpg"

export const ProfileSection = ()=>{


    return <div className="P-main">
        <div className="G-profile-container">
            <div className="P-profile-cover G-flex">
                <div className="P-profile-image">
                    <div className="P-image" style={{backgroundImage:`url('${cover}')`}} />
                    <p>Florida,USA</p>
                </div>
                <div className="P-profile-name">
                    <h2>Margaret Hill</h2>
                    <p>margret.hill32@gmail.com</p>
                </div>
            </div>
            <span />
            <div className="P-main-title">
                <h2>Phone number(WhatsApp): </h2>
                <p>+971 50 913 4617</p>
                <h2>Date of Birth</h2>
                <p>30.04.1998</p>
                <div>

                </div>
            </div>
        </div>
    </div>
}