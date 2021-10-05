const fileName = 'UserRepository';

module.exports = class UserRepository {
  constructor({ db, logger }) {
    this.db = db;
    this.logger = logger;
  }

  async createUser(data) {
    const callName = `${fileName}.createUser()`;
    this.logger.info(
      `${callName} trying to create new user into cadaster with data`,
      data
    );
    return await this.db.insert(data).into('cadaster');
  }

  async createWallet(data) {
    const callName = `${fileName}.createWallet()`;
    this.logger.info(
      `${callName} trying to create new user into wallet with data\n` +
        JSON.stringify(data)
    );
    return await this.db.insert(data).into('wallet');
  }

  async getUserByUuid(uuid) {
    const callName = `${fileName}.getUserByUuid()`;
    this.logger.info(
      `${callName} trying to get user by uuid, with uuid: ` + uuid
    );
    return await this.db
      .select('*')
      .from('cadaster')
      .where('uuid', uuid)
      .first();
  }

  async getUsers() {
    const callName = `${fileName}.getUsers()`;
    this.logger.info(`${callName} trying to get user list`);
    return await this.db
      .select('*')
      .from('cadaster')
      .leftJoin('wallet', 'wallet.idCadaster', 'cadaster.idCadaster');
  }

  async getUserByWallet(codeWallet) {
    const callName = `${fileName}.getUserByWallet()`;
    this.logger.info(
      `${callName} trying to get user by wallet, with wallet: ` + codeWallet
    );
    return await this.db
      .select('*')
      .from('wallet')
      .where('codeWallet', codeWallet)
      .leftJoin('cadaster', 'cadaster.idCadaster', 'wallet.idCadaster')
      .first();
  }
};
