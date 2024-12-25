import axios from "axios";

const axiosFetch = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    credentials: 'include'
});

export default axiosFetch;