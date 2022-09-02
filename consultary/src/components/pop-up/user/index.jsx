import React, {useState} from "react";
import "./style.scss"
import {RegistrationUser} from "../../../platform/api/index";


const User = () => {

    const [user, setUser] = useState({
        title: "user",
        gender: "Mr.",
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const [accept, setAccept] = useState(false)
    const [accept2, setAccept2] = useState(null)

    const [validation, setValidation] = useState({
        title: "user",
        gender: "Mr.",
        firstName: 1,
        lastName: 1,
        email: 1,
        password: 1
    })

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const genderclick = (a) => {
        setUser({...user, gender: a})
    }

    const checkchange = (e) => {
        setAccept(e.target.checked)
    }

    const signUpClick = async ()=>{
        setAccept2(accept)
        setValidation(user)
        if(user.title && user.gender && user.email && user.lastName && user.firstName && user.password && accept2===true) {
            const result = await RegistrationUser(user)
            if (result.data) {
                console.log('success')
            } else {
                console.log('errror')
            }
        }
    }

    return <div className="P-regitsration-fields">
        {console.log(accept2)}
                <span>All fields are required</span>
                <div className="P-gender G-flex">
                    <p>Title</p>
                    <button
                        onClick={()=>genderclick("Mr.")}
                        className={`P-gender-mr ${user.gender==="Mr."? 'P-gender-active' : null}`}>Mr.</button>
                    <button
                        onClick={()=>genderclick("Ms.")}
                        className={`P-gender-mr ${user.gender==="Ms."? 'P-gender-active' : null}`}>Ms.</button>
                </div>
                <div className="form">
                    <div className="P-names G-flex G-flex-wrap G-justify-between">
                        <div className="P-first-name P-error">
                            <p>First Name</p>
                            <label  className={`${!validation.firstName? 'P-user-error' : ''}`}>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    name={'firstName'}
                                />
                            </label>
                        </div>
                        <div className="P-first-name P-error">
                            <p>Last Name</p>
                            <label  className={`${!validation.lastName? 'P-user-error' : ''}`}>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    name={'lastName'}/>
                            </label>
                        </div>
                        <div className="P-email P-error">
                            <p>Email</p>
                            <label  className={`${!validation.email? 'P-user-error' : ''}`}>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    name={'email'}/>
                            </label>
                        </div>
                        <div className="P-password P-error">
                            <p>Password</p>
                            <label  className={`${!validation.password? 'P-user-error' : ''}`}>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    name={'password'}/>
                            </label>
                        </div>
                        <div className="P-accept G-flex">
                            <label>
                                <input onChange={checkchange} type="checkbox" />
                            </label>
                            <p className={`${accept2 === false? "P-accept-error" : ''}`}><span>Accept</span> Terms & Conditions</p>
                        </div>
                    </div>
                    <button onClick={signUpClick} className="P-sign-up">Sign Up</button>
                </div>
            </div>
}

export default User