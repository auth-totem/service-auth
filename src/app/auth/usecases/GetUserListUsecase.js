const fileName = 'GetUserListUsecase';

module.exports = ({ logger, userRepository }) => ({
  getUsers: async () => {
    const callName = `${fileName}.getUsers()`;
    logger.info(`${callName} entered`);
    return await userRepository.getUsers();
  },
});