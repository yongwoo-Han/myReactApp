import axios from 'axios';

const header = {
    'Content-Type': 'application/json'
}

export const axiosGet = async (url, param, ...etc) => {
    let response = await axios.get(url, {params:param}, {header})
    return response.data;
};

export const axiosPost = async (url, param, ...etc) => {
    let response = await axios.post(url, param, {header});
    return response.data;
};

