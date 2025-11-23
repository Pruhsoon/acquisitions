// for running the server, implement logging

import app from './app.js';

const  PORT = process.env.port || 3000;

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`)
});


