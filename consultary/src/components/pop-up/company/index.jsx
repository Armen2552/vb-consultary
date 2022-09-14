import React, {useState} from "react";
import "../user/style.scss"
import {RegistrationCompany} from "../../../platform/api/index";
import {isEmail, isPassword} from "../../../utils/utils";
import Eyes from "../../../assets/images/eye.png"
import EyesClose from "../../../assets/images/eyesX.png"

const Company = () => {

    const [eyes,setEyes] = useState(true)

    const [company, setCompany] = useState({
        title: "company",
        gender: "Mr.",
        companyName: "",
        contactPerson: "",
        companyEmail: "",
        password: "",
        accept: ""
    })


    const [errors, setErrors] = useState({
        title: "company",
        gender: "Mr.",
        companyName: "",
        contactPerson: "",
        companyEmail: "",
        password: "",
        accept: ""
    })


    const clickPassword = ()=>{
        setEyes(!eyes)
    }

    const checkChange = (e) => {
        setCompany({...company,accept: e.target.checked})
        setErrors({...errors, accept: ''})
    }

    const handleChange = (e) => {
        setCompany({...company, [e.target.name]: e.target.value})
        setErrors({...errors, [e.target.name]: ""})
    }

    const genderclick = (a) => {
        setCompany({...company, gender: a})
    }

    const validation = ()=>{
        let isValidate = true

        const errors = {
            companyName: "",
            contactPerson: "",
            companyEmail: "",
            password: "",
            accept: ""
        }

        if(!company.companyName.trim().length){
            isValidate = false
            errors.companyName = "Fill the company name field"
        }
        if(!company.contactPerson.trim().length){
            isValidate = false
            errors.contactPerson = "Fill the contact person name field"
        }
        if(!company.companyEmail.trim().length){
            isValidate = false
            errors.companyEmail = "Fill the email field"
        }
        else if(company.companyEmail.trim().length && !isEmail(company.companyEmail)){
            isValidate = false
            errors.companyEmail = "Incorrect email address"
        }
        if(!company.password.trim().length){
            isValidate = false
            errors.password = 'Fill the password field'
        }
        else if(company.password.trim().length && !isPassword(company.password)){
            isValidate = false
            errors.password = 'A minimum 8 characters,lowercase,uppercase,number and symbol(!@#$%^&*)'
        }
        if(!company.accept){
            isValidate = false
            errors.accept = 'Agree on Terms?'
        }



        setErrors(errors)

        return isValidate

    }

    const signUpCompanyClick = async ()=>{
        if(validation()){
            const result = await RegistrationCompany(company)
            if(result.data){
                console.log('success')
            }else{
                console.log('errror')
            }
        }
    }

    return  <div className="P-regitsration-fields">
                <span>All fields are required</span>
                <div className="P-gender G-flex">
                    <p>Title</p>
                    <button
                        onClick={()=>genderclick("Mr.")}
                        className={`P-gender-mr ${company.gender==="Mr."? 'P-gender-active' : null}`}>Mr.</button>
                    <button
                        onClick={()=>genderclick("Ms.")}
                        className={`P-gender-mr ${company.gender==="Ms."? 'P-gender-active' : null}`}>Ms.</button>
                </div>
                <div className="form">
                    <div className="P-names G-flex G-flex-wrap G-justify-between">
                        <div className="P-first-name P-error">
                            <p>Company Name</p>
                            <label className={`${errors.companyName? 'P-user-error' : ''}`}>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    name={'companyName'}/>
                                {errors.companyName? <p>{errors.companyName}</p> : null}
                            </label>
                        </div>
                        <div className="P-first-name P-error">
                            <p>Contact Person/Title</p>
                            <label className={`${errors.contactPerson? 'P-user-error' : ''}`}>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    name={'contactPerson'}/>
                                {errors.contactPerson? <p>{errors.contactPerson}</p> : null}
                            </label>
                        </div>
                        <div className="P-email P-error">
                            <p>Company Email</p>
                            <label className={`${errors.companyEmail? 'P-user-error' : ''}`}>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    name={'companyEmail'}/>
                                {errors.companyEmail? <p>{errors.companyEmail}</p> : null}
                            </label>
                        </div>
                        <div className="P-password P-error">
                            <p>Password</p>
                            <label className={`${errors.password? 'P-user-error' : ''}`}>
                                <input
                                    type={eyes?'password':'text'}
                                    onChange={handleChange}
                                    name={'password'}/>
                                <img onClick={clickPassword} src={eyes? EyesClose : Eyes} alt="Eyes-logo"/>
                                {errors.password? <p>{errors.password}</p> : null}
                            </label>
                        </div>
                        <div className={`P-accept G-flex ${errors.accept? "P-accept-error" : null}`}>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={checkChange}/>
                            </label>
                            <p><span>Accept</span> Terms & Conditions</p>
                        </div>
                    </div>
                    <button onClick={signUpCompanyClick} className="P-sign-up">Sign Up</button>
                </div>
            </div>
}

export default Company