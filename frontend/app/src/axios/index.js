import axios from "axios";

const appAxios = axios.create({
    baseURL: "http://localhost:5000/graphql",
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})

export default appAxios