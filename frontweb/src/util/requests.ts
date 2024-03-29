import qs from 'qs';
import axios, { AxiosRequestConfig } from 'axios';
import { type } from 'os';

type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userFirstName: string;
    userId: number;
}

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

const tokenKey = 'authData';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'dscatalog';

const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'dscatalog123';


type LoginData = {
    username: string;
    password: string;
}

export const requestBackendLogin = (loginData: LoginData) => {
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET)
    };

    const data = qs.stringify({
        ...loginData,
        grant_type: 'password'
    });

    return axios({ method: 'POST', baseURL: BASE_URL, url: '/oauth/token', data, headers })
}

export const requestBackend = (config: AxiosRequestConfig) => {

    const headers = config.withCredentials ? {
        ...config.headers,
        Authorization: "Bearer " + getAuthData().access_token
    } : config.headers;
    return axios({ ...config, baseURL: BASE_URL, headers });
}

export const saveAuthData = (obj: LoginResponse) => {
    localStorage.setItem('authData', JSON.stringify(obj));
}

export const getAuthData = () => {
    const str = localStorage.getItem(tokenKey) ?? "{}";
    return JSON.parse(str) as LoginResponse;
}

