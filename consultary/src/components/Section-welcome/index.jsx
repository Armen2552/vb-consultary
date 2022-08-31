import React, {useState} from "react";
import "./style.scss"
import Vector1 from "../../assets/images/Vector1.png"
import Vector2 from "../../assets/images/Vector2.png"
import Vector3 from "../../assets/images/Vector3.png"
import Vector4 from "../../assets/images/Vector4.png"

const Welcome = ()=>{

    const [box] = useState([
        {
            img: Vector1,
            path: '/about',
            title: 'About ',
            color: "#B5D56A",
        },
        {
            img: Vector2,
            path: '/vacancies',
            title: 'Vacancies ',
            color: "#FF6F6F",
        },
        {
            img: Vector3,
            path: '/careers',
            title: 'Careers ',
            color: "#4886FF",
        },
        {
            img: Vector4,
            path: '/contact',
            title: 'Contact',
            color: "#009688",
        },
    ])



    return <div>
        <div className="P-welcome">
            <div className="G-container">
                <h1>Welcome to <span>VBK Concultancy</span></h1>
                <p>Best Platform to Learn Everything</p>
                <div className="P-welcome-boxes G-flex G-align-center G-justify-between">
                    {box.map((elem,index)=>{
                        return <div key={index} className="P-welcome-box G-flex G-flex-column G-center" style={{backgroundColor: elem.color}}>
                            <img src={elem.img} alt="Logo"/>
                            <p>{elem.title}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>

}


export default Welcome