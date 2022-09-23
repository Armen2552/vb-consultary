import React from "react";
import {ProfileDashboard} from "./Dashboard";
import {ProfileMap} from "./Map";
import "./style.scss"
import {ProfileSection} from "./Section";

export const Profile = ()=>{


    return <div className="G-flex">
        <ProfileDashboard />
        <div className="P-profile-main">
            <ProfileMap />
            <ProfileSection />
        </div>
    </div>
}