import React, {useState} from "react";
import "./style.scss"
import Construction from "../../assets/images/construction.png"
import Agricaltural from "../../assets/images/agriculture.png"
import Catering from "../../assets/images/cathering.png"
import Logistics from "../../assets/images/logistic.png"
import Housekeeping from "../../assets/images/housekeeping.png"
import Administration from "../../assets/images/adiministration.png"
import Customer from "../../assets/images/customer.png"

const Welcome = ()=>{

    const [box] = useState([
        {
            img: Construction,
            title: "Construction",
            number: "(102)"
        },
        {
            img: Agricaltural,
            title: "Agricaltural",
            number: '(82)'
        },
        {
            img: Catering,
            title: "Catering",
            number: '(125)'
        },
        {
            img: Logistics,
            title: "Logistics",
            number: '(97)'
        },
        {
            img: Housekeeping,
            title: "Housekeeping",
            number: '(102)'
        },
        {
            img: Administration,
            title: "Administration Management",
            number: '(102)'
        },
        {
            img: Customer,
            title: "Customer Service",
            number: '(97)'
        }
    ])



    return <div>
        <div className="P-finds-job">
            <div className="G-container">
                <h1>Finds <span> jobs </span> in your Field</h1>
                <div className="P-finds-job-boxes G-flex G-flex-wrap G-justify-center">
                    {box.map((elem,index)=>{
                        return <div key={index} className="P-finds-box G-flex G-align-center">
                            <img src={elem.img} alt="box-logo"/>
                            <div>
                                <p>{elem.title}</p>
                                <span>{elem.number}</span>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>

}


export default Welcome