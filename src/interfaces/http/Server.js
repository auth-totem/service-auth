const express = require('express');
const helmet = require('helmet');

module.exports = class Server {
  constructor({ logger, router }) {
    this.logger = logger;
    this.router = router;
    this.express = express();
    this.express.use(helmet());
    this.express.use(this.router);
  }

  start() {
    return new Promise((resolve) => {
      const server = this.express.listen(3000, () => {
        const { port } = server.address();

        this.logger.info(`[p ${process.pid}] Listening at port ${port}`);

        resolve();
      });
    });
  }
};
