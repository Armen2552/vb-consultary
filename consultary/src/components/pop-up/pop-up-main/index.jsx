import React, {useState} from "react";
import Logo from "../../../assets/images/logo.svg";
import User from "../user";
import "./style.scss"
import Company from "../company";





const SignIn = (props)=>{

    const [register,setRegister] = useState("user")

    const handleClick = (e)=>{
        e.stopPropagation()
    }

    const changeClick = (a)=>{
        setRegister(a)
    }

    return <div className="P-pop-up G-flex G-center" onClick={()=>props.close(false)}>
        <div className="P-regitsration" onClick={handleClick}>
            <div className="P-regitsration-main G-flex G-flex-column G-center">
                <div className="P-close-registration G-flex G-flex-column G-center" onClick={()=>props.close(false)}>
                    <span className="P-close1" />
                    <span className="P-close2" />
                </div>
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