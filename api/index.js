import express from 'express';
import cors from 'cors';
import routes from './routes.js';
import { globalErrorHandler } from './middlewares';

import { dbConnect } from './database';

dbConnect().then(()=> {
    const app = express();
    const port = 3030;

    app.use(cors());
    app.use(express.urlencoded({ extend: false }));
    app.use(express.json());
    app.use(routes);

    app.use(globalErrorHandler);
    
    app.listen(port, console.log(`Listening on port ${port}..`));
}).catch(e => {
    console.log(e);
});
