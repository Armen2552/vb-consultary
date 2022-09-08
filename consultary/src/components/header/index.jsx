import React, {useEffect, useState} from "react";
import "./style.scss"
import headerLogo from "../../assets/images/logo.svg";
import SignIn from "../pop-up/pop-up-main";






const Header = ()=>{
    useEffect(()=>{
        if(signIn){
            document.body.style.overflow = "hidden"
        }else{
            document.body.style.overflow = "scroll"
        }
    })


    const [menu] = useState(['About Us','Vacancies','Contact Us'])
    const [signIn,setSignin] = useState(false)


    const closeRegistration = (a)=>{
        setSignin(a)
    }

    const openRegistration = ()=>{
        setSignin(true)
    }




    return <div>
        <div className="header">
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
            <button onClick={openRegistration} className='G-button'>Sign In</button>
            {signIn? <SignIn close={closeRegistration} /> : null}
        </div>
    </div>
}

export default Header