import React, {useEffect, useState} from "react";
import "./style.scss"
import headerLogo from "../../assets/images/logo.svg";
import SignIn from "../pop-up/pop-up-main";
import {SignUp} from "../pop-up/sign-up";






const Header = ()=>{
    useEffect(()=>{
        if(signIn  || signUp){
            document.body.style.overflowY = "hidden"
        }else{
            document.body.style.overflowY = "scroll"
        }
    })


    const [menu] = useState(['About Us','Vacancies','Contact Us'])
    const [signIn,setSignIn] = useState(false)
    const [signUp,setSignUp] = useState(false)


    const closeRegistration = (a)=>{
        setSignIn(a)
        setSignUp(a)
    }

    const openRegistration = ()=>{
        setSignIn(true)
    }

    const openSignUp = ()=>{
        setSignUp(true)
    }



    return <div className="header">
            <div className="P-header-menu">
                <div className="P-header-logo">
                    <img src={headerLogo} alt="Logo"/>
                    <p>VBK CONSULTANCY</p>
                </div>
                <ul>
                    {menu.map((elem,index)=>{
                        return <li key={index}>{elem}</li>
                    })}
                </ul>
                <span />
                <i className="icon-Search P-search" />
            </div>
            <div className="P-header-buttons G-flex">
                <button onClick={openSignUp} className='G-button'>Sign Up</button>
                <button onClick={openRegistration} className='G-button P-header-sign-in'>Sign In</button>
            </div>
            {signIn? <SignIn close={closeRegistration} /> : null}
            {signUp? <SignUp close={closeRegistration} /> : null}
        </div>
}

export default Header