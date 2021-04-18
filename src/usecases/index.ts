import RegisterSmartphoneNfcUsecase from './register_smartphone_nfc_usecase';
import FindUserWithNfcCodeUsecase from './find_user_with_nfc_usecase';
import UpdateNfcUsecase from './update_nfc_usecase';

import { userRepository, nfcRepository } from '../repositories';

export const registerSmartphoneNfcUsecase = new RegisterSmartphoneNfcUsecase(
  userRepository,
  nfcRepository
);

export const findUserWithNfcCodeUsecase = new FindUserWithNfcCodeUsecase(
  userRepository
);

export const updateNfcUsecase = new UpdateNfcUsecase(
  userRepository,
  nfcRepository
);
