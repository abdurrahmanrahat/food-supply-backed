import { z } from 'zod';

const createSupplyValidationSchema = z.object({
  body: z.object({
    supplyImg: z.string(),
    supplyTitle: z.string(),
    supplyCategory: z.string(),
    supplyQuantity: z.string(),
    supplyDesc: z.string(),
  }),
});

export const SupplyValidations = {
  createSupplyValidationSchema,
};
