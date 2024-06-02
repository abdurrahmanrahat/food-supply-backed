import { z } from 'zod';

const createVolunteerValidationSchema = z.object({
  email: z.string().email(),
  image: z.string(),
  location: z.string(),
  name: z.string(),
  number: z.string(),
  profession: z.string(),
});

export const VolunteerValidations = {
  createVolunteerValidationSchema,
};
