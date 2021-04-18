import { Router } from 'express';
import nfcRoutes from './nfc.routes';

const routes = Router();
routes.use('/api/v1/auth', nfcRoutes);

export default routes;
