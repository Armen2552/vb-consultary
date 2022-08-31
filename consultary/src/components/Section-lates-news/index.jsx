import React, {useState} from "react";
import "./style.scss"
import LatestCover1 from "../../assets/images/Rectangle 37.jpg"
import LatestCover2 from "../../assets/images/Rectangle 38.jpg"

const LatestNews = ()=>{

    const [news] = useState([
        {
            img: LatestCover1,
            description: 'How to Learn Faster and Remember',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
            date: 'June 6 , 2022'
        },
        {
            img: LatestCover2,
            description: 'How to Learn Faster and Remember',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
            date: 'May 25 , 2022'
        },
        {
            img: LatestCover2,
            description: 'How to Learn Faster and Remember',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
            date: 'May 20 , 2022'
        }
    ])


    return <div>
        <div className="P-latest-news">
            <div className="G-container">
                <h2>Latest News</h2>
                <div className="G-flex G-justify-between">
                    {news.map((elem,index)=>{
                        return <div key={index} className="P-latest-box">
                            <div className="P-latest-img" style={{backgroundImage: `url('${elem.img}')`}}/>
                            <div className="P-latest-box-title">
                                <h3>{elem.description}</h3>
                                <h4>{elem.title}</h4>
                                <span>READ MORE</span>
                                <p>{elem.date}</p>
                            </div>
                        </div>
                    })}
                </div>
                <button className="G-button">See More</button>
            </div>
        </div>
    </div>
}

export default LatestNews