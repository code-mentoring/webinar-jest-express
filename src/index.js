const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/users');

module.exports.start = async (PORT = process.env.PORT || 9999) => {
  const app = express();
  app.use(bodyParser());
  app.use(userRouter);

  app.use((err, req, res, next) => {
    res.json({
      message: err.message
    });
  });

  app.listen(PORT, server => {
    console.log(`Server listening on localhost:${PORT}`);
  });
  return app;
  // return await new Promise(res => {
  //   app.listen(PORT, server => {
  //     console.log(`Server listening on localhost:${PORT}`);
  //     res(server);
  //   });
  // });
}

// Is this file called directly from the CLI
if (require.main === process.mainModule) module.exports.start()
