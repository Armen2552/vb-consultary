import React, {useState} from "react";
import Logo from "../../../assets/images/logo.svg";
import "./style.scss"
import {SignInMain} from "./sign-in";
import {Forgot} from "./forgot-password";


export const SignUp = (props)=>{

    const [forgot,setForgot] = useState(false)

    const handleClick = (e)=>{
        e.stopPropagation()
    }

    const forgotten = ()=>{
        setForgot(true)
    }





    return  <div className="P-pop-up G-flex G-center" onClick={()=>props.close(false)}>
        <div className="P-regitsration" onClick={handleClick}>
            <div className="P-regitsration-main G-flex G-flex-column G-center">
                <div className="P-close-registration G-flex G-flex-column G-center" onClick={()=>props.close(false)}>
                    <span className="P-close1" />
                    <span className="P-close2" />
                </div>
                <div className="P-regitsration-logo"><img src={Logo} alt="Logo"/></div>
            </div>
            {!forgot? <SignInMain forgot={forgotten} /> : <Forgot />}
        </div>
    </div>
}