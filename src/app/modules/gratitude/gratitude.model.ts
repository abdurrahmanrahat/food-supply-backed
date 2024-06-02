import { Schema, model } from 'mongoose';
import { TGratitude } from './gratitude.interface';

const GratitudeSchema = new Schema<TGratitude>(
  {
    comment: { type: String, required: true },
    userEmail: { type: String, required: true },
    userName: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Gratitude = model<TGratitude>('Gratitude', GratitudeSchema);
