import {commonrequest} from "./ApiCall"
import { BASE_URL } from "./config"

export const  registerfunction = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/user/register`,data,header)
}