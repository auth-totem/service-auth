import RegisterSmartphoneNfcUsecase from './register_smartphone_nfc_usecase';

import { userRepository, nfcRepository } from '../repositories';

export const registerSmartphoneNfcUsecase = new RegisterSmartphoneNfcUsecase(
  userRepository,
  nfcRepository
);
