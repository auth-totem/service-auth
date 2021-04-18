import NfcRepository from '../repositories/nfc_repository';
import UserRepository from '../repositories/user_repository';

export default class RegisterSmartphoneNfcUsecase {
  private userRepository: UserRepository;
  private nfcRepository: NfcRepository;
  constructor(userRepository: UserRepository, nfcRepository: NfcRepository) {
    this.userRepository = userRepository;
    this.nfcRepository = nfcRepository;
  }

  async register(code: string, nfcCode: string) {
    try {
      const user = await this.userRepository.findUserWithCode(code);
      if (user === undefined) throw 'user not exists';
      const isUserUpdated = await this.nfcRepository.registerNewNfc(
        user.id,
        nfcCode
      );
      if (isUserUpdated) return { message: 'user with nfc code', id: user.id };
      else throw 'fail in put nfc code';
    } catch (e) {
      throw e;
    }
  }
}
