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

const updateSupplyValidationSchema = z.object({
  body: z.object({
    supplyImg: z.string().optional(),
    supplyTitle: z.string().optional(),
    supplyCategory: z.string().optional(),
    supplyQuantity: z.string().optional(),
    supplyDesc: z.string().optional(),
  }),
});

export const SupplyValidations = {
  createSupplyValidationSchema,
  updateSupplyValidationSchema,
};
