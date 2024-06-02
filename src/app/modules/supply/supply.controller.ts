import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { SupplyServices } from './supply.service';

const createSupply = catchAsync(async (req, res) => {
  const result = SupplyServices.createSupplyIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Supply inserted successfully',
    data: result,
  });
});

export const SupplyControllers = {
  createSupply,
};
