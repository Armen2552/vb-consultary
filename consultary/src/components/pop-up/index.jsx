import React, {useState} from "react";
import "./style.scss"
import Logo from "../../assets/images/logo1.png"
import {RegistrationUser} from "../../platform/api/index";


const SignIn = () => {

    const [user, setUser] = useState({
        title: "user",
        gender: "",
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const Genderclick = (a) => {
        setUser({...user, gender: a})
    }

    const signUpClick = async ()=>{
        const result = await RegistrationUser(user)
        if(result.data){
            console.log('success')
        }else{
            console.log('errror')
        }
    }

    return <div className="P-pop-up G-flex G-center">
        {/*{console.log(user2)}*/}
        <div className="P-regitsration">
            <div className="P-regitsration-main G-flex G-flex-column G-center">
                <div className="P-regitsration-logo"><img src={Logo} alt="Logo"/></div>
                <div className="P-regitsration-chose G-flex G-justify-evenly">
                    <button className="G-button">User</button>
                    <button className="G-button">Company</button>
                </div>
            </div>
            <div className="P-regitsration-fields">
                <div className="P-gender">
                    <p>Title</p>
                    <button onClick={()=>Genderclick("Mr.")} className="P-gender-mr">Mr.</button>
                    <button onClick={()=>Genderclick("Ms.")} className="P-gender-ms">Ms.</button>
                </div>
                <div className="form">
                    <div className="P-names">
                        <div className="P-name">
                            <p>First Name</p>
                            <label>
                                <input type="text" onChange={handleChange} name={'firstName'}/>
                            </label>
                        </div>
                        <div className="P-name">
                            <p>Last Name</p>
                            <label>
                                <input type="text" onChange={handleChange} name={'lastName'}/>
                            </label>
                        </div>
                        <div className="P-name">
                            <p>Email</p>
                            <label>
                                <input type="text" onChange={handleChange} name={'email'}/>
                            </label>
                        </div>
                        <div className="P-name">
                            <p>Password</p>
                            <label>
                                <input type="text" onChange={handleChange} name={'password'}/>
                            </label>
                        </div>
                    </div>
                    <button onClick={signUpClick} className="P-sign-up">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
}

export default SignIn