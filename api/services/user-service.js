import models from '../models';

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
                    message: 'dublicated',
                    code: 404,
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
            return user.comparePasswords(password)
        }).then(doPasswordsMatch => {
            if (!doPasswordsMatch) {
                throw {
                    message: 'wrong password',
                    code: 401,
                };
            }
            return
        })
};

export default {
    createUser,
    getUser,
    getUsers,
    login,
};
