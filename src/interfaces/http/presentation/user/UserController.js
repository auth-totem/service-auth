const fileName = 'UserController';

module.exports = ({
  logger,
  userRegisterUsecase,
  getUserListUsecase,
  getUserByWallet,
}) => ({
  createUser: async (req, res) => {
    const callName = `${fileName}.createUser()`;
    try {
      logger.info(`${callName} entered with data`, req.body);
      const user = await userRegisterUsecase.userRegister(req.body);
      logger.info(`${callName} user created with id: ${user}`);
      return res
        .status(201)
        .json({ success: { message: 'user created', id: user } });
    } catch (err) {
      logger.error(`${callName} error ocurred with error`, err);
      return res.status(403).json({ error: 'a error has ocurred' });
    }
  },

  getUserList: async (req, res) => {
    const callName = `${fileName}.getUserList()`;
    try {
      logger.info(`${callName} entered`);
      const users = await getUserListUsecase.getUsers();
      return res.status(200).json(users);
    } catch (err) {
      logger.error(`${callName} error ocurred with error`, err);
      return res.status(403).json({ error: 'a error has ocurred' });
    }
  },

  getUser: async (req, res) => {
    const callName = `${fileName}.getUser()`;
    try {
      logger.info(`${callName} entered with id`, req.params.id);
      const user = await getUserByWallet.getUser(req.params.id);
      return res.status(200).json(user);
    } catch (err) {
      logger.error(`${callName} error ocurred with error`, err);
      return res.status(403).json({ error: 'a error has ocurred' });
    }
  },

  health: (req, res) => {
    const callName = `${fileName}.health()`;
    logger.info(`${callName} entered with data`, req.body);
    return res.status(200).json({ health: 'api up and running' });
  },
});
