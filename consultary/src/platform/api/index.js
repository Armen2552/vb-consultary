import axios from "axios";
import {ApiUrl} from "../../routers";


export const RegistrationUser = async (data)=>{
    return await axios.post(`${ApiUrl}userRegister`, data)
}
export const RegistrationCompany = async (data)=>{
    return await axios.post(`${ApiUrl}companyRegister`, data)
}