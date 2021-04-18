import UserRepository from "../repositories/user_repository";

export default class FindUserWithNfcUsecase {
  private userRepository: UserRepository;
  
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async findUser(nfc: string) {
    try {
      const user = await this.userRepository.finUserWithNfcCode(nfc);
      if(user === undefined) throw 'user not finded';
      return user.id;
    } catch(e) {
      throw e;
    }
  }
}