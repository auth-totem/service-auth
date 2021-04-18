import { json, Request, Response } from 'express';

import {
  registerSmartphoneNfcUsecase,
  findUserWithNfcCodeUsecase,
  updateNfcUsecase,
} from '../usecases';

import { logger } from '../utils/logger';

export default class UserController {
  async show(req: Request, res: Response) {
    try {
      const nfcCode = req.params['nfccode'];
      const user = await findUserWithNfcCodeUsecase.findUser(nfcCode);
      return res.status(200).json({ user });
    } catch (e) {
      logger.error(e);
      return res.status(403).json({ error: e });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { code, nfcCode } = req.body;
      const user = await registerSmartphoneNfcUsecase.register(code, nfcCode);
      return res.status(201).json(user);
    } catch (e) {
      logger.error(e);
      return res.status(403).json({ error: e });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const code = req.params['code'];
      const { nfcCode } = req.body;
      const user = await updateNfcUsecase.updateNfc(code, nfcCode);
      return res.status(205).json(user);
    } catch (e) {
      logger.error(e);
      return res.status(403).json({ error: e });
    }
  }
}
