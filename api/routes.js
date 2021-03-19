import * as express from 'express';
import controllers from './controllers';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ ok:true });
});

router.use('/users', controllers.user);

router.use('*', (req, res) => {
    res.json({ invalid:true });
});

export default router;
