import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { VolunteerServices } from './volunteer.service';

const createVolunteer = catchAsync(async (req, res) => {
  const result = await VolunteerServices.createVolunteerIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Volunteer inserted successfully',
    data: result,
  });
});

const getAllVolunteers = catchAsync(async (req, res) => {
  const result = await VolunteerServices.getAllVolunteersFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Volunteers retrieved successfully',
    data: result,
  });
});

const getSingleVolunteer = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await VolunteerServices.getSingleVolunteerFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Volunteer retrieved successfully',
    data: result,
  });
});

const deleteVolunteer = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await VolunteerServices.deleteVolunteerFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Volunteer deleted successfully',
    data: result,
  });
});

export const VolunteerControllers = {
  createVolunteer,
  getAllVolunteers,
  getSingleVolunteer,
  deleteVolunteer,
};
