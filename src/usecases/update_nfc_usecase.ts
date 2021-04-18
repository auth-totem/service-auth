import NfcRepository from '../repositories/nfc_repository';
import UserRepository from '../repositories/user_repository';

export default class UpdateNfcUsecase {
  private userRepository: UserRepository;
  private nfcRepository: NfcRepository;

  constructor(userRepository: UserRepository, nfcRepository: NfcRepository) {
    this.userRepository = userRepository;
    this.nfcRepository = nfcRepository;
  }

  async updateNfc(code: string, nfcCode: string) {
    try {
      const user = await this.userRepository.findUserWithCode(code);
      if (user === undefined) throw 'user not finded';
      const isUpdatedUser = this.nfcRepository.updateNfc(user.id, nfcCode);
      if (isUpdatedUser) return { message: 'user updated', user: user.id };
      throw 'fail in update user';
    } catch (e) {
      throw e;
    }
  }
}
