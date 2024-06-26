import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { AuthServices } from './auth.service';

const loginUser = catchAsync(async (req, res) => {
  const loggedInUser = req.body;

  const result = await AuthServices.loginUserIntoDb(loggedInUser);

  // res.status(201).json({
  //   success: true,
  //   message: 'User login successfully',
  //   token: result,
  // });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User login successfully',
    data: result,
  });
});

export const AuthControllers = {
  loginUser,
};
