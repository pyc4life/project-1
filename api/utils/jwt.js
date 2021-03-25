import jwt from 'jsonwebtoken';

import config from '../config';

const createToken = (_id) => (
    jwt.sign({ _id }, config.secret, { expiresIn: '15m' })
);

const verifyToken = (token) => { }

export default {
    createToken,
    verifyToken,
};
