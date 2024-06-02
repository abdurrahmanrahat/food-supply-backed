import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { TestimonialServices } from './testimonial.service';

const createTestimonial = catchAsync(async (req, res) => {
  const result = await TestimonialServices.createTestimonialIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Testimonial inserted successfully',
    data: result,
  });
});

const getAllTestimonials = catchAsync(async (req, res) => {
  const result = await TestimonialServices.getAllTestimonialsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Testimonials retrieved successfully',
    data: result,
  });
});

const getSingleTestimonial = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await TestimonialServices.getSingleTestimonialFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Testimonial retrieved successfully',
    data: result,
  });
});

const deleteTestimonial = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await TestimonialServices.deleteTestimonialFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Testimonial deleted successfully',
    data: result,
  });
});

export const TestimonialControllers = {
  createTestimonial,
  getAllTestimonials,
  getSingleTestimonial,
  deleteTestimonial,
};
