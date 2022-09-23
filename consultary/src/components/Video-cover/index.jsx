import React from "react";
import "./style.scss"
import videoVbk from "../../assets/video/VBSite4.mp4"

const Video = () => {
    return <div className="P-section-video-main">
        <video controls loop width="100%" className="P-section-video">
            <source src={videoVbk} type="video/webm" />
            <source src={videoVbk} type="video/mp4"
            />
            Sorry, your browser doesn't support videos.
        </video>
    </div>
    ;
};

export default Video;