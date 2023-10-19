// import axios from 'axios';
import axios, * as others from 'axios';
import Qs from 'qs';
import {defaultConfig} from '../config';

const serializerConfig = {
    arrayFormat: 'brackets',
    encode: false,
};


function callAPI(path, params, method, data = null, options = {}, headersObj = {}){
    const API_ROOT = defaultConfig.baseAPIUrl;
    const url = API_ROOT + path;
    const headers = {
        Accept: 'application/json',
        
        ...headersObj,
    };

    return axios({
        method,
        url,
        params,
        paramsSerializer: (paramObject) => Qs.stringify(paramObject, serializerConfig),
        data,
        headers,
        ...options,
    });
}



export {callAPI};