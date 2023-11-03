import axios from 'axios';

export const customHeaders = {
  Accept: 'application/json',
};

export default axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: customHeaders,
});

export const serializeQuery = (query: any) => {
    if (!query) return '';
    return Object.keys(query)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
        .join('&');
};
