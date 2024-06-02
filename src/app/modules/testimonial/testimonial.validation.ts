import { z } from 'zod';

const createTestimonialValidationSchema = z.object({
  body: z.object({
    image: z.string(),
    name: z.string(),
    role: z.string(),
    review: z.string(),
  }),
});

export const TestimonialValidations = {
  createTestimonialValidationSchema,
};
