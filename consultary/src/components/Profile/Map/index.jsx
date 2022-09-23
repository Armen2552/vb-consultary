import React, {useState} from "react";
import "./style.scss"
import cover from "../../../assets/images/section-cover.jpg"


export const ProfileMap = ()=>{
    const [mapTitle] = useState("Profile")




    return <div className="P-profile-map">
        <div className="G-profile-container G-flex G-justify-between">
            <div className="P-profile-map-main">
                <h2>{mapTitle}</h2>
                <p>Home>{mapTitle}</p>
            </div>
            <div className="P-profile-map-description G-flex G-align-center">
                <div className="P-notification G-flex">
                    <p>Notifications</p>
                </div>
                <div className="P-description G-flex G-align-center">
                    <div style={{backgroundImage:`url('${cover}')`}} />
                    <p>Margret Hill</p>
                </div>
            </div>
        </div>
    </div>
}