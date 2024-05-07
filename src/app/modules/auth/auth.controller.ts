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
  } catch (error) {
    console.log(error);
  }
};

export const AuthControllers = {
  loginUser,
};
