import { Knex } from 'knex';
import { User } from '../@types/interface';
import { CADASTER, WALLET } from '../db/tables';

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
        .andWhere('status', 'A')
        .where('codeWallet', code)
        .first();
    } catch (e) {
      throw 'error on user repository';
    }
  }

  async finUserWithNfcCode(nfc: string): Promise<User> {
    try {
      return await this.db
        .select('idCadaster AS id')
        .from(CADASTER)
        .where('categoryCode1', nfc)
        .andWhere('status', 'A')
        .first();
    } catch (e) {
      throw 'fail in find user';
    }
  }
}
