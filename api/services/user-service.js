import models from '../models';

const createUser = (userData) => {
    return models.User.create(userData);
};

const getUser = (username) => {
    return models.User.findOne({ username });
};

const getUsers = () => {
    return models.User.find({});
}

export default {
    createUser,
    getUser,
    getUsers,
};
