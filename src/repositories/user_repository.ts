import { Knex } from 'knex';
import { User } from '../@types/interface';
import { WALLET } from '../db/tables';

export default class UserRepository {
  private db: Knex;

  constructor(db: Knex) {
    this.db = db;
  }

  async findUserWithCode(code: string): Promise<User> {
    try {
      return await this.db
        .select('idCadaster AS id')
        .from(WALLET)
        .where('codeWallet', code)
        .andWhere('status', 'A')
        .first();
    } catch (e) {
      throw 'error on user repository';
    }
  }
}
