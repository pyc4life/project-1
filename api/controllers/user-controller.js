import express from 'express';
import { message } from 'statuses';
import services from '../services';

import config from '../config';

const router = express.Router();

router.get('/', (req, res) => {
    services.user.getUsers()
        .then(users => res.json({ users }))
        .catch(error => res.json(error));
});

router.get('/:username', (req, res) => {
    const { username } = req.params;

    services.user.getUser(username)
        .then(user => res.json({ user }))
        .catch(error => res.json(error));
});

router.post('/register', (req, res, next) => {
    services.user.createUser(req.body)
        .then(() => {
            res.json({
                ok: true,
            });
        })
        .catch(next);
});

router.post('/login', (req, res, next) => {

    services.user.login(req.body)
        .then(token => {
            res
                .cookie(config.cookie, token, { maxAge: 9000, httpOnly: true })
                .json({
                    ok: true
                });
        })
        .catch(next);
});

router.put('/', (req, res) => {

});

router.delete('/', (req, res) => {

});

export default router;
