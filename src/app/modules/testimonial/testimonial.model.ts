import { Schema, model } from 'mongoose';
import { TTestimonial } from './testimonial.interface';

const testimonialSchema = new Schema<TTestimonial>(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
    review: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Testimonial = model<TTestimonial>(
  'Testimonial',
  testimonialSchema,
);
