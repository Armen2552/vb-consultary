import React, {useState} from "react";
import "./style.scss"
import Logo from "../../../assets/images/logo.svg"

export const ProfileDashboard = ()=>{
    const [map] = useState([
        {
            title: "Profile",
            path: "/profile",
            img: "icon-single"
        },
        {
            title: "Apply",
            path: "/apply",
            img: "icon-settings"
        },
        {
            title: "Logout",
            path: "/logout",
            img: "icon-logout"
        }
    ])


    return <div className="P-profile-dashboard G-flex G-flex-column G-align-center">
        <div className="P-dashboard-logo G-flex G-flex-column">
            <img src={Logo} alt="Logo"/>
            <p>VBK CONSULTANCY</p>
        </div>
        <ul>
            {map.map((elem,index)=>{
                return <li className="G-flex G-align-center" key={index}><i className={elem.img} />{elem.title}</li>
            })}
        </ul>
    </div>
}