const { v4: uuid } = require('uuid');

const createUser = require('src/app/auth/entities/UserEntity');
const createWallet = require('src/app/auth/entities/WalletEntity');

const fileName = 'UserRegisterUsecase';

module.exports = ({ logger, userRepository }) => ({
  userRegister: async (user) => {
    const callName = `${fileName}.userRegister()`;
    logger.info(`${callName} entered with data:\n` + JSON.stringify(user));
    const findUserWithCode = await userRepository.getUserByWallet(
      user.codeWallet
    );
    if (findUserWithCode) throw new Error('user already created');

    const createdUser = createUser({ ...user, uuid: uuid() });
    await userRepository.createUser(createdUser);
    logger.info(`${callName} user created`);
    logger.info(
      `${callName} trying to get user id with uuid: ` + createdUser.uuid
    );
    const { idCadaster } = await userRepository.getUserByUuid(createdUser.uuid);
    logger.info(`${callName} user id picked with succes: ` + idCadaster);
    const wallet = createWallet({ ...user, idCadaster });
    await userRepository.createWallet(wallet);
    return idCadaster;
  },
});
