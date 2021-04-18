import { Knex } from 'knex';
import { CADASTER } from '../db/tables';

export default class NfcRepository {
  private db: Knex;

  constructor(db: Knex) {
    this.db = db;
  }

  async registerNewNfc(id: string, nfcCode: string): Promise<boolean> {
    try {
      return await this.db
        .update({
          categoryCode1: nfcCode,
        })
        .into(CADASTER)
        .where('idCadaster', id)
        .andWhere('categoryCode1', null)
        .then(() => true)
        .catch(() => false);
    } catch (e) {
      throw 'fail in register nfc code';
    }
  }
}
