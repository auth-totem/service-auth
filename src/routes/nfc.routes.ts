import { Router } from 'express';

import { nfcController } from '../controllers';

const routes = Router();
routes.post('/nfc', nfcController.create)

export default routes;