
import { axiosInstance } from "./index";

export const RegisterUser = async (value)=>{
    try{
        const response = await axiosInstance.post("http://localhost:8080/api/users/register", value);
        return response.data;

    }
    catch(error){
        console.error("Error in RegisterUser:", error);
        throw error;
    }
}

export const LoginUser = async (value)=>{
    try{
        const response = await axiosInstance.post("http://localhost:8080/api/users/login", value);
        return response.data;

    }
    catch(error){
        console.error("Error in RegisterUser:", error);
        throw error;
    }
}