// for setting up the express application

import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.status(200).render('Hello from acquisitions');
})

export default app;