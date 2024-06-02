import { Schema, model } from 'mongoose';
import { TSupply } from './supply.interface';

const supplySchema = new Schema<TSupply>(
  {
    supplyTitle: { type: String, required: true },
    supplyImg: { type: String, required: true },
    supplyCategory: { type: String, required: true },
    supplyQuantity: { type: String, required: true },
    supplyDesc: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Supply = model<TSupply>('Supply', supplySchema);
