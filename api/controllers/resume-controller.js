import express from 'express';
import services from '../services';

import config from '../config';

const router = express.Router();

router.post('/', (req, res) => {

    console.log(req.body);

    res.json({ ok: true });
});

export default router;
