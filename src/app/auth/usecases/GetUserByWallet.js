const fileName = 'GetUserByWallet';

module.exports = ({ logger, userRepository }) => ({
  getUser: async (codeWallet) => {
    const callName = `${fileName}.getUser()`;
    logger.info(`${callName} entered`);
    return await userRepository.getUserByWallet(codeWallet);
  },
});