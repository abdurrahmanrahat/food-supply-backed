import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { SupplyControllers } from './supply.controller';
import { SupplyValidations } from './supply.validation';

const router = express.Router();

router.post(
  '/create-supply',
  validateRequest(SupplyValidations.createSupplyValidationSchema),
  SupplyControllers.createSupply,
);

router.get('/');

router.get('/:id');

router.patch('/:id');

router.delete('/:id');

export const SupplyRoutes = router;
