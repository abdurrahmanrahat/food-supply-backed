import { Schema, model } from 'mongoose';
import { TVolunteer } from './volunteer.interface';

const volunteerSchema = new Schema<TVolunteer>(
  {
    email: { type: String, required: true },
    image: { type: String, required: true },
    location: { type: String, required: true },
    name: { type: String, required: true },
    number: { type: String, required: true },
    profession: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Volunteer = model<TVolunteer>('Volunteer', volunteerSchema);
