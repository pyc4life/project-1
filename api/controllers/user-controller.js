import express from 'express';
import { message } from 'statuses';
import services from '../services';

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

router.post('/', (req, res) => {

    services.user.createUser(req.body)
        .then(user => res.json({ user }))
        .catch(e => console.log(e));
});

router.put('/', (req, res) => {

});

router.delete('/', (req, res) => {

});

export default router;
