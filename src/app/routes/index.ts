import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { SupplyRoutes } from '../modules/supply/supply.route';
import { UserRoutes } from '../modules/user/user.route';

const router = express.Router();

// app.use('/api/v1/users', UserRoutes);
const moduleRoutes = [
  { path: '/users', route: UserRoutes },
  { path: '/auth', route: AuthRoutes },
  { path: '/supplies', route: SupplyRoutes },
];

moduleRoutes.forEach((item) => router.use(item.path, item.route));

export default router;
