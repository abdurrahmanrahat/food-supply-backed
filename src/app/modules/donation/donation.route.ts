import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { DonationControllers } from './donation.controller';
import { DonationValidations } from './donation.validation';

const router = express.Router();

router.post(
  '/create-donation',
  validateRequest(DonationValidations.createSupplyDonationValidationSchema),
  DonationControllers.createDonation,
);

router.get('/', DonationControllers.getAllDonations);

router.get('/:id', DonationControllers.getSingleDonation);

// router.patch(
//   '/:id',
//   validateRequest(DonationValidations.updateDonationValidationSchema),
//   DonationControllers.updateDonation,
// );

router.delete('/:id', DonationControllers.deleteDonation);

export const DonationRoutes = router;
