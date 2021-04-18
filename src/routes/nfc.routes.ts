import { Router } from 'express';

import { nfcController } from '../controllers';

const routes = Router();
routes.get('/nfc/:nfccode', nfcController.show);
routes.put('/nfc/:code', nfcController.update);
routes.post('/nfc', nfcController.create);

export default routes;