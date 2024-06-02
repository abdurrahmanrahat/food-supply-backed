import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { TestimonialControllers } from './testimonial.controller';
import { TestimonialValidations } from './testimonial.validation';

const router = express.Router();

router.post(
  '/create-testimonial',
  validateRequest(TestimonialValidations.createTestimonialValidationSchema),
  TestimonialControllers.createTestimonial,
);

router.get('/', TestimonialControllers.getAllTestimonials);

router.get('/:id', TestimonialControllers.getSingleTestimonial);

router.delete('/:id', TestimonialControllers.deleteTestimonial);

export const TestimonialRoutes = router;
