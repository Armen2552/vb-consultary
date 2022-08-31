import React, {useState} from "react";
import Logo from "../../../assets/images/logo1.png";
import User from "../user";
import "./style.scss"
import Company from "../company";





const SignIn = ()=>{

    const [register,setRegister] = useState("user")

    const changeClick = (a)=>{
        setRegister(a)
    }

    return <div className="P-pop-up G-flex G-center">
        <div className="P-regitsration">
            <div className="P-regitsration-main G-flex G-flex-column G-center">
                <div className="P-regitsration-logo"><img src={Logo} alt="Logo"/></div>
                <div className="P-regitsration-chose G-flex G-justify-evenly">
                    <button className="G-button" onClick={()=>changeClick("user")}>User</button>
                    <button className="G-button" onClick={()=>changeClick("company")}>Company</button>
                </div>
            </div>
            {register==="user"? <User /> : null}
            {register==="company"? <Company /> : null}
        </div>
    </div>
}

export default SignIn