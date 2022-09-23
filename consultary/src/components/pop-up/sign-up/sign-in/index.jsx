import React, {useState} from "react";
import EyesClose from "../../../../assets/images/eyesX.png";
import Eyes from "../../../../assets/images/eye.png";
import "../style.scss"
import {RegisterSignUp} from "../../../../platform/api";


export const SignInMain = (props)=>{



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
                console.log(result.data)
            }else{
                console.log("error")
            }
        }
    }


    return  <div className="P-sign-up-place">
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
        <p onClick={()=>props.forgot()} className="P-sign-up-forgot">Forgot your password?</p>
    </div>
}