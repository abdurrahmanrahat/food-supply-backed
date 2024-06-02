import { Schema, model } from 'mongoose';
import { TDonation } from './donation.interface';

const donationSchema = new Schema<TDonation>(
  {
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    supplyTitle: { type: String, required: true },
    supplyImg: { type: String, required: true },
    supplyCategory: { type: String, required: true },
    supplyQuantity: { type: String, required: true },
    supplyDesc: { type: String, required: true },
    newSupplyQuantity: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Donation = model<TDonation>('Donation', donationSchema);
