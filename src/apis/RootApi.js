import { API_URL } from './../constants/Config';
import { TOKEN } from './../constants/Config';
import axios from 'axios';

var bearer = "Bearer " + TOKEN;
const headers = {
    headers: { Authorization: bearer, 'Access-Control-Allow-Origin': '*' },

};
export const create = (url, data) => {
    return axios.post(API_URL + url, data, headers);
};

export const getAllWithPost = (url, data) => {
    return axios.post(API_URL + url, data, headers);
};

export const getAll = (url) => {
    return axios.get(API_URL + url, headers);
};

export const findById = (url) => {
    return axios.get(API_URL + url, headers);
};
export const get = (url) => {
    return axios.get(API_URL + url, headers);
}
export const post = (url, data) => {
    return axios.post(API_URL + url, data, headers);
};
