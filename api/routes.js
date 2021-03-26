import * as express from 'express';
import controllers from './controllers';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ ok: true });
});

router.use('/auth', controllers.user);

router.use('*', (req, res) => {
    res.json({ invalid: true, message: 'invalid path' });
});

export default router;
