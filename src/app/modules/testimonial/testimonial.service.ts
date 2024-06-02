import { TTestimonial } from './testimonial.interface';
import { Testimonial } from './testimonial.model';

const createTestimonialIntoDB = async (payload: TTestimonial) => {
  const result = await Testimonial.create(payload);
  return result;
};

const getAllTestimonialsFromDB = async () => {
  const result = await Testimonial.find();
  return result;
};

const getSingleTestimonialFromDB = async (id: string) => {
  const result = await Testimonial.findById({ _id: id });
  return result;
};

const deleteTestimonialFromDB = async (id: string) => {
  const result = await Testimonial.findByIdAndDelete({ _id: id });
  return result;
};

export const TestimonialServices = {
  createTestimonialIntoDB,
  getAllTestimonialsFromDB,
  getSingleTestimonialFromDB,
  deleteTestimonialFromDB,
};
