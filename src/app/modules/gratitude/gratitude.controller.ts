import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { GratitudeServices } from './gratitude.service';

const createGratitude = catchAsync(async (req, res) => {
  const result = await GratitudeServices.createGratitudeIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Gratitude inserted successfully',
    data: result,
  });
});

const getAllGratitudes = catchAsync(async (req, res) => {
  const result = await GratitudeServices.getAllGratitudesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Gratitudes retrieved successfully',
    data: result,
  });
});

const getSingleGratitude = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await GratitudeServices.getSingleGratitudeFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Gratitude retrieved successfully',
    data: result,
  });
});

const deleteGratitude = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await GratitudeServices.deleteGratitudeFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Gratitude deleted successfully',
    data: result,
  });
});

export const GratitudeControllers = {
  createGratitude,
  getAllGratitudes,
  getSingleGratitude,
  deleteGratitude,
};
