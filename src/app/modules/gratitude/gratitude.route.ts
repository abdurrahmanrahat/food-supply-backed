import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { GratitudeControllers } from './gratitude.controller';
import { GratitudeValidations } from './gratitude.validation';

const router = express.Router();

router.post(
  '/create-gratitude',
  validateRequest(GratitudeValidations.createGratitudeValidationSchema),
  GratitudeControllers.createGratitude,
);

router.get('/', GratitudeControllers.getAllGratitudes);

router.get('/:id', GratitudeControllers.getSingleGratitude);

router.delete('/:id', GratitudeControllers.deleteGratitude);

export const GratitudeRoutes = router;
