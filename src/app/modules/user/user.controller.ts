import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { UserServices } from './user.service';
import { userValidationSchema } from './user.validation';

const createUser = catchAsync(async (req, res) => {
  const user = req.body;

  // data validation using zod.
  const validateUser = userValidationSchema.parse(user);

  const result = await UserServices.createUserInfoDb(validateUser);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User registered successfully',
    data: result,
  });
});

export const UserControllers = {
  createUser,
};
