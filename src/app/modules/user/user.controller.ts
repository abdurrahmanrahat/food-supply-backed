import { Request, Response } from 'express';
import { UserServices } from './user.service';
import { userValidationSchema } from './user.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    // data validation using zod.
    const validateUser = userValidationSchema.parse(user);

    const result = await UserServices.createUserInfoDb(validateUser);

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: result,
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

export const UserControllers = {
  createUser,
};
