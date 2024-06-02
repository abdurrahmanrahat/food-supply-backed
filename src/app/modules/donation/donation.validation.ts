import { z } from 'zod';

const createSupplyDonationValidationSchema = z.object({
  body: z.object({
    userName: z.string(),
    userEmail: z.string().email(),
    supplyImg: z.string(),
    supplyTitle: z.string(),
    supplyCategory: z.string(),
    supplyQuantity: z.string(),
    supplyDesc: z.string(),
    newSupplyQuantity: z.string(),
  }),
});

export const DonationValidations = {
  createSupplyDonationValidationSchema,
};
