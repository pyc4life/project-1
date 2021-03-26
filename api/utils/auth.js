import config from '../config';
import jwt from './jwt';
import models from '../models'

const auth = (req, res, next) => {
    const token = req.cookies[config.cookie] || '';

    if (!token) {
        next();
        return;
    }

    jwt.verifyToken(token)
        .then(({ _id }) => models.User.findOne({ _id }))
        .then(({ username, _id }) => {
            req.user = { username, _id };
            next();
        })
        .catch(e => next(e));
}

export default auth;
