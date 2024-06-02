import { z } from 'zod';

const createGratitudeValidationSchema = z.object({
  body: z.object({
    comment: z.string(),
    userEmail: z.string(),
    userName: z.string(),
  }),
});

export const GratitudeValidations = {
  createGratitudeValidationSchema,
};
