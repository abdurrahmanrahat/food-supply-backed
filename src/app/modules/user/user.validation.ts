import { z } from 'zod';

export const userValidationSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .max(10, { message: 'Password size maximum 10 characters.' }),
});
