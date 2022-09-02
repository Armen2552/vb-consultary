import React, {useState} from "react";
import "../user/style.scss"
import {RegistrationCompany} from "../../../platform/api/index";


const Company = () => {

    const [company, setCompany] = useState({
        title: "company",
        gender: "Mr.",
        companyName: "",
        contactPerson: "",
        companyEmail: "",
        password: ""
    })

    const handleChange = (e) => {
        setCompany({...company, [e.target.name]: e.target.value})
    }

    const genderclick = (a) => {
        setCompany({...company, gender: a})
    }

    const signUpCompanyClick = async ()=>{
        const result = await RegistrationCompany(company)
        if(result.data){
            console.log('success')
        }else{
            console.log('errror')
        }
    }

    return  <div className="P-regitsration-fields">
        {console.log(company)}
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
                        <div className="P-first-name">
                            <p>Company Name</p>
                            <label>
                                <input type="text" onChange={handleChange} name={'companyName'}/>
                            </label>
                        </div>
                        <div className="P-first-name">
                            <p>Contact Person/Title</p>
                            <label>
                                <input type="text" onChange={handleChange} name={'contactPerson'}/>
                            </label>
                        </div>
                        <div className="P-email">
                            <p>Company Email</p>
                            <label>
                                <input type="text" onChange={handleChange} name={'companyEmail'}/>
                            </label>
                        </div>
                        <div className="P-password">
                            <p>Password</p>
                            <label>
                                <input type="text" onChange={handleChange} name={'password'}/>
                            </label>
                        </div>
                        <div className="P-accept G-flex">
                            <label>
                                <input type="checkbox" />
                            </label>
                            <p><span>Accept</span> Terms & Conditions</p>
                        </div>
                    </div>
                    <button onClick={signUpCompanyClick} className="P-sign-up">Sign Up</button>
                </div>
            </div>
}

export default Company