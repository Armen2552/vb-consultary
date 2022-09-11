import React, {useState} from "react";
import Logo from "../../../assets/images/logo.svg";
import "./style.scss"
import Eyes from "../../../assets/images/eye.png"
import EyesClose from "../../../assets/images/eyesX.png"
import {RegisterSignUp} from "../../../platform/api";


export const SignUp = (props)=>{

    const [user,setUser] = useState({
        email: "",
        password: ""
    })

    const [error,setError] = useState({
        email: "",
        password: ""
    })

    const [eyes, setEyes] = useState(true)


    const clickPassword = ()=>{
        setEyes(!eyes)
    }

    const handleChange = (e)=>{
        setUser({...user,[e.target.name]: e.target.value})
        setError({...error, [e.target.name]: ""})
    }

    const handleClick = (e)=>{
        e.stopPropagation()
    }

    const validation = ()=>{
        let isValidate = true

        const error = {
            email: "",
            password: ""
        }

        if(!user.email){
            isValidate = false
            error.email = "Fill the email field"
        }
        if(!user.password){
            isValidate = false
            error.password = "Fill the password field"
        }

        setError(error)

        return isValidate
    }

    const clickSignUp = async ()=>{
        if(validation()){
            const result = await RegisterSignUp(user)
            if(result.data){
                console.log("succes")
            }else{
                console.log("error")
            }
        }
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
            <div className="P-sign-up-place">
                <div className="P-sign-up-email P-sign-up">
                    <p>Email</p>
                    <label className={error.email? 'P-error' : null}>
                        <input type="text"
                               onChange={handleChange}
                               name="email"
                               placeholder="example@gmail.com"/>
                        {error.email?  <p>{error.email}</p>: null}
                    </label>
                </div>
                <div className="P-sign-up-password P-sign-up">
                    <p>Password</p>
                    <label className={error.password? 'P-error' : null}>
                        <input type={eyes?'password':'text'}
                               onChange={handleChange}
                               name="password"
                               placeholder="At least 8 characters"/>
                        <img onClick={clickPassword} src={eyes? EyesClose : Eyes} alt="Eyes-logo"/>
                        {error.password?  <p>{error.password}</p>: null}
                    </label>
                </div>
                <button onClick={clickSignUp}>Sign In</button>
                <p className="P-sign-up-forgot">Forgot your password?</p>
            </div>
        </div>
    </div>
}