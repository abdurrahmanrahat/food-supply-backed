import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { VolunteerControllers } from './volunteer.controller';
import { VolunteerValidations } from './volunteer.validation';

const router = express.Router();

router.post(
  '/create-volunteer',
  validateRequest(VolunteerValidations.createVolunteerValidationSchema),
  VolunteerControllers.createVolunteer,
);

router.get('/', VolunteerControllers.getAllVolunteers);

router.get('/:id', VolunteerControllers.getSingleVolunteer);

router.delete('/:id', VolunteerControllers.deleteVolunteer);

export const VolunteerRoutes = router;
