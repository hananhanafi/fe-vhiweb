import axios from 'axios';
import { useToast } from 'vue-toastification'
const toast = useToast()

export const customHeaders = {
  Accept: 'application/json',
};

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: customHeaders,
});
// Add a response interceptor
instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const errorCode = error.response.status
    if(errorCode === 404) {
        toast.error("Data not found");
    } else if (errorCode >= 500) {
        toast.error("Something went wrong");
    }
    return Promise.reject(error);
});

export default instance

export const serializeQuery = (query: any) => {
    if (!query) return '';
    return Object.keys(query)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
        .join('&');
};
