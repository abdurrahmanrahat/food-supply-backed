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

router.get('/', SupplyControllers.getAllSupplies);

router.get('/:id', SupplyControllers.getSingleSupply);

router.patch('/:id');

router.delete('/:id', SupplyControllers.deleteSupply);

export const SupplyRoutes = router;
