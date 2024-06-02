import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { SupplyServices } from './supply.service';

const createSupply = catchAsync(async (req, res) => {
  const result = await SupplyServices.createSupplyIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Supply inserted successfully',
    data: result,
  });
});

const getAllSupplies = catchAsync(async (req, res) => {
  const result = await SupplyServices.getAllSuppliesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Supplies retrieved successfully',
    data: result,
  });
});

const getSingleSupply = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SupplyServices.getSingleSupplyFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Supply retrieved successfully',
    data: result,
  });
});

const updateSupply = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SupplyServices.updateSupplyIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Supply updated successfully',
    data: result,
  });
});

const deleteSupply = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SupplyServices.deleteSupplyFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Supply deleted successfully',
    data: result,
  });
});

export const SupplyControllers = {
  createSupply,
  getAllSupplies,
  getSingleSupply,
  updateSupply,
  deleteSupply,
};
