import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { DonationServices } from './donation.service';

const createDonation = catchAsync(async (req, res) => {
  const result = await DonationServices.createDonationIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Donation inserted successfully',
    data: result,
  });
});

const getAllDonations = catchAsync(async (req, res) => {
  const result = await DonationServices.getAllDonationsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Donations retrieved successfully',
    data: result,
  });
});

const getSingleDonation = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await DonationServices.getSingleDonationFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Donation retrieved successfully',
    data: result,
  });
});

// const updateDonation = catchAsync(async (req, res) => {
//   const { id } = req.params;
//   const result = await DonationServices.updateDonationIntoDB(id, req.body);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Donation updated successfully',
//     data: result,
//   });
// });

const deleteDonation = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await DonationServices.deleteDonationFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Donation deleted successfully',
    data: result,
  });
});

export const DonationControllers = {
  createDonation,
  getAllDonations,
  getSingleDonation,
  deleteDonation,
};
