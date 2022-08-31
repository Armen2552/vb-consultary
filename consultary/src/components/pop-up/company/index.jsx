import React, {useState} from "react";
import "./style.scss"
import {RegistrationCompany} from "../../../platform/api/index";


const Company = () => {

    const [company, setCompany] = useState({
        title: "company",
        gender: "",
        companyName: "",
        contactPerson: "",
        companyEmail: "",
        password: ""
    })

    const handleChange = (e) => {
        setCompany({...company, [e.target.name]: e.target.value})
    }

    const Genderclick = (a) => {
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
                <div className="P-gender">
                    <p>Title</p>
                    <button onClick={()=>Genderclick("Mr.")} className="P-gender-mr">Mr.</button>
                    <button onClick={()=>Genderclick("Ms.")} className="P-gender-ms">Ms.</button>
                </div>
                <div className="form">
                    <div className="P-names">
                        <div className="P-name">
                            <p>Company Name</p>
                            <label>
                                <input type="text" onChange={handleChange} name={'companyName'}/>
                            </label>
                        </div>
                        <div className="P-name">
                            <p>Contact Person/Title</p>
                            <label>
                                <input type="text" onChange={handleChange} name={'contactPerson'}/>
                            </label>
                        </div>
                        <div className="P-name">
                            <p>Company Email</p>
                            <label>
                                <input type="text" onChange={handleChange} name={'companyEmail'}/>
                            </label>
                        </div>
                        <div className="P-name">
                            <p>Password</p>
                            <label>
                                <input type="text" onChange={handleChange} name={'password'}/>
                            </label>
                        </div>
                    </div>
                    <button onClick={signUpCompanyClick} className="P-sign-up">Sign Up</button>
                </div>
            </div>
}

export default Company