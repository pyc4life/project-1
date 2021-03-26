import jwt from 'jsonwebtoken';

import config from '../config';

const createToken = (_id) => {
    return jwt.sign({ _id }, config.secret, { expiresIn: '1h' });
};

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, config.secret, (err, payload) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(payload);
        });
    })
};

export default {
    createToken,
    verifyToken,
};
