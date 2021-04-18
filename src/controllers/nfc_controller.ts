import { Request, Response } from 'express';

import { registerSmartphoneNfcUsecase } from '../usecases';

import { logger } from '../utils/logger';

export default class UserController {
  async create(req: Request, res: Response) {
    try {
      const { code, nfcCode } = req.body;
      const user = await registerSmartphoneNfcUsecase.register(code, nfcCode);
      return res.status(201).json(user)
    } catch(e) {
      logger.error(e);
      return res.status(403).json({ error: e })
    }
  }
}
