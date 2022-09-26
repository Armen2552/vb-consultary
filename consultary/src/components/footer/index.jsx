import React, {useState} from "react";
import "./style.scss"
import LogoFooter from "../../assets/images/logo.svg"
import Tel from "../../assets/images/tel.png"
import Massage from "../../assets/images/massage.png"
import Instagram from "../../assets/images/ins.png"
import Fb from "../../assets/images/fb.png"
import Youtube from "../../assets/images/youtube.png"
import Watsapp from "../../assets/images/watsapp.png"

const Footer = ()=>{

    const[list1] = useState([
        {
            description: "Home",
            path: "/about-us"
        },
        {
            description: "About Us",
            path: "/vacancies"
        },
        {
            description: "Vacancies",
            path: "/feature-link"
        },

    ])

    const[list2] = useState([
        {
            description: "Privacy",
            path: "/privacy"
        },
        {
            description: "FAQs",
            path: "/faqs"
        },
        {
            description: "Terms",
            path: "/terms"
        },

    ])


    return <div className="P-main-footer">
            <div className="G-container G-flex G-justify-between">
                <div className="P-footer-logo G-flex G-center G-flex-column">
                    <img src={LogoFooter} alt="Logo"/>
                    <p>VBK CONSULTANCY</p>
                </div>
                <div className="P-feature">
                    <h2>Feature Links</h2>
                    <ul>
                        {list1.map((elem,index)=>{
                            return <li key={index}>{elem.description}</li>
                        })}
                    </ul>
                </div>
                <div className="P-support">
                    <h2>Support</h2>
                    <ul>
                        {list2.map((elem,index)=>{
                            return <li key={index}>{elem.description}</li>
                        })}
                    </ul>
                </div>
                <div className="P-footer-contact">
                    <h2>Contact Us</h2>
                    <ul>
                        <li><img src={Tel} alt="tel"/>+971 50 913 4617</li>
                        <li><img src={Massage} alt="massage"/>info@vbkc.in</li>
                        <ul className="G-flex G-justify-between">
                            <li><img src={Instagram} alt="Instagram"/></li>
                            <li><img src={Fb} alt="Facebook"/></li>
                            <li><img src={Youtube} alt="Youtube"/></li>
                            <li><img src={Watsapp} alt="Watsapp"/></li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className="P-footer-reserved G-flex G-center">
                <p>© VBK Consultancy 2022. All rights reserved.</p>
            </div>
        </div>


}

export default Footer