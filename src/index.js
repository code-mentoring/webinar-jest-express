const express = require('express');
const userRouter = require('./routes/users');

const app = express();
app.use(userRouter);

const PORT = process.env.PORT || 9999
app.listen(PORT);
console.log(`Server listening on localhost:${PORT}`);
