import React from "react";
import "./style.scss"
import Logofooter from "../../assets/images/logo1.png"

const Footer = ()=>{



    return <div>
        <div className="P-main-footer">
            <div className="G-container">
                <div className="P-footer-logo G-flex G-center G-flex-column">
                    <img src={Logofooter} alt="Logo"/>
                    <p>VBK CONSULTANCY</p>
                </div>
            </div>
        </div>
        <div className="P-footer-reserved">
            <p>© VBK Consultancy 2022. All rights reserved.</p>
        </div>
    </div>
}

export default Footer