import { Knex } from 'knex';
import { CADASTER } from '../db/tables';

export default class NfcRepository {
  private db: Knex;

  constructor(db: Knex) {
    this.db = db;
  }

  private bsSelect(id: string, nfcCode: string) {
    return this.db
      .update({
        categoryCode1: nfcCode,
      })
      .into(CADASTER)
      .where('idCadaster', id);
  }

  async registerNewNfc(id: string, nfcCode: string): Promise<boolean> {
    try {
      return await this.bsSelect(id, nfcCode)
        .andWhere('categoryCode1', null)
        .then(() => true)
        .catch(() => false);
    } catch (e) {
      throw 'fail in register nfc code';
    }
  }

  async updateNfc(id: string, nfcCode: string) {
    try {
      return await this.bsSelect(id, nfcCode)
        // definir regra de negócio para atuliazação
        .then(() => true)
        .catch(() => false);
    } catch (e) {
      throw 'fail in register nfc code';
    }
  }
}
