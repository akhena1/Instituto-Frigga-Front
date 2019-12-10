import Axios from 'axios';

export const api = Axios.create({
    baseURL: "https://localhost:5001/api",
    headers: {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer " + localStorage.getItem("usuario-frigga"),
        "Access-Control-Allow-Origin":"*"
        
    }
})


export const apiFormData = Axios.create({
    baseURL: "https://localhost:5001/api",
    headers: {
        "Authorization" : "Bearer " + localStorage.getItem("usuario-frigga"),
        "Access-Control-Allow-Origin":"*"
        
    }
})

export default api; 