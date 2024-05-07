import { Request, Response } from 'express';
import { AuthServices } from './auth.service';

const loginUser = async (req: Request, res: Response) => {
  try {
    const loggedInUser = req.body;

    const result = await AuthServices.loginUserIntoDb(loggedInUser);

    res.status(201).json({
      success: true,
      message: 'User login successfully',
      token: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong.',
      error: error?.message,
    });
  }
};

export const AuthControllers = {
  loginUser,
};
