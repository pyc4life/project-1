import models from '../models';
import utils from '../utils';

const getUser = (username) => {
    return models.User.findOne({ username });
};

const getUsers = () => {
    return models.User.find({});
};

const createUser = (userData) => {
    return getUser(userData.username)
        .then((user) => {
            if (user) {
                throw {
                    message: 'Username is already taken.',
                    code: 400,
                };
            }
            return models.User.create(userData);
        });
};

const login = (userData) => {

    const { username, password } = userData;

    return getUser(username)
        .then(user => {
            if (!user) {
                throw {
                    message: 'not register',
                    code: 404,
                };
            }

            return Promise.all([
                user.comparePasswords(password),
                user._id,
            ]);

        }).then(([doPasswordsMatch, userId]) => {
            if (!doPasswordsMatch) {
                throw {
                    message: 'wrong password',
                    code: 401,
                };
            }

            return utils.jwt.createToken(userId);
        });
};

export default {
    createUser,
    getUser,
    getUsers,
    login,
};
