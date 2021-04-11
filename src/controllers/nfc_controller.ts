import { Request, Response } from 'express';

import { logger } from '../utils/logger';

export default class UserController {
  async create(req: Request, res: Response) {
    try {
      const { email, nfcCode } = req.body;
      
    } catch(e) {
      logger.error(e);
      return res.status(403).json({ error: e })
    }
  }
}
