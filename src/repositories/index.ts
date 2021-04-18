import UserRepository from './user_repository';
import NfcRepository from './nfc_repository';

import db from '../db';

export const userRepository = new UserRepository(db);
export const nfcRepository = new NfcRepository(db);
