import api from './api';
import request from './request';
import { HTTP_METHODS } from '../constants';

const buildResume = (resumeData) => {
    return request(api.resume.buildResume, HTTP_METHODS.POST, resumeData);
};

export default {
    buildResume,
};
