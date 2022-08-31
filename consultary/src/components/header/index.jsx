import React, {useState} from "react";
import "./style.scss"
import headerLogo from "../../assets/images/logo1.png";
import SignIn from "../pop-up/pop-up-main";






const Header = ()=>{


    const [menu] = useState(['About Us','Vacancies','Contact Us'])
    const [signIn,useSignin] = useState(false)



    const Takeregistration = ()=>{
        useSignin(true)
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
            <button onClick={Takeregistration} className='G-button'>Sign In</button>
            {signIn? <SignIn /> : null}
        </div>
    </div>
}

export default Header