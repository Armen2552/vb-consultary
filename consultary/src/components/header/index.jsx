import React, {useState} from "react";
import "./style.scss"
import headerLogo from "../../assets/images/logo1.png";
import headerSearch from "../../assets/images/Search.png";






const Header = ()=>{


    const [menu] = useState(['About Us','Vacancies','Careers','Contact Us'])



    return <div>
        <div className="header">
            <div className="P-header-menu">
                <div className="P-header-logo">
                    <img src={headerLogo} alt="Logo"/>
                    <p>VBK CONSULTANCY</p>
                </div>
                <ul>
                    {menu.map((elem)=>{
                        return <li>{elem}</li>
                    })}
                </ul>
                <span />
                <img className='search' src={headerSearch} alt="Search"/>
            </div>
            <button className='G-button'>Sign In</button>
        </div>
    </div>
}

export default Header