import axios from 'axios';
import toast from 'react-hot-toast';

const url ='http://localhost:8000';
export const authenticateSignup = async (data) => {
    try {
        const response = await axios.post(`${url}/signup`, data);
        console.log(response.data.message);
        localStorage.setItem('User',JSON.stringify(response.data.message));
        toast.success('Signup successfully')
        return response;
    } catch (error){
        console.error("error is found",error.message);
        toast.error('Signup failed',error.message);
    }
} 

export const authenticateLogin = async (data) => {
    try {
        const response = await axios.post(`${url}/login`, data);
        localStorage.setItem('User',JSON.stringify(response.data.data));
        console.log(response.data.data);
        toast.success('Login successfully')
        return response;
    } catch (error){
        console.error("error is found",error.message);
        toast.error('Login successfully', error.message);
        return error.response;
    }
}

