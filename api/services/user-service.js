import models from '../models';

const getUser = (username) => {
    return models.User.findOne({ username });
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

const getUsers = () => {
    return models.User.find({});
}

export default {
    createUser,
    getUser,
    getUsers,
};
