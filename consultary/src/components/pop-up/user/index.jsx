import React, {useState} from "react";
import "./style.scss"
import {RegistrationUser} from "../../../platform/api/index";
import {isEmail, isPassword} from "../../../utils/utils";
import Eyes from "../../../assets/images/eye.png"
import EyesClose from "../../../assets/images/eyesX.png"


const User = () => {

    const [eyes, setEyes] = useState(true)

    const [user, setUser] = useState({
        title: "user",
        gender: "Mr.",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        accept: ""
    })
    
    // const [accept,setAccept] = useState(false)

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        accept: ''
    })

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        setErrors({...errors,[e.target.name]:''})
    }


    const genderclick = (a) => {
        setUser({...user, gender: a})
    }

    const checkChange = (e) => {
        setUser({...user,accept: e.target.checked})
        setErrors({...errors, accept: ''})
    }

    const clickPassword = ()=>{
        setEyes(!eyes)
    }



    const validation =()=>{
        let isValidate = true
        const errors = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            accept: ''
        }

        if(!user.firstName.trim().length){
            isValidate = false
            errors.firstName = 'Fill the first name field'
        }
        if(!user.lastName.trim().length){
            isValidate = false
            errors.lastName = 'Fill the last name field'
        }
        if(!user.email.trim().length){
            isValidate = false
            errors.email = 'Fill the email field'
        }
        else if(user.email && !isEmail(user.email)){
            isValidate = false
            errors.email = 'Incorrect email address'
        }
        if(!user.password.trim().length){
            isValidate = false
            errors.password = 'Fill the password field'
        }
        else if(user.password && !isPassword(user.password)){
            isValidate = false
            errors.password = 'A minimum 8 characters,lowercase,uppercase,number and symbol(!@#$%^&*)'
        }
        if(!user.accept){
            isValidate = false
            errors.accept = 'Agree on Terms?'
        }
        setErrors(errors)
        return isValidate

    }

    const signUpClick = async ()=>{
        if(validation()){
           const result = await RegistrationUser(user)
           if (result.data) {
               console.log(result.data)
           } else {
               console.log('errror')
           }
       }
    }

    return <div className="P-regitsration-fields">
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
                            <label  className={`${errors.firstName? 'P-user-error' : ''}`}>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    name={'firstName'}
                                />
                                {errors.firstName?<p>{errors.firstName}</p>:null}
                            </label>
                        </div>
                        <div className="P-first-name P-error">
                            <p>Last Name</p>
                            <label  className={`${errors.lastName? 'P-user-error' : ''}`}>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    name={'lastName'}/>
                                {errors.lastName?<p>{errors.lastName}</p>:null}
                            </label>
                        </div>
                        <div className="P-email P-error">
                            <p>Email</p>
                            <label  className={`${errors.email? 'P-user-error' : ''}`}>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    name={'email'}/>
                                {errors.email?<p>{errors.email}</p>:null}

                            </label>
                        </div>
                        <div className="P-password P-error">
                            <p>Password</p>
                            <label  className={`${errors.password? 'P-user-error' : ''}`}>
                                <input
                                    type={eyes?'password':'text'}
                                    // type="password"
                                    onChange={handleChange}
                                    name={'password'}
                                    value={user.password}/>
                                <img onClick={clickPassword} src={eyes? EyesClose : Eyes} alt="Eyes-logo"/>
                                {errors.password?<p>{errors.password}</p>:null}
                            </label>
                        </div>
                        <div className={`P-accept G-flex ${errors.accept? "P-accept-error" : null}`}>
                            <label>
                                <input onChange={checkChange} type="checkbox" />
                            </label>
                            <p><span>Accept</span> Terms & Conditions</p>
                        </div>
                    </div>
                    <button onClick={signUpClick} className="P-sign-up">Sign Up</button>
                </div>
            </div>
}

export default User