import { Router } from 'express';
import nfcRoutes from './nfc.routes';

const routes = Router();
routes.use('/api/v1/auth/nfc', nfcRoutes);

export default routes;
