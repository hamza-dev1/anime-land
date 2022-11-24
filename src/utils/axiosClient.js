import axios from "axios";

const apiInstance = axios.create({
    baseURL: 'https://api.jikan.moe/v4/'
});

export default apiInstance;