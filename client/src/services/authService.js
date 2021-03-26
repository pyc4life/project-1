import api from './api';
import request from './request';
import { HTTP_METHODS } from '../constants';

const login = (userData) => {
    return request(api.auth.login, HTTP_METHODS.POST, userData);
};

const register = (userData) => {
    return request(api.auth.register, HTTP_METHODS.POST, userData);
};

export default {
    login,
    register,
};
